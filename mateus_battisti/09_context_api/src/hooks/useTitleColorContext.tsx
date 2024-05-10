import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export function useTitleColorContext(){
	const context = useContext(TitleColorContext);

	if(!context){
		console.log("Contexto não encontrado!");
	}

	return context;
}