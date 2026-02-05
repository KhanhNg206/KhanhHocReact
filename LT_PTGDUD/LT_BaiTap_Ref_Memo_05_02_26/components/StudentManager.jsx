import { useCallback,useState } from "react";
import StudentList from "./StudentList";
function StudentManager(){
    const [students,setStudents] = useState([
        {id:1, name : 'Khanh'},
        {id:2, name : 'Oanh'}
    ])

    const DeleteStudent = useCallback((id) =>{
        setStudents(prev => prev.filter(sv => sv.id !==id));
    },[]);

    const AddStudent = useCallback(() => {
    const newStudent = {
      id: Date.now(),
      name: "New Student"
    };
     setStudents(prev => [...prev, newStudent]);
  }, []);
    return (
        <>
        <button onClick={AddStudent}>thêm</button>
        <StudentList students={students} onDelete={DeleteStudent} />

        </>
    )
}

export default StudentManager;