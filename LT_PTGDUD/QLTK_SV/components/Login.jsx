import React, { useState } from "react";

const ADMIN = {
    username: "admin",
    password: "123"
};

function Login({ setRole, setCurrentStudent }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!username || !password) {
            setError("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        if (username === ADMIN.username && password === ADMIN.password) {
            setError("");
            setRole("admin");
            return;
        }

        const students = JSON.parse(localStorage.getItem("students")) || [];
        const found = students.find(
            sv => sv.username === username && sv.password === password
        );

        if (found) {
            setError("");
            setRole("student");
            setCurrentStudent(found);
        } else {
            setError("Sai tài khoản hoặc mật khẩu");
        }
    };

    return (
        <div>
            <h2>Đăng nhập</h2>

            <input
                placeholder="Tài khoản"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Đăng nhập</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Login;
