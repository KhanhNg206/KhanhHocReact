import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/students";

function StudentManager() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [major, setMajor] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [search, setSearch] = useState("");

    // READ
    useEffect(() => {
        fetchStudents();
    }, []);

   const fetchStudents = () => {
    axios.get(API_URL).then(res => {
        setStudents(res.data)
   });
   };

    // CREATE + UPDATE
    const handleSubmit = () => {
        if (!name || !age || !major) return;

        if (editingId) {
            axios.put(`${API_URL}/${editingId}`, {
                name,
                age,
                major
            }).then(() => {
                fetchStudents();
                resetForm();
            });
        } else {
            axios.post(API_URL, {
                name,
                age,
                major
            }).then(() => {
                fetchStudents();
                resetForm();
            });
        }
    };

    // DELETE
    const handleDelete = (id) => {
        axios.delete(`${API_URL}/${id}`).then(() => {
            fetchStudents();
        });
    };

    // EDIT
    const handleEdit = (student) => {
        setEditingId(student.id);
        setName(student.name);
        setAge(student.age);
        setMajor(student.major);
    };

    const resetForm = () => {
        setName("");
        setAge("");
        setMajor("");
        setEditingId(null);
    };

    // SEARCH
    const filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h2>Quản lý Sinh viên</h2>

            {/* FORM */}
            <input
                placeholder="Tên"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <input
                placeholder="Tuổi"
                value={age}
                onChange={e => setAge(e.target.value)}
            />

            <input
                placeholder="Ngành"
                value={major}
                onChange={e => setMajor(e.target.value)}
            />

            <button onClick={handleSubmit}>
                {editingId ? "Cập nhật" : "Thêm"}
            </button>

            <hr />

            {/* SEARCH */}
            <input
                placeholder="Tìm theo tên..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            {/* LIST */}
            <ul>
                {filteredStudents.map(s => (
                    <li key={s.id}>
                        <b>{s.name}</b> - {s.age} tuổi - {s.major}
                        <br />
                        <button onClick={() => handleEdit(s)}>Sửa</button>
                        <button onClick={() => handleDelete(s.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default StudentManager;
