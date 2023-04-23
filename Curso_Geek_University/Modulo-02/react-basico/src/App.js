import { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component{

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
    ]
  }

  adicionarComentario = ()=>{
    const novoComentario = {
      nome: "Maria",
      email: "maria@mail.com",
      data: new Date(2023, 4, 23),
      mensagem: "Olá, pessoal!"
    }

    // let lista = this.state.comentarios;
    // lista.push(novoComentario);
    // this.setState({comentarios: lista})

    this.setState({
      comentarios: [ ...this.state.comentarios, novoComentario ]
    })
  }

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

        <button onClick={this.adicionarComentario}>Adicionar um comentário</button>
      </div>
    );
  }
}

export default App;