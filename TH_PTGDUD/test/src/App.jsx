import { useState,useEffect } from 'react'
import Header from './components/Header'
import Fooster from './components/Fooster'
import axios from 'axios'
import RegisterList from './components/RegisterList'
import React from 'react'

function App() {
  const [register,setRegister] = useState([]);
  const [keyword,setKeyword] = useState("");


  useEffect(() => {
  const local = JSON.parse(localStorage.getItem("register"));

  if (Array.isArray(local)) {
    setRegister(local);
  } else {
    axios.get("data/course.json").then(res => {
      const data = Array.isArray(res.data) ? res.data : res.data.register;
      setRegister(data);
      localStorage.setItem("register", JSON.stringify(data));
    });
  }
}, []);

 const filterRegister = register.filter(c => {
  return c.title?.toLowerCase().includes(keyword.toLowerCase());
});

  return (
    <>
    <Header />
    <RegisterList register={filterRegister}/>
    <Fooster />
      
    </>
  )
}
export default App;
