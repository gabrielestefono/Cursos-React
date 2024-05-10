import {Link} from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Home.css';
// import { CounterContext } from '../context/CounterContext';
// import { useContext } from 'react';
import { useCouterContext } from '../hooks/useCounterContext';

export default function Home(){
	const url = "http://localhost:3000/products";

	const {data: items, error} = useFetch(url);

	const {counter, setCounter} : any = useCouterContext();
	// const {counter, setCounter} : any = useContext(CounterContext);
	
	return (
		<div>
			<h1>Produtos</h1>
			<p>Contador</p>
			<p>Você clicou {counter} vezes</p>
			<div>
				<button onClick={()=>{setCounter(counter > 0 ? counter - 1 : counter)}}>Dominuir</button>
				<button onClick={()=>{setCounter(counter + 1)}}>Aumentar</button>
			</div>
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