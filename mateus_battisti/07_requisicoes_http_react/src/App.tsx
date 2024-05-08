import React, { useState, ChangeEvent, FormEvent }from 'react';
import './App.css';
import { Product } from './interfaces/product.interface';

// Custom Hook
import { useFetch } from './hooks/useFetch';

function App() {
  // Resgatando dados
  const url = "http://localhost:3000/products";

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  // Custom Hook

  const { data: items, httpConfig, loading, error } = useFetch(url);

  // Adição de Produtos

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const product: Product = {name, price};

    // Refatorando POST

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }

  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* Loading */}
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!loading && <ul> {items?.map((produto)=>(<li key={produto.id}>{produto.name} - R$ {produto.price}</li>))}</ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome: <input type="text" value={name} name='name' id='name' onChange={(e: ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/></label>
          <label htmlFor="name">Preço: <input type="number" value={price} name='price' id='price' onChange={(e: ChangeEvent<HTMLInputElement>)=>setPrice(e.target.value)}/></label>
          <input type="submit" value={loading ? "Aguarde!" : "Criar"} disabled={loading}/>
        </form>
      </div>
    </div>
  );
}

export default App;
