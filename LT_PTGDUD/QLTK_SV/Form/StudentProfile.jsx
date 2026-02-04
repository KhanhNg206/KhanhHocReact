function StudentProfile({ student }) {
    return (
        <div className="container">
            <h2>Thông tin sinh viên</h2>

            <p><b>Họ tên:</b> {student.name}</p>
            <p><b>Tài khoản:</b> {student.username}</p>
            <p><b>Mật khẩu:</b> {student.password}</p>
        </div>
    );
}

export default StudentProfile;
