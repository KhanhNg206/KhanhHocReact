function CustomerList({ customers,onDelete ,onEdit}) {
  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Email</th>
          <th>SĐT</th>
          <th>Địa chỉ</th>
          <th>Điểm TB</th>
          <th>Sở thích</th>
          <th>Hành Động</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.phone}</td>
            <td>{c.address}</td>
            <td></td>
            <td>{c.favou?.join(", ")}</td>
            <td>
              <button onClick={() => onDelete(c.id)}>Xóa</button>
              <button onClick={() =>onEdit(c)}>Sửa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerList;