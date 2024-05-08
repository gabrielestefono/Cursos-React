import PropTypes from 'prop-types';

const CarDetails = ({ brand, km, color, newCar }) => {
	return (
		<div>
			<h2>Detalhes do carro</h2>
			<ul>
				<li>Marca: {brand}</li>	
				<li>Km: {km}</li>	
				<li>Cor: {color}</li>
				<li>{ newCar && <p>Este carro é novo</p>}</li>
			</ul>
		</div>
	)
}

CarDetails.propTypes = {
	brand: PropTypes.string,
	km: PropTypes.number,
	color: PropTypes.string,
	newCar: PropTypes.bool
}

export default CarDetails;