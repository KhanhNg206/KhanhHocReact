import useCart from "../hooks/useCart";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>My Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Cart;