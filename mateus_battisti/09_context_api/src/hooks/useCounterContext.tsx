import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCouterContext = () => {
	const context = useContext(CounterContext);

	if(!context){
		console.log("context não encontrado!");
	}

	return context;
}