import { Link } from "react-router-dom";

const courses = [
    { id: 1, title: "React Cơ Bản" },
    { id: 2, title: "React Nâng Cao" },
    { id: 3, title: "NodeJS" }
];

function Courses() {
    return (
        <>
            <h2>Danh sách khóa học</h2>
            <ul>
                {courses.map(c => (
                    <li key={c.id}>
                        <Link to={`/courses/${c.id}`}>
                            {c.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Courses;
