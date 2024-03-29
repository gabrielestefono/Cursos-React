import { useState } from 'react';
import './App.css';
import imagem from "./assets/sea.jpg";
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUsername from './components/ShowUsername';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFuncao from './components/ExecuteFuncao';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 }
  ];

  function showMessege(){
    console.log("Evento do componente pai!")
  }

  const [messege, setMessege] = useState("")

  const handleMessege = (msg) => {
    setMessege(msg)
  }

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
      <CarDetails brand="VW" km={100000} color="azul"  newCar={false}/>
      <CarDetails brand="Ford" km={0} color="Vermelho"  newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar}/>
      ))}
      <Fragment/>
      <Container myValue={"Testing"}>
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue={"Testing2"}>
        <h5>E este é o conteúdo</h5>
      </Container>
      <ExecuteFuncao myFunction={showMessege} />
      <Message msg={messege}/>
      <ChangeMessageState handleMessege={handleMessege}/>
    </>
  )
}

export default App
