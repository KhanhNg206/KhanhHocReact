import { useState,useEffect } from "react";
function CustomerForm({onAdd,onDelete,editingCustomer,onUpdate }){
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [deleteId, setDeleteId] = useState("");
    const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  address: ""
});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomer = {
            name,
            email,
            phone,
            address
        };

        onAdd(newCustomer);
        resetForm();
    }

    const handleReset = () => {
  setForm({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
};

    const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    
    };

    useEffect(() => {
  if (editingCustomer) {
    setName(editingCustomer.name);
    setEmail(editingCustomer.email);
    setPhone(editingCustomer.phone);
    setAddress(editingCustomer.address);
  }
}, [editingCustomer]);

const handleUpdate = (e) =>{
    e.preventDefault(); 
    const updatedCustomer = {
    id: editingCustomer.id,
    name,
    email,
    phone,
    address
  };

  onUpdate(updatedCustomer);
  resetForm();
};


    return(
        <form>
            <input type="text" placeholder="tên" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="SĐT" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="text" placeholder="Địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)} />

            <input value={deleteId} onChange={(e) => setDeleteId(e.target.value)} placeholder="Nhập ID cần xoá"/>

            <button type="button" onClick={handleSubmit}>Thêm</button>
            <button type="button" onClick={() => onDelete(Number(deleteId))}>Xoá</button>
            <button type="button" onClick={handleUpdate} disabled={!editingCustomer}>Sửa</button>
            <button type="button" onClick={resetForm}>xóa trắng</button>


        </form>
    )
}

export default CustomerForm;