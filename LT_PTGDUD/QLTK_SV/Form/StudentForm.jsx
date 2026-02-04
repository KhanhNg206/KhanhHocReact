import React, { useState, useEffect } from "react";

function StudentForm({ onAdd, onUpdate, editStudent }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (editStudent) {
            setName(editStudent.name);
            setUsername(editStudent.username);
            setPassword(editStudent.password);
        }
    }, [editStudent]);

    const handleSubmit = () => {
        if (editStudent) {
            onUpdate({
                id: editStudent.id,
                name,
                username,
                password
            });
        } else {
            onAdd({
                id: Date.now(),
                name,
                username,
                password
            });
        }

        setName("");
        setUsername("");
        setPassword("");
    };

    return (
        <>
            <input
                placeholder="Tên sinh viên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSubmit}>
                {editStudent ? "Cập nhật" : "Thêm"}
            </button>
        </>
    );
}

export default StudentForm;
