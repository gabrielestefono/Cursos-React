import { useState, useEffect } from "react";
import { Product } from "../interfaces/product.interface";

// Custom Hook

export const useFetch = (url: string) => {
	const [data, setData] = useState<Product[] | null>(null);

	useEffect(()=>{
		const fetchData = async () => {
			const res: Response = await fetch(url);

			const json: Product[] = await res.json();

			setData(json)
		}

		fetchData();
	},[url]);

	return { data };
} 