import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (!exists) {
        setCart([...cart, product]);
    }
};

    // REMOVE
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // TOTAL
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
}
