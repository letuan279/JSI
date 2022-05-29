import { createContext, useState } from "react";
import { getAuth, signInAnonymously, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [name, setName] = useState('');
    const auth = getAuth();

    const login = () => {
        signInAnonymously(auth)
            .catch((e) => alert(e))
    }

    const logout = () => {
        signOut(auth)
            .catch((e) => alert(e))
    }

    const data = {
        name,
        setName,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider