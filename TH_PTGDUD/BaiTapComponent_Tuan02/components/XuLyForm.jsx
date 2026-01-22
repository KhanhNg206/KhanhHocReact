import { useState } from "react";

function ControlForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        gender: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const validate = () => {
        const emailRegex = /^[A-Za-z0-9]+@gmail\.com$/;
        if (!emailRegex.test(form.email)) {
            setError("Email không đúng định dạng");
            return false;
        }

        if (form.password.length < 6) {
            setError("Mật khẩu phải từ 6 ký tự trở lên");
            return false;
        }

        setError("");
        return true;
    };

    const handleSubmit = () => {
        if (validate()) {
            alert("Submit thành công");
            console.log(form);
        }
    };

    return (
        <>
            <p>Họ và tên</p>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
            />

            <p>Email</p>
            <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
            />

            <p>Mật khẩu</p>
            <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
            />

            <p>Giới tính</p>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="nam"
                    checked={form.gender === "nam"}
                    onChange={handleChange}
                />
                Nam
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="nu"
                    checked={form.gender === "nu"}
                    onChange={handleChange}
                />
                Nữ
            </label>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default ControlForm;
