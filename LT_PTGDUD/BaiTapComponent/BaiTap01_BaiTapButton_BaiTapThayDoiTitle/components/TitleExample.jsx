import React, { useEffect, useState } from "react";

function TitleExample() {
  const [count, setCount] = useState(0);
useEffect(() => {
    document.title = `Bạn đã click ${count} lần`
},[count]);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  );
}

export default TitleExample;
