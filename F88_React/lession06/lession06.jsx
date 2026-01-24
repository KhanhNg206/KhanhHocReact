function Profile({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function App() {
  const user = {
    name: "Nam",
    email: "nam@gmail.com"
  };

  return <Profile user={user} />;
}

export default App;
