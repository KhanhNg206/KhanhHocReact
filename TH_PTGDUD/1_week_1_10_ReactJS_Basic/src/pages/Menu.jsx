import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import CourseDetail from "./CourseDetail";
import About from "./About";

function Menu() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink> |{" "}
                <NavLink to="/courses">Courses</NavLink> |{" "}
                <NavLink to="/about">About</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:id" element={<CourseDetail />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default Menu;
