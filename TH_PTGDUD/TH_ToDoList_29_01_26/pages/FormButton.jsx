import React from "react";

function FormButton({onAdd,onUpdate,onRemove,isCompleted,setIsCompleted}) {
    return (
        <div>
            
                <button className="btn_cv" onClick={onAdd}>Thêm</button>
                <button className="btn_cv" onClick={onUpdate}>Cập nhật</button>
                <button className="btn_cv" onClick={onRemove}>Xóa</button>
            <label>
                Hoàn thành
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                />
            </label>
        </div>
    );
}

export default FormButton;
