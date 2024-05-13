import { app } from '../firebase/config';


import { getAuth, createUserWithEmailAndPassword,  updateProfile, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function useAuthentication(){
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	// Cleanup
	// Deal with Memory Leak
	const [cancelled, setCancelled] = useState(false);

	const auth = getAuth(app);

	function checkIfIsCancelled(){
		if(cancelled){
			return;
		}
	}

	async function createUser(data: { email: string, password: string, displayName: string }){
		checkIfIsCancelled();

		setLoading(true);

		try {
			const { user } = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			)

			await updateProfile(user, {displayName: data.displayName});

			setLoading(false);

		} catch (error : any) {
			console.log(error!.message)			
			console.log(typeof error.message);

			let systemErrorMessage;
			if(error.message.includes('Password')){
				systemErrorMessage = "A senha precisa conter no mínimo 6 caracteres!";
			}else if(error.message.includes('email-already')){
				systemErrorMessage = "Email já cadastrado!";
			}else{
				systemErrorMessage = "Erro interno do sistema, tente mais tarde!";
			}
			setError(systemErrorMessage);
		}
	}

	// Logout

	function logout(){
		checkIfIsCancelled();

		signOut(auth);
	}

	useEffect(()=>{
		return () => setCancelled(true);
	},[])

	return {
		auth,
		createUser,
		error,
		loading,
		logout
	}
}