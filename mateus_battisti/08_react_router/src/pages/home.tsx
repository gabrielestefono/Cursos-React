import {Link} from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './home.css';

export default function Home(){
	const url = "http://localhost:3000/products";

	const {data: items, httpConfig, loading, error} = useFetch(url);

	return (
		<div>
			<h1>Produtos</h1>
			{error && <p>{error}</p>}
			<ul className="products">
				{Array.isArray(items) && items?.map((item) => 
					(<li key={item.id}>
							<h2>{item.name}</h2>
							<p>R$ {item.price}</p>
							<Link to={`product/${item.id}`} className='link'>Detalhes</Link>
						</li>))}
			</ul>
		</div>
	)
}