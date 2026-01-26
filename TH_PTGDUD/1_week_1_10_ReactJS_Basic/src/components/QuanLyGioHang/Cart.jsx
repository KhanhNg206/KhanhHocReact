import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function Cart() {
    const { cart, removeFromCart, totalPrice } = useContext(CartContext);

    return (
        <>
            <h3>Giỏ hàng</h3>
            {cart.map(item => (
                <div key={item.id}>
                    {item.name} - ${item.price}
                    <button onClick={() => removeFromCart(item.id)}>
                        Xóa
                    </button>
                </div>
            ))}

            <h4>Tổng tiền: ${totalPrice}</h4>
        </>
    );
}

export default Cart;
