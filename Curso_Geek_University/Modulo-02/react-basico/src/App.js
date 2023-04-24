import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';


class App extends Component{

  // Estado
  state = {
    comentarios: [
      {
        nome: "Gabriel",
        email: "gabriel@mail.com",
        data: new Date(2020,3,19),
        mensagem: "Olá, tudo bem?"
      },
      {
        nome: "Juliana",
        email: "juliana@mail.com",
        data: new Date(2020,3,20),
        mensagem: "Olá, tudo sim, e com você?"
      },
      {
        nome: "Gabriel",
        email: "gabriel@mail.com",
        data: new Date(2020,3,21),
        mensagem: "Tudo sim!"
      }
    ],
    novoComentario:{
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  // Função que adiciona um novo comentário (estático)
  adicionarComentario = (event)=>{
    event.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()}
    this.setState({
      comentarios: [ ...this.state.comentarios, novoComentario ],
      novoComentario: {nome: '', email: '', mensagem: ''}})
  }

  // Fução que adiciona um novo comentário (dinâmico)
  digitacao = evento => {
    console.log(evento.target)
    const {name, value} = evento.target;
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }


  // Conteúdo sendo renderizado na tela
  render() {
    return (
      <div className="App">
        <h1>Meu projeto!</h1>
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario 
          key={indice}
          nome={comentario.nome} 
          email={comentario.email}
          data={comentario.data}>{comentario.mensagem}</Comentario>
        ))}
        
        <form method="POST" onSubmit={this.adicionarComentario}>
          <h2>adicionar Comentario</h2>
          <div>
            <input type="text" name="nome" value={this.state.novoComentario.nome} onChange={this.digitacao} placeholder='Digite o seu nome'/>
          </div>
          <div>
            <input type="text" name="email" value={this.state.novoComentario.email} onChange={this.digitacao} placeholder='Digite o seu email'/>
          </div>
          <div>
            <textarea name="mensagem" rows="4" value={this.state.novoComentario.mensagem} onChange={this.digitacao}/>
          </div>
          <button type='submit'>Adicionar Comentário</button>
        </form>
      </div>
    );
  }
}


export default App;