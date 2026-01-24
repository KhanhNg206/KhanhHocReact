function Card({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is content inside Card</p>
    </Card>
  );
}

export default App;
