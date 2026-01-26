import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import StudentInfo from './components/StudentInfo';
import Counter from './components/Counter';
import CongViec from './components/congViec';
import ControlForm from './components/XuLyForm';
import DigitalClock from './components/DigitalClock';
import CallAPI from './components/CallAPI';
import StudentManager from './components/CRUD_MiniProject/StudentManager';
import Menu from './pages/menu';
import Cart from './components/QuanLyGioHang/Cart';
import ProductList from './components/QuanLyGioHang/ProductList';

function App() {
const Student = {
  name : 'Khanh',
  id : '23634741',
  class : 'DHKTPM19A'
}

  return (
    <>
     {
      //---------------------
              // bài 1
     /* <Header />
     <StudentInfo 
         name = {Student.name}
         id = {Student.id}
         className = {Student.class}
         />
     <Footer /> */
     //------------------------- 
     }

    {/* //---------------------//
                  Bài 2
     <Counter />
     //---------------------// */}


    {          /* Bài 3
    <CongViec /> */}


            {/* Bài 4
   <ControlForm /> */}

             {/* Bài 5
   <DigitalClock /> */}

              {/* Bài 6
   <CallAPI /> */}
             {/* Bài 7
  <StudentManager /> */}

           {/* Bài 8
  <Menu /> */}

    <ProductList />
            <hr />
            <Cart />

    
    </>
  )
}

export default App
