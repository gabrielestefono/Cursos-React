import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu projeto!</h1>
      <Comentario nome="Gabriel" email="gabriel@mail.com" data={new Date(2020,3,19)}>Olá, tudo bem?</Comentario>
      <Comentario nome="Juliana" email="juliana@mail.com" data={new Date(2020,3,20)}>Olá, tudo sim, e com você?</Comentario>
      <Comentario nome="Gabriel" email="gabriel@mail.com" data={new Date(2020,3,19)}>Tudo sim!</Comentario>
    </div>
  );
}

export default App;