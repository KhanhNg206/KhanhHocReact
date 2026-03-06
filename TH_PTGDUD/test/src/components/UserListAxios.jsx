import { useEffect, useState } from "react";
import axios from "axios";

function UserListAxios() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAdd = async () => {
    if (!name.trim()) {
      alert("Chưa nhập tên");
      return;
    }

    try {
      const res = await axios.post("https://jsonplaceholder.typicode.com/users",
        {
          name,
          email,
        }
      );

      const newUser = {
        ...res.data,
        id: Date.now(),
      };

      setUsers([newUser, ...users]);

      setName("");
      setEmail("");
    } catch (err) {
      alert("Thêm thất bại");
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Danh sách User Axios</h2>

      <input
        type="text"
        placeholder="Nhập tên user"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleAdd}>Thêm</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email || "User chưa có mail"}
            <button onClick={() => handleDelete(user.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListAxios;