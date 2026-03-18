import React, { useState, useEffect, useReducer, useRef, useMemo } from "react";
import useFetch from "../store/useFetch";
import "../css/list.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return state.filter((sv) => sv.id !== action.payload);

    case "UPDATE":
      return state.map((sv) =>
        sv.id === action.payload.id ? action.payload : sv
      );

    case "SET":
      return action.payload;

    default:
      return state;
  }
};

export default function QLsvComponent() {
  const [students, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [editingId, setEditingId] = useState(null);
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

  const nameRef = useRef(null);
  const scoreRef = useRef(null);

  useEffect(() => {
  if (data.length > 0) {
    const formatted = data.map((user) => ({
      id: user.id,
      name: user.name,
      score: Math.floor(Math.random() * 10) + 1 
    }));

    dispatch({ type: "SET", payload: formatted });
  }
}, [data]);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students"));
    if (data) { 
      dispatch({ type: "SET", payload: data });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const avgScore = useMemo(() => {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, sv) => sum + Number(sv.score), 0);
    return (total / students.length).toFixed(2);
  }, [students]);

  const handleAdd = () => {
    if (!name || !score) return;

    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };

    dispatch({ type: "ADD", payload: newStudent });

    setName("");
    setScore("");

    nameRef.current.focus();
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleEdit = (sv) => {
    setName(sv.name);
    setScore(sv.score);
    setEditingId(sv.id);

    nameRef.current.focus();
  };

  const handleUpdate = () => {
    dispatch({
      type: "UPDATE",
      payload: {
        id: editingId,
        name,
        score: Number(score),
      },
    });

    setEditingId(null);
    setName("");
    setScore("");
  };

  

  return (
  <div className="container">
    <h2>Quản lý sinh viên</h2>

    <div className="form-group">
      <input
        ref={nameRef}
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        ref={scoreRef}
        placeholder="Điểm"
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      {editingId ? (
        <button onClick={handleUpdate}>Sửa</button>
      ) : (
        <button onClick={handleAdd}>Thêm</button>
      )}
    </div>

    <div className="list">
      {students.map((sv) => (
        <div className="card" key={sv.id}>
          <div className="card-info">
            <span>{sv.name}</span>
            <span>Score: {sv.score}</span>
          </div>

          <div className="card-actions">
            <button onClick={() => handleEdit(sv)}>Sửa</button>
            <button onClick={() => handleDelete(sv.id)}>Xoá</button>
          </div>
        </div>
      ))}
    </div>

    <h3>Điểm trung bình: {avgScore}</h3>
  </div>
);
}