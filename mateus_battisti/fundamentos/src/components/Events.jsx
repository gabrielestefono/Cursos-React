const Events = () => {
	const handleMyEvent = () => console.log('Ativou o evento!');
	const renderSomething = (x) => {
		if (x) {
			return (
				<h1>Renderizando isso!</h1>
			)
		} else {
			return <h1>Também posso renderizar isso!</h1>
		}
	};

	return (
		<div>
			<div>
				<button onClick={handleMyEvent}>Clique Aqui</button>
			</div>
			<div>
				<button onClick={() => console.log("Clicou")}>Clique aqui ²</button>
				<button onClick={() => {
					let sim = true;
					if(sim){
						console.log('Isso não deveria existir')
					}
				}}>Clique aqui também</button>
			</div>
			<div>{renderSomething(true)}</div>
			<div>{ renderSomething(false) }</div>
		</div>
	)
 }

export default Events;