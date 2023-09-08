import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {

	const [name, setName] = useState();
	const [email, SetEmail] = useState();

	const handleName = (e) => {
		setName(e.target.value)
	}

	const handleEmail = (e) => {
		SetEmail(e.target.value)
	}

	return (
		<>
			<form>
				<div>
					<label htmlFor="name">Nome</label>
					<input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}/>
				</div>
				<label>
					<span>Email</span>
					<input type="text" name="Email" placeholder="Digite o seu email" onChange={handleEmail}/>
				</label>
				<input type="submit" value="Enviar"/>
			</form>
		</>
	)
}
export default MyForm;