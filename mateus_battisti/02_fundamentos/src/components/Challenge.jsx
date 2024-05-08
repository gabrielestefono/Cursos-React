const Challenge = () => {
	let a = 5;
	let b = 20;

	const somar = (a, b) => {
		return a + b;
	}

	const handleSum = () => {
		console.log(somar(a, b));
	}

	
	return (
		<>
			<button onClick={handleSum}>Some</button>
		</>
	)
}

export default Challenge;