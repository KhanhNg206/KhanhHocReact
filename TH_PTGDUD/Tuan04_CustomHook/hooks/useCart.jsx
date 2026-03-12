import { useState, useEffect } from "react";

function useCart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    let newCart;

    if (exist) {
      newCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return { cart, addToCart, removeFromCart };
}

export default useCart;