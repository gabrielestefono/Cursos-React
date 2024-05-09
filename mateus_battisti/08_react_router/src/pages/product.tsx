import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Product(){
	const {id} = useParams();

	const url = "http://localhost:3000/products/" + id;

	const {data: product, loading, error} = useFetch(url);

	console.log(product);

	return (
		<>
		<p>Id do producto {id}</p>
		{error && <p>Ocorreu um erro</p>}
		{loading && <p>Carregando...</p>}
		{!Array.isArray(product) && product && (
			<div>
				<h1>{product.name}</h1>
				<p>{product.price}</p>
			</div>
		)}
		</>

	)
}