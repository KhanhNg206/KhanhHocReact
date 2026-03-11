import useFetch from "./useFetch";

function Users() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Danh sách User</h2>
      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;