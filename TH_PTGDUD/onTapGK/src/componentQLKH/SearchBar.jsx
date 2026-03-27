import { useState } from "react";

function SearchBar({onSearch,customers,onSelect}){
    const [keyWord,setkeyWord] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setkeyWord(value);
        onSearch(value);
    };

    return(
        <>
        <input type="text" placeholder="Nhập tên KH cần tìm" value={keyWord} onChange={handleChange}/>
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="">-- Tất cả --</option>
            {customers.map(c => (
                <option value={c.id} key={c.id}> {c.id} - {c.name}</option>
            ))}
        </select>
        </>
    )
}
export default SearchBar;