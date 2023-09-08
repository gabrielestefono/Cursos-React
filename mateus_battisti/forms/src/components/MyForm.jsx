import { useState } from "react";
import "./MyForm.css";
import PropTypes from "prop-types";

const MyForm = ({ user }) => {

	const [name, setName] = useState(user ? user.name : '');
	const [email, SetEmail] = useState(user ? user.email : '');
	const [bio, setBio] = useState(user ? user.bio : '');
	const [role, setRole] = useState(user ? user.role : '')

	const handleName = (event) => {
		setName(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Enviado com sucesso!')
		setName('');
		SetEmail('');
		setBio('')
		setRole('')
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nome</label>
					<input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
				</div>
				<label>
					<span>Email</span>
					<input type="text" name="Email" placeholder="Digite o seu email" onChange={(e) => SetEmail(e.target.value)} value={email}/>
				</label>
				<label>
					<span>Bio:</span>
					<textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
				</label>
				<label>
					<span>Função no sistema</span>
					<select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
						<option value="">Selecione uma opção</option>
						<option value="user">Usuário</option>
						<option value="editor">Editor</option>
						<option value="admin">Administrador</option>
					</select>
				</label>
				<input type="submit" value="Enviar" />
			</form>
		</>
	)
}

MyForm.propTypes = {
	user: PropTypes.any,
	name: PropTypes.any,
	email: PropTypes.any,
	bio: PropTypes.any,
	role: PropTypes.any
}

export default MyForm;