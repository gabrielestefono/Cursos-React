import { useState } from "react";

const ConditionalRender = () => {
	const [x] = useState(true);

	const [name] = useState('João');
	return (
		<>
			<h1>Isso será exibido</h1>
			{x && <p>Se X for true, sim!</p>}
			{!x && <p>Agora x é falso</p>}
			{name === "João" ? (
					<div>
						<p>Bem vindo, João</p>
					</div>
				) : (
					<div>
						<p>Nome não encontrado!</p>
					</div>
				)}
		</>
	)
}

export default ConditionalRender;