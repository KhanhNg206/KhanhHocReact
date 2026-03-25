import './App.css'
import Header from './componentQLKH/header';
import Fooster from './componentQLKH/fooster';
import CustomerList from './componentQLKH/CustomerList';
import CustomerForm from './componentQLKH/CustomerForm';
import SearchBar from './componentQLKH/SearchBar';
import { useState, useEffect, use } from 'react';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]); 
  const [keyword, setKeyword] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [editingCustomer, setEditingCustomer] = useState(null);

  useEffect(() => {
  const local = JSON.parse(localStorage.getItem("customers"));

  if (Array.isArray(local)) {
    setCustomers(local);
  } else {
    axios.get("./data/customer.json").then(res => {
      const data = Array.isArray(res.data) ? res.data : res.data.customers;
      setCustomers(data);
      localStorage.setItem("customers", JSON.stringify(data));
    });
  }
}, []);

  const handleAdd = (customer) => {
  const newList = [...customers, { ...customer, id: customers.length + 1 }];
  setCustomers(newList);
  localStorage.setItem("customers", JSON.stringify(newList));
};

const handleDelete = (id) => {
  if(window.confirm("chắc chắn xóa?")){
    const newList = customers.filter(c => c.id !== id);
    setCustomers(newList);
    localStorage.setItem("customers",JSON.stringify(newList));
  }
};

const handleEdit = (customer) => {
  setEditingCustomer(customer);
};

const handleUpdate = (updatedCustomer) => {
  const newList = customers.map(c =>
    c.id === updatedCustomer.id ? updatedCustomer : c
  );

  setCustomers(newList);
  localStorage.setItem("customers", JSON.stringify(newList));
  setEditingCustomer(null); 
};

const handleSearch = (value) => { setKeyword(value); };
const handleSelect = (id) => setSelectedId(id);

const filteredCustomers = customers.filter(c => {
  const matchName = c.name.toLowerCase().includes(keyword.toLowerCase());
  const matchId = selectedId ? c.id === Number(selectedId) : true;

  return matchName && matchId;
});

  return (
    <>
      <Header />
      <CustomerForm onAdd={handleAdd} onDelete={handleDelete} editingCustomer={editingCustomer} onUpdate={handleUpdate} />
      <SearchBar onSearch={handleSearch} onSelect={handleSelect} customers={customers}/>
      <CustomerList customers={filteredCustomers}  onDelete={handleDelete} onEdit={handleEdit}/>
      <Fooster />
    </>
  );
}

export default App;