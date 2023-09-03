const Events = () => {
	const handleMyEvent = () => console.log('Ativou o evento!');
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
		</div>
	)
 }

export default Events;