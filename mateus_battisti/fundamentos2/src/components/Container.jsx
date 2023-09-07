import PropTypes from "prop-types";

const Container = ({ children, myValue }) => {
	return (
		<div>
			<h2>Este é o título do container</h2>
			{children}
			<p>O valor é: { myValue }</p>
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.any,
	myValue: PropTypes.string
}


export default Container;