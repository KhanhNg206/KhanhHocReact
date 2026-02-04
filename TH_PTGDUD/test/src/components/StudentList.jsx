function StudentList({students,onDelete}){
return(
    <>
    <ul>
       {students.map(sv => (
                <li key={sv.id}>
                    <b>{sv.name}</b> |
                    <button onClick={() => onDelete(sv.id)}>Xóa</button>
                </li>
            ))}
    </ul>
    </>
)
}
export default StudentList;