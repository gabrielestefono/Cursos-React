import { useState } from 'react';
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const n = 15;
  const [name] = useState("Gabriel");
  const redTitle = true;
  return (
    <div>
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Verifique que assim o estilo &apos;vaza&apos;, este parágrafo é do App.jsx</p>
      <p style={{ color: "blue", backgroundColor: "yellow" }}>Este elemento foi estilizado de forma inline</p>
      <h2 style={n < 10 ? { backgroundColor: "pink" } : { backgroundColor: "purple" }}>Esse é o título colorido</h2>
      <h2 style={name == "Gabriel" ? { color: "green", backgroundColor: "black" } : null}>{name}</h2>
      <h2 className={redTitle ? "red_title" : "title"}>Este título vai ter a classe dinâmica</h2>
    </div>
  )
}

export default App
