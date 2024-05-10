import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Home.css';
import { useCouterContext } from '../hooks/useCounterContext';

import { useTitleColorContext } from '../hooks/useTitleColorContext';

export default function Home() {
	const url = "http://localhost:3000/products";

	const { data: items, error } = useFetch(url);

	const { counter, setCounter }: any = useCouterContext();

	const { color, dispatch } = useTitleColorContext();

	function setTitleColor(color: string) {
		dispatch!({ type: color })
	}

	return (
		<div>
			<h1 style={{ color }}>Produtos</h1>
			<p>Contador</p>
			<p>Você clicou {counter} vezes</p>
			<div>
				<button onClick={() => { setCounter(counter > 0 ? counter - 1 : counter) }}>Dominuir</button>
				<button onClick={() => { setCounter(counter + 1) }}>Aumentar</button>
			</div>
			<div style={{margin: "20px auto 0 auto", display: "flex", gap: "0.3125rem", width: "250px", justifyContent: "center"}}>
				<button onClick={() => { setTitleColor("RED") }} style={{ backgroundColor: "red", color: "white", border: "none", width: "100px", height: "50px", fontSize: "1rem", cursor: "pointer" }}>Vermelho</button>
				<button onClick={() => { setTitleColor("BLUE") }} style={{ backgroundColor: "blue", color: "white", border: "none", width: "100px", height: "50px", fontSize: "1rem", cursor: "pointer" }}>Azul</button>
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