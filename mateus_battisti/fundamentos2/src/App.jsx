import { useState } from 'react';
import './App.css';
import imagem from "./assets/sea.jpg";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';

function App() {

  const [userName] = useState("Maria");

  return (
    <>
      <h1>Avançando no react</h1>
      {/* Imagem em public */}
      <div>
        <img src="./working.jpg" alt="Man working showing a clock, a pen and a notebook" width={600} height={400}/>
      </div>
      {/* Imagens via assets */}
      <div>
        <img src={imagem} alt="Foto do mar com umas montanhas" width={600} height={400}/>
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender />
      <ShowUsername name={userName} />
      <CarDetails brand="VW" km={100000} color="azul"/>
    </>
  )
}

export default App
