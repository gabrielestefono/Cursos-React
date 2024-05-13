import React, { useState } from "react";
import styles from "./Register.module.css";

export default function Register() {

	const [displayName, setDisplayName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setError("");

		const user = {
			displayName,
			email,
			password
		}

		if(password !== confirmPassword){
			setError("As senhas precisam ser iguais");
			return;
		}

		console.log(user);
	}

	return (
		<div className={styles.register}>
			<h1>Cadastre-se para postar</h1>
			<p>Crie seu usuário e compartilhe suas histórias</p>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Nome: </span>
					<input type="text" name="displayName" required placeholder="Nome do Usuário" value={displayName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)} />
				</label>
				<label>
					<span>Email: </span>
					<input type="email" name="email" required placeholder="Email do usuário" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
				</label>
				<label>
					<span>Senha: </span>
					<input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
				</label>
				<label>
					<span>Senha: </span>
					<input type="password" name="confirmPassword" required placeholder="Confirme sua senha" value={confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} />
				</label>
				<button className="btn">Cadastrar</button>
				{error && <p className="error">{error}</p>}
			</form>
		</div>
	)
}