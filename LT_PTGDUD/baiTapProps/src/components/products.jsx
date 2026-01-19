function ProductList(props) {
    return (
        <ul>
            {props.products.map(item => (
                <li key={item.id}>
                    {item.name} : {item.id}
                </li>
            ))}
        </ul>
    );
}

export default ProductList;