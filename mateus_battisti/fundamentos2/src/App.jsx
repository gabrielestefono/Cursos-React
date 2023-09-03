import './App.css';
import imagem from "./assets/sea.jpg";
import ManageData from './components/ManageData';

function App() {

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
    </>
  )
}

export default App
