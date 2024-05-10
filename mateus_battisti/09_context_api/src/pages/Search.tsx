import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Search(){
	const [searchParams] = useSearchParams();
	const url = "http://localhost:3000/products?" + searchParams;
	const {data: produtos} = useFetch(url)
	return (
		<div>
			<h1>Resultados disponíveis</h1>
			<ul className="products">
				{Array.isArray(produtos) && produtos?.map((produto) => 
					(<li key={produto.id}>
							<h2>{produto.name}</h2>
							<p>R$ {produto.price}</p>
							<Link to={`product/${produto.id}`} className='link'>Detalhes</Link>
						</li>))}
			</ul>
		</div>
	)
}