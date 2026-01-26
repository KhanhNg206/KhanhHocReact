import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const products = [
    { id: 1, name: "React Course", price: 100 },
    { id: 2, name: "Node Course", price: 120 }
];

function ProductList() {
    const { addToCart } = useContext(CartContext);

    return (
        <>
            <h3>Sản phẩm</h3>
            {products.map(p => (
                <div key={p.id}>
                    {p.name} - ${p.price}
                    <button onClick={() => addToCart(p)}>
                        Thêm
                    </button>
                </div>
            ))}
        </>
    );
}

export default ProductList;
