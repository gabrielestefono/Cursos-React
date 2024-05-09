import { useParams } from "react-router-dom"

export default function Product(){
	const {id} = useParams();
	return (
		<p>Id do producto {id}</p>
	)
}