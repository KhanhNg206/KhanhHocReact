import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Login() {
const { login } = useAuth();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) => {e.preventDefault();
try {
   await login(username, password);
   alert("Login success");
}catch (err) { alert(err.message); }
};

return ( 
<div> 
    <h2>Login</h2> 
    <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button> 
    </form>
</div>
);
}

export default Login;
