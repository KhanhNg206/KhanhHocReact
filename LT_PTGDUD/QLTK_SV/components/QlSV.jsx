import React, { useReducer, useState, useEffect } from "react";
import StudentForm from "../Form/StudentForm";
import StudentList from "../Form/StudentList";

function QLSV() {
      const initStudents = () => {
        const data = localStorage.getItem("students");
        return data ? JSON.parse(data) : [];
    };

    const [students, dispatch] = useReducer(
        studentReducer,
        [],
        initStudents
    );

    const [editStudent, setEditStudent] = useState(null);

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    function studentReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter(sv => sv.id !== action.payload);
        case "UPDATE":
            return state.map(sv =>
                sv.id === action.payload.id ? action.payload : sv
            );
        default:
            return state;
    }
}


    const handleAdd = (student) => {
        dispatch({ type: "ADD", payload: student });
    };

    const handleDelete = (id) => {
        dispatch({ type: "DELETE", payload: id });
    };

    const handleUpdate = (student) => {
        dispatch({ type: "UPDATE", payload: student });
        setEditStudent(null);
    };

    return (
        <div className="container">
            <h2>Quản lý sinh viên</h2>

            <StudentForm
                onAdd={handleAdd}
                onUpdate={handleUpdate}
                editStudent={editStudent}
            />

            <StudentList
                students={students}
                onDelete={handleDelete}
                onEdit={setEditStudent}
            />
        </div>
    );
}

export default QLSV;
