import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  return (
    <div>
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Verifique que assim o estilo &apos;vaza&apos;, este parágrafo é do App.jsx</p>
      <p style={{color: "blue", backgroundColor: "yellow"}}>Este elemento foi estilizado de forma inline</p>
    </div>
  )
}

export default App
