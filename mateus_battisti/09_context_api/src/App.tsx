import React from 'react';
import './App.css';

// 1 - Config React Router
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Product from './pages/Product';
import NotFound from './pages/404';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <SearchForm/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product/:id/info' element={<Info/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/company' element={<Navigate to="/about"/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
