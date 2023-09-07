import PropTypes from "prop-types";

const ExecuteFuncao = ({ myFunction }) => {
	return (
		<div>
			<button onClick={myFunction}>Mostrar Console</button>
		</div>
	)
}

ExecuteFuncao.propTypes = {
	myFunction: PropTypes.any
}

export default ExecuteFuncao;