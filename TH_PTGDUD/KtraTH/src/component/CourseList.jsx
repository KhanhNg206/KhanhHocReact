export default function CourseList({ courses, dispatch, handleEdit }) {
  return (
    <ul>
      {courses.map((c) => (
        <li style={{ listStyle: "none" }} key={c.id}>
          <p>Id: {c.id}</p>
          <p>Title: {c.title}</p>
          <p>Price: {c.price}</p>
          <p>Category: {c.category}</p>
          <p>Instructor: {c.instructor}</p>
          <button onClick={() => dispatch({ type: "DEL", payload: c.id })}>
            Xoa
          </button>
          <button onClick={() => handleEdit(c)}>Sua</button>
        </li>
      ))}
    </ul>
  );
}
