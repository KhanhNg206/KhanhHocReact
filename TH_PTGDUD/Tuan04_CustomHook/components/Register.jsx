import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Register() {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      alert("Register success");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text" value={username}
          onChange={(e) => setUsername(e.target.value)} /> <br />

        <input
          type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;