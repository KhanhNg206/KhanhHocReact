import { useParams } from "react-router-dom";

function CourseDetail() {
    const { id } = useParams();

    return (
        <>
            <h2>Chi tiết khóa học</h2>
            <p>ID khóa học: {id}</p>
        </>
    );
}

export default CourseDetail;
