import React, { useState } from "react";
import Login from "../../../LT_PTGDUD/QLTK_SV/components/login";
import QLSV from "../../../LT_PTGDUD/QLTK_SV/components/QlSV";
import StudentProfile from "./Form/StudentProfile";

function App() {
    const [role, setRole] = useState(null); 
    const [currentStudent, setCurrentStudent] = useState(null);

    if (!role) {
        return (
            <Login
                setRole={setRole}
                setCurrentStudent={setCurrentStudent}
            />
        );
    }

    if (role === "admin") return <QLSV />;
    if (role === "student") return <StudentProfile student={currentStudent} />;
}

export default App;
