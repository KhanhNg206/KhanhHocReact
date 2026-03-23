function Filter({search,setSearch,filter,setFilter,filterGenfer,setFilterGender}){
    return(
        <div>
            <h2>Bộ lọc</h2>
            <div>
                <input type="text" placeholder="Tìm kiếm bằng tên"
                    value={search} onChange={(e) => setSearch(e.target.value)}/>
            
            <label htmlFor="">Điểm lớn hơn 8</label>
                <input type="checkbox" 
                       checked={filter} 
                       onChange={(e) => setFilter(e.target.checked)}/>

            <select value={filterGenfer} onChange={(e) => setFilterGender(e.target.value)}>
                <option value="">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            </div>

        </div>
    )
}

export default Filter;