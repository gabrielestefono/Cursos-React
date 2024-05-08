const TemplateExpressions = () => {

	const name = "Gabriel";
	const data = {
		age: 32,
		job: "programador"
	}
	const dataAtual = new Date();
	const anoAtual = dataAtual.getFullYear();

	return (
		<div>
			<h1>Olá, {name}! Tudo bem?</h1>
			<p>Você atua como {data.job}</p>
			<p>Tem idade de {data.age}</p>
			<p>Nasceu em {anoAtual - data.age}</p>
		</div>
	)
}

export default TemplateExpressions;