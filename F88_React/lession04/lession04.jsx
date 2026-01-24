function UserInfo({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return <UserInfo name="An" age={20} />;
}

export default App;
