import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {

	const [name, setName] = useState();
	const [email, SetEmail] = useState();

	const handleName = (event) => {
		setName(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Enviando o formulário');
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nome</label>
					<input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
				</div>
				<label>
					<span>Email</span>
					<input type="text" name="Email" placeholder="Digite o seu email" onChange={(e) => SetEmail(e.target.value)}/>
				</label>
				<input type="submit" value="Enviar"/>
			</form>
		</>
	)
}
export default MyForm;