import { useState, useEffect } from "react";
import { Product } from "../interfaces/product.interface";

// Custom Hook

export const useFetch = (url: string) => {
	const [loading, setLoading] = useState<boolean>(false);

	const [data, setData] = useState<Product[] | null>(null);

	// Refatorando POST

	const [config, setConfig] = useState<RequestInit | null>(null);
	const [method, setMethod] = useState<string | null>(null);
	const [callFetch, setCallFetch] = useState<boolean>(false);

	// Loading

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
		const fetchData = async () => {
			setLoading(true);
			const res: Response = await fetch(url);

			const json: Product[] = await res.json();

			setData(json)
			setLoading(false);
		}

		fetchData();
	},[url, callFetch]);

	// Refatorando POST

	useEffect( ()=>{
		const httpRequest = async () =>{
			setLoading(true);
			if(method === "POST"){
				let fetchOptions: [string, RequestInit] = [url, config!];
	
				const res = await fetch(...fetchOptions);

				const json = await res.json();

				setCallFetch(json);
			}
		}

		httpRequest();
	},[config, method, url])

	return { data, httpConfig, loading };
} 