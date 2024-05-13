import React, { useState } from 'react';
import useAuthentication from '../../hooks/useAuthentication';
import styles from './Login.module.css';

export default function Login(){
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>('');

	const {loading, error: authError, login} = useAuthentication();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>){
		e.preventDefault();

		setError("");

		const user = {
			email,
            password
		}

		const res = login(user);
	}

	return (
		<div className={styles.login}>
			<h1>Entrar</h1>
			<p>Faça o login para poder utilizar o sistema</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Email: </span>
					<input type="email" name="email" required placeholder="Email do usuário" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
				</label>
				<label>
					<span>Senha: </span>
					<input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
				</label>
				{!loading && <button className="btn">Cadastrar</button>}
				{loading && <button className="btn" disabled>Aguarde...</button>}
				{authError && <p className="error">{authError}</p>}
			</form>
		</div>
	)
}