import React from 'react';
import './App.css';

// 1 - Config React Router
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
