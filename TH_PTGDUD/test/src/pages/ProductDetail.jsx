import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./productDetail.css";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="detail-container">
            <div className="detail-card">
                <img src={product.image} alt={product.title} />

                <div className="info">
                    <h2>{product.title}</h2>
                    <p className="price">${product.price}</p>
                    <p><b>Category:</b> {product.category}</p>
                    <p className="desc">{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;