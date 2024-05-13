import { ReactNode, createContext, useContext } from "react";

const AuthContext = createContext<string>("");

export function AuthProvider({children, value = ""}: Readonly<{children: ReactNode, value?: string}>){
	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthValue(){
	return useContext(AuthContext);
}