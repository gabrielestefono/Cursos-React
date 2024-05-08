import React, { useState, useEffect, ChangeEvent, FormEvent }from 'react';
import './App.css';
import { ProductInterface } from './interfaces/product.interface';

function App() {
  // Resgatando dados
  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data: ProductInterface[] = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  // Adição de Produtos

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const product = {name,price};

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  }

  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((produto)=>(<li key={produto.id}>{produto.name} - R$ {produto.price}</li>))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome: <input type="text" value={name} name='name' id='name' onChange={(e: ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/></label>
          <label htmlFor="name">Preço: <input type="number" value={price} name='price' id='price' onChange={(e: ChangeEvent<HTMLInputElement>)=>setPrice(e.target.value)}/></label>
          <input type="submit" value="Criar"/>
        </form>
      </div>
    </div>
  );
}

export default App;
