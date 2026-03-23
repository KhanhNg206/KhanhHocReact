import { useEffect,useState } from "react";
import StudentList from "./StudentList";
import Filter from "./Filter";
function StudentForm(){
    const [students,setStudents] = useState([]);
    const [search,setSearch] = useState("");
    const [filter,setFilter] = useState(false);
    const [editing,setEditting] = useState(null);
    const [filtersGender ,setFiltersGender] = useState("");

    const [form,setForm] = useState({
        id: "",
        name: "",
        gender: "Male",
        score: ""
    });

    useEffect(() => {
        fetch("./json/student.json").then(res => res.json()).then(data => setStudents(data.student));
    },[]);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({
            ...form,[name] : name === "score" ? Number(value) : value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editing){
            setStudents(students.map(s => s.id === form.id ? form : s));
            setEditting(null);
        }else{
            setStudents([...students,form]);
        }
        setForm({id:"",name:"",gender:"Male",score:0});
    };

    const handleDelete = (id) => {
        setStudents(students.filter(s => s.id !== id));
    };

    const handleEdit = (s) => {
        setForm(s);
        setEditting(s);
    };

    const filtered = students.filter( s => 
        s.name.toLowerCase().includes(search.toLowerCase()) &&
        (!filter || Number(s.score) > 8 ) &&
        (!filtersGender || s.gender === filtersGender)
    );

    return(
        <>
       <Filter 
            search={search} 
            setSearch={setSearch} 
            filter={filter} 
            setFilter={setFilter}
            filterGenfer={filtersGender}
            setFilterGender={setFiltersGender} />

       <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="id" name="id" value={form.id} onChange={handleChange} />
        <input type="text" placeholder="name" name="name" value={form.name} onChange={handleChange} />

        <select id="" name="gender" value={form.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>

        <input type="text" placeholder="score" name="score" value={form.score} onChange={handleChange} />

        <button type="submit"> {editing ? "sửa" : "thêm"}</button>

       </form>
       <h1>Danh sách học sinh</h1>
       <StudentList students={filtered} onDelete={handleDelete} onEdit={handleEdit}/>
        </>
    )
}

export default StudentForm;