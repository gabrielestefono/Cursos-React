import { useState, useEffect } from "react";
import { Product } from "../interfaces/product.interface";

// Custom Hook

export const useFetch = (url: string) => {
	const [data, setData] = useState<Product[] | null>(null);

	// Refatorando POST

	const [config, setConfig] = useState<RequestInit | null>(null);
	const [method, setMethod] = useState<string | null>(null);
	const [callFetch, setCallFetch] = useState<boolean>(false);

	const httpConfig = (data: Product, method: string) => {
		if(method === "POST"){
			setConfig({
				method,
				headers: {
					"Content-type": "application/json"
				},
				body: JSON.stringify(data)
			})
		}

		setMethod(method);
	}

	useEffect(()=>{
		const httpRequest = async () => {
			const res: Response = await fetch(url);

			const json: Product[] = await res.json();

			setData(json)
		}

		httpRequest();
	},[url, callFetch]);

	// Refatorando POST

	useEffect( ()=>{
		const fetchPostData = async () =>{
			if(method === "POST"){
				let fetchOptions: [string, RequestInit] = [url, config!];
	
				const res = await fetch(...fetchOptions);

				const json = await res.json();

				setCallFetch(json);
			}
		}

		fetchPostData();
	},[config, method, url])

	return { data, httpConfig };
} 