import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {

    const { logout, name } = useContext(AuthContext)

    return (
        <>
            <div>hello {name}</div>
            <button onClick={logout}>log out</button>
        </>
    )
}

export default Home
