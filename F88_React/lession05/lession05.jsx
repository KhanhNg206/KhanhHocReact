function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return <Button text="Click me" onClick={handleClick} />;
}

export default App;
