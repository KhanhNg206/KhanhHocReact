import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // thêm email
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const localData = localStorage.getItem("dataUser");

        if (localData) {
          setUsers(JSON.parse(localData));
        } else {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );

          if (!res.ok) throw new Error("Lỗi server");

          const data = await res.json();
          setUsers(data);
          localStorage.setItem("dataUser", JSON.stringify(data));
        }
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
      const res = await fetch("https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
          }),
        }
      );

      if (!res.ok) throw new Error("Thêm thất bại");

      const newUser = await res.json();

      newUser.id = Date.now();

      const updatedUsers = [newUser, ...users];

      setUsers(updatedUsers);
      localStorage.setItem("dataUser", JSON.stringify(updatedUsers));

      setName("");
      setEmail(""); 
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("dataUser", JSON.stringify(updatedUsers));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Danh sách User</h2>

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

export default UserList;