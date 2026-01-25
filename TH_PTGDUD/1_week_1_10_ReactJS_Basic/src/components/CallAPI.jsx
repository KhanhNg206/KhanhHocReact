import { useEffect, useState } from "react";

function CallAPI(){
    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.json();
        }).then(data => {
            setUsers(data);
        }).catch( () => {
            console.log("Lỗi khi gọi API")
        })
    },[]);

    return(
        <>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <p>name : {user.name}</p>
                    <p>email : {user.email}</p>
                    <p>company : {user.company.name}</p>
                </li>
            ))}
        </ul>
        </>
    )
}

export default CallAPI;