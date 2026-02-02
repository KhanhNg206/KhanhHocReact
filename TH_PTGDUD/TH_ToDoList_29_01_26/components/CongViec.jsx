import React from "react";

function CongViec({ listCV, onEdit }) {
    return (
        <ul className="listCV_ul">
            {listCV.map(cv => (
                <li
                    key={cv.id}
                    onClick={() => onEdit(cv)}
                >
                    <b>{cv.nameCV}</b> -{" "}
                    {cv.TrThai ? "Hoàn thành" : "Chưa hoàn thành"}
                    <hr />
                </li>
            ))}
        </ul>
    );
}

export default CongViec;
