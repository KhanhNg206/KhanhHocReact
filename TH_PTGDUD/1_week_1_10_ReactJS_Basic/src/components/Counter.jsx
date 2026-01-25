import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const giam = () =>{
    if(count <= 0){
        setCount(count)
    }else setCount(count - 1)
  }

  return (
    <div>
      <h1 className="title_count" 
          style={{ color: count > 10 ? "red" : "white" }}>
        Giá trị hiện tại: {count}
        </h1>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => giam()}>Giảm</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;