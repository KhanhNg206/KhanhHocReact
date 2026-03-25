import Header from "./Header";
import Footer from "./Fooster";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;