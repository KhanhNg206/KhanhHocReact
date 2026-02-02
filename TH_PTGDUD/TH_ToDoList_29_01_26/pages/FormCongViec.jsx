import React, { useState, useReducer } from "react";
import FormButton from "./FormButton";
import CongViec from "../components/CongViec";


function cvReducer(state, action) {
    switch (action.type) {
        case "ADD_CV":
            return [...state, action.payload];
        case "DELETE_CV":
            return state.filter(item => item.id !== action.payload);
        case "UPDATE_CV":
            return state.map(item =>
                item.id === action.payload.id ? action.payload : item
            );
        default:
            return state;
    }
}

const initialState = [];

function FormCongViec() {
    const [cv, setCV] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);
    const [editId, setEditId] = useState(null);
    const [listCV, dispatch] = useReducer(cvReducer, initialState);

    const handleAdd = () => {
        dispatch({
            type: "ADD_CV",
            payload: { id: Date.now(), nameCV: cv, TrThai: isCompleted }
        });
        resetForm();
    };

    const handleDelete = (id) => {
        dispatch({ type: "DELETE_CV", payload: id });
        resetForm();
    };

    const handleEdit = (item) => {
        setCV(item.nameCV);
        setIsCompleted(item.TrThai);
        setEditId(item.id);
    };

    const handleUpdate = () => {
        dispatch({
            type: "UPDATE_CV",
            payload: { id: editId, nameCV: cv, TrThai: isCompleted }
        });
        resetForm();
    };

    const resetForm = () => {
        setCV("");
        setIsCompleted(false);
        setEditId(null);
    };

    return (
       <div className="container">
    <h2>To-Do List</h2>

    <input
        className="input"
        value={cv}
        onChange={(e) => setCV(e.target.value)}
        placeholder="Nhập công việc..."
    />

    <div className="formBTN">
        <FormButton
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onRemove={() => handleDelete(editId)}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
    />
    </div>

    <CongViec listCV={listCV} onEdit={handleEdit} />
</div>

    );
}

export default FormCongViec;
