import PropTypes from "prop-types";

const Message = ({ msg }) => {
	return (
		<>
			<p>A mensagem é: {msg}</p>
		</>
	)
}

Message.propTypes = {
	msg: PropTypes.any
}

export default Message;