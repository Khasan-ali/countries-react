
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Pages/Navbar';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import About from './Components/Pages/About';

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
