import React from "react";
function RegisterList({register}){
    return(
        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>Hình ảnh</th>
                    <th>Tên khóa học</th>
                    <th>Gía</th>
                    <th>Category</th>
                    <th>Đăng Kí</th>
                </tr>
            </thead>
            <tbody>
                {register.map((re) => (
                    <tr key={re.id}>
                        <td><img src={re.img} alt="" /></td>
                        <td>{re.title}</td>
                        <td>{re.price}</td>
                        <td>{re.category}</td>
                        <td>
                            <button>Đăng Kí</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default RegisterList;