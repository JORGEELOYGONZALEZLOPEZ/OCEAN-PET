import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const Login = (token) => {
        localStorage.setItem("token", token); //Guardamos el token
        setIsLoggedIn(true);
    };
    const logout = () => {
        localStorage.removeItem("token"); //Limpiamos al salir
        setIsLoggedIn(false);
    };

    return(
        <AuthContext.Provider value = {{ isLoggedIn, Login, logout }} >
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe de usarse dentro de un AuthProvider");
    }
    return context;
};