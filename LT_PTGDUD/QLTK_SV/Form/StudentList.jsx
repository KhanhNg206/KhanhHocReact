function StudentList({ students, onDelete, onEdit }) {
    return (
        <ul>
            {students.map(sv => (
                <li key={sv.id}>
                    <b>{sv.name}</b> |
                    {sv.username} |
                    {sv.password}

                    <button onClick={() => onEdit(sv)}>Sửa</button>
                    <button onClick={() => onDelete(sv.id)}>Xóa</button>
                </li>
            ))}
        </ul>
    );
}

export default StudentList;
