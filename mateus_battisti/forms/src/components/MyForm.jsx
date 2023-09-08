import "./MyForm.css";

const MyForm = () => {
	return (
		<>
			<form>
				<div>
					<label htmlFor="name">Nome</label>
					<input type="text" name="name" placeholder="Digite o seu nome"/>
				</div>
				<label>
					<span>Email</span>
					<input type="text" name="Email" placeholder="Digite o seu email"/>
				</label>
				<input type="submit" value="Enviar"/>
			</form>
		</>
	)
}
export default MyForm;