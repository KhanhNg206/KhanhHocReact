import { useCallback,useState,useRef,useMemo } from "react";

function NumberList(){
    const [error,setError] = useState("");
    const [numbers,setNumbers] = useState([]);
    const inputRef = useRef(null);

    const evenSum = useMemo(() => {
        return numbers.filter(num => num%2===0).reduce((sum,num) => sum + num,0)
    },[numbers]);


    const AddNumber = () => {
     const value = inputRef.current.value.trim();
        if (value === "") {
            setError("chưa nhập");
        return;
        }
        setNumbers(prev => [...prev, Number(value)]);
        inputRef.current.value = "";
        setError("");
    };

    const DeleteNumber = () => {
     const value = Number(inputRef.current.value);
        if (isNaN(value)) 
            return;
        if (!numbers.includes(value)) {
        setError("Không tìm thấy");
        return;
    }
    setNumbers(prev => prev.filter(num => num !== value));
    setError(`Đã xóa số ${value}`);
    inputRef.current.value = "";
    inputRef.current.focus();
  };


    return(
        <>
        <h2>Danh sách số</h2>
        <input type="number" ref={inputRef} />
        <button onClick={AddNumber}>Thêm số</button>
        <button onClick={DeleteNumber}>Xóa</button>
        <p style={{ color: error === "Không tìm thấy" || error === "chưa nhập" ? "red" : "black" }}>{error}</p>
        <ul>
        {numbers.map((num, index) => (
          <li key={index}>
            {num} {num % 2 === 0 ?  "(số chẵn)" : "(số lẻ)"}
          </li>
        ))}
      </ul>
         <p>Tổng các số chẵn: {evenSum}</p>
        </>
    )
}

export default NumberList;