function ProductList({ products }) {
  return (
    <ul>
      {products.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const products = ["Laptop", "Phone", "Tablet"];

  return <ProductList products={products} />;
}

export default App;
