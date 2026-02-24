import { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Xin chào {name}</p>
    </div>
  );
}

export default Greeting;
