import React, { useState, useEffect }from 'react';
import './App.css';
import { ProductInterface } from './interfaces/product.interface';

function App() {
  // Resgatando dados
  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data: ProductInterface[] = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  console.log(products);
  
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((produto)=>(<li key={produto.id}>{produto.name} - R$ {produto.price}</li>))}
      </ul>
    </div>
  );
}

export default App;
