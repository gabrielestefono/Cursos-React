import PropTypes from 'prop-types';

const ShowUsername = (props) => {

	return (
		<div>
			<h2>O nome do usuário é: { props.name }</h2>
		</div>
	)
}

ShowUsername.propTypes = {
  name: PropTypes.any
};

export default ShowUsername;