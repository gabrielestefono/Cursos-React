import {useState} from 'react';

const ManageData = () => {
	let someData = 10;
	const [number, setNumber] = useState(0);
	
	return (
		<div>
			<p>{someData}</p>
			<button onClick={() => { someData = 15; console.log(someData) }}>Mudar Variável</button>
			<p>{number}</p>
			<button onClick={() => {setNumber(number + 1)}}>Mudar Variável</button>
		</div>
	)
}

export default ManageData