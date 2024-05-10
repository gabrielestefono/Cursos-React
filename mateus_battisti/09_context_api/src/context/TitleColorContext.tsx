import { Dispatch, createContext, useReducer } from 'react';

export const TitleColorContext = createContext<{color?: string, dispatch?: Dispatch<{type: string}>}>({});

const titleColorReducer = (state: {color: string}, action: {type: string}) => {
	switch(action.type){
		case "RED":
			return {...state, color: 'red'};
		case "BLUE":
			return {...state, color: 'blue'};
		default:
			return state;
	}
};


export function TitleColorContextProvider({children}: any){

	const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"});


	console.log("Title color context: " + state.color);

	return(
		<TitleColorContext.Provider value={{...state, dispatch}}>
			{children}
		</TitleColorContext.Provider>
	)
}