import PropTypes from "prop-types";

const ChangeMessageState = ({ handleMessege }) => {
	const messeges = ["Oi!", "Olá", "Oi! Tudo bem?"];

	return (
		<>
			<button onClick={() => handleMessege(messeges[0])}>1</button>
			<button onClick={() => handleMessege(messeges[1])}>2</button>
			<button onClick={() => handleMessege(messeges[2])}>3</button>
		</>
	)
}

ChangeMessageState.propTypes = {
	handleMessege: PropTypes.any
}

export default ChangeMessageState;