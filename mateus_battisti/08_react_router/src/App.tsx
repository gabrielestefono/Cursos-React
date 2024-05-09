import React from 'react';
import './App.css';

// 1 - Config React Router
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/navbar';
import Product from './pages/product';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
