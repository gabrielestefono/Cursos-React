import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export default function useAuthentication(){
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	// Cleanup
	// Deal with Memory Leak
	const [cancelled, setCancelled] = useState(false);

	const auth = getAuth();

	function checkIfIsCancelled(){
		if(cancelled){
			return;
		}
	}
}