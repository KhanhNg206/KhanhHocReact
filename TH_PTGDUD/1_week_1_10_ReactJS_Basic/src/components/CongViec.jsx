import { useState } from "react";

function CongViec() {
    const [dsCV, setDsCV] = useState([
        { id: 1, cv: 'giáo viên' },
        { id: 2, cv: 'Dev' },
        { id: 3, cv: 'Diễn viên' },
    ]);

    const [tenCV, setTenCV] = useState("");

    const handleClickBTN = () => {
        const cvMoi = {
            id: Date.now(),
            cv: tenCV
        };

        setDsCV([...dsCV, cvMoi]);
        setTenCV("");
    };

    return (
        <>
            <input
                type="text"
                value={tenCV}
                onChange={(e) => setTenCV(e.target.value)}
            />
            <button onClick={handleClickBTN}>Thêm</button>

            <ul>
                {dsCV.map(item => (
                    <li key={item.id}>{item.cv}</li>
                ))}
            </ul>
        </>
    );
}

export default CongViec;
