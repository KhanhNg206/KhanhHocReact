import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";

function Shop() {
  const { data: products, loading } = useProducts("https://fakestoreapi.com/products");

  const { addToCart } = useCart();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="ProductList">
      {products.map((p) => (
        <div key={p.id} className="Products">
          <img src={p.image} alt={p.title} width="120" />
          <h4>{p.title}</h4>
          <p>${p.price}</p>

          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
}

export default Shop;