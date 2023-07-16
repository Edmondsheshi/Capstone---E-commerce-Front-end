import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import RegisterProduct from './Pages/RegisterProduct';


export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/prodotto-registrato" element={<RegisterProduct/>} />
      </Routes>
    </BrowserRouter>

  );
}