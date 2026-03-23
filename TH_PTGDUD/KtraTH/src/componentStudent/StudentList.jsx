import "../css/list.css"
function StudentList({students,onDelete,onEdit}){
    return (
            <table >
            <thead >
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Score</th>
                    <th>Button</th>
                </tr>
            </thead>
            <tbody >
                {students.map(s => (
                    <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.gender}</td>
                        <td>{s.score}</td>
                        <td>
                            <button onClick={() => onEdit(s)}>Edit</button>
                            <button onClick={() => onDelete(s.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
export default StudentList;