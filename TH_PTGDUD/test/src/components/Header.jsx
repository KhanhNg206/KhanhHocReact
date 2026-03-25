import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <h2 className="logo">My Website</h2>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;