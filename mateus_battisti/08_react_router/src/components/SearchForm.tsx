import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function SearchForm(){
	const navigate = useNavigate();
	const [query, setQuery] = useState<string>('');

	function handleSubmit(e: FormEvent){
		e.preventDefault();
		navigate('/search?q=' + query);
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={(e)=>setQuery(e.target.value)}/>
			<input type="submit" value="Buscar"/>
		</form>
	)
}