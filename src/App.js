
import React, { useEffect, useState } from 'react';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from './Components/Home/Home';
import Time_Complite from './Components/Home/Time_Complite/Time_Complite';


function App() {
  const location = useNavigate()
  useEffect(() =>{
    if(localStorage.getItem('user')){
      location('/time')
    }
    if(!localStorage.getItem('user')){
      location('/')
    }
  },[])

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/time' element={<Home/>}/>
        <Route path='/complite' element={<Time_Complite/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
