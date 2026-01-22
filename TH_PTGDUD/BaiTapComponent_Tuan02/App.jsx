import { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import StudentInfo from './components/StudentInfo';
import Counter from './components/Counter';
import CongViec from './components/congViec';
import ControlForm from './components/XuLyForm';

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

   <ControlForm />
    
    </>
  )
}

export default App
