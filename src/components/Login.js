import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
    const { name, setName, login } = useContext(AuthContext)

    return (
        <div>
            <input value={name} type='text' placeholder='name' onChange={(event) => setName(event.target.value)}></input>
            <button onClick={login}>go</button>
        </div>
    );
}

export default Login