import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

import { Home } from "./Home";
import { Reservation } from "./Reservation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";


function App() {

  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/login/register" element={<Register/>} />
        <Route path="/login/register/login" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>

  );
}

export default App;