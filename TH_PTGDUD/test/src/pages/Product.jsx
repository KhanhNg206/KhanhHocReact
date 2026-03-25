import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="product-list">
            <h1>Danh sách sản phẩm</h1>

            <div className="grid">
                {products.map((p) => (
                    <div className="card" key={p.id}>
                        <img src={p.image} alt={p.title} />
                        <h3>{p.title}</h3>
                        <p className="price">${p.price}</p>

                        <Link to={`/product/${p.id}`} className="btn">
                            Xem chi tiết
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;