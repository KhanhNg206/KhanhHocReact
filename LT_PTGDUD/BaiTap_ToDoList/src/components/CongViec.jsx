import React from "react";

function CongViec({ listCV, onEdit,title}) {
    return (
       <div>
        <h3>{title}</h3>
         <ul className="listCV_ul">
            {listCV.map(cv => (
                <li
                    key={cv.id}
                    onClick={() => onEdit(cv)}
                >
                    <b>{cv.nameCV}</b> -{" "}
                    {/* {cv.TrThai ? "Hoàn thành" : "Chưa hoàn thành"} */}
                    <hr />
                </li>
            ))}
        </ul>
       </div>
    );
}

export default CongViec;
