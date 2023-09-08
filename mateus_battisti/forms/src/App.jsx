import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{name: "José", email: "jose@gmail.com", bio: "O meu nome é José!", role: 'editor'}}/>
    </div>
  )
}

export default App
