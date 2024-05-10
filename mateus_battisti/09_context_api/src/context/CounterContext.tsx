import React, { createContext, useState } from 'react';

export const CounterContext = createContext({});

export const CounterContextProvider = ({children}: any) => {
	const [counter, setCounter] = useState<number>(0);

	return (
		<CounterContext.Provider value={{counter, setCounter}}>
			{children}
		</CounterContext.Provider>
	)
}
