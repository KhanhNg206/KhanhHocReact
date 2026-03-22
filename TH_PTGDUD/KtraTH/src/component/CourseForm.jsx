import axios from "axios";
import { useEffect, useMemo, useReducer, useState } from "react";
import CourseList from "./CourseList";
import courseReducer from "./courseReducer";
import './form.css'

function CourseForm() {
  const [courses, dispatch] = useReducer(courseReducer, []);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [instructor, setInstructor] = useState("");
  const [find, setFind] = useState("");
  const [isEdit, setIsedit] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");

    useEffect(() => {
    axios.get("./json/db.json").then(res => {
        const data = Array.isArray(res.data) ? res.data : res.data.courses;
        dispatch({ type: "SET", payload: data });
    });
    }, []);

  const handleAdd = () => {
    const newCou = { id, title, price, category, instructor };
    if (isEdit) {
      dispatch({ type: "EDIT", payload: newCou });
      setIsedit(false);
    } else {
      dispatch({ type: "ADD", payload: newCou });
    }
    setId("");
    setTitle("");
    setPrice("");
    setCategory("");
    setInstructor("");
  };

  const handleEDIT = (c) => {
    setIsedit(true);
    setId(c.id);
    setTitle(c.title);
    setPrice(c.price);
    setCategory(c.category);
    setInstructor(c.instructor);
  };

  // const filterCou = useMemo(() => {
  //   if(find === "")return [];
  //   else
  //   return courses.filter(c => String(c.id).includes(find));
  // }, [find, courses]);


const filterCou = useMemo(() => {
  if (!find.trim() && !filterCategory.trim()) return [];

  return courses.filter(c => {
    const matchId = find
      ? String(c.id).includes(find)
      : true;

    const matchCategory = filterCategory
      ? c.category.toLowerCase().includes(filterCategory.toLowerCase())
      : true;

    return matchId && matchCategory;
  });
}, [find, filterCategory, courses]);



  return (
    <>
      <div>
        <h2>Form Khoa Hoc</h2>
        <input type="text" value={id} placeholder="ID" onChange={e => setId(e.target.value)} />
        <input type="text" value={title} placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input type="number" value={price} placeholder="Price" onChange={e => setPrice(e.target.value)} />
        <input type="text" value={category} placeholder="Category" onChange={e => setCategory(e.target.value)} />
        <input type="text" value={instructor} placeholder="Instructor" onChange={e => setInstructor(e.target.value)} />
        <button onClick={handleAdd}>{isEdit ? "Sua" : "Them"}</button>
      </div>

     <div className="container">
       <div className="left">
        <h2>Tìm Kiếm/lọc</h2>
        <input type="text" value={find} placeholder="Tim Kiem (ID)" onChange={e => setFind(e.target.value)} />
        <input type="text"placeholder="Loc theo Category" value={filterCategory} onChange={e => setFilterCategory(e.target.value)}/>
        <CourseList courses={filterCou} dispatch={dispatch} handleEdit={handleEDIT} />

      </div>

      <div className="right">
        <h2>Danh Sach Khoa Hoc</h2>
      <CourseList courses={courses} dispatch={dispatch} handleEdit={handleEDIT} />
      </div>
     </div>
    </>
  );
}

export default CourseForm;
