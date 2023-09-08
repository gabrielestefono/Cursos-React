import "./MyForm.css";

const MyForm = () => {
	return (
		<>
			<form>
				<div>
					<label htmlFor="name">Nome</label>
					<input type="text" name="name" placeholder="Digite o seu nome"/>
				</div>
				<input type="submit" value="Enviar"/>
			</form>
		</>
	)
}
export default MyForm;