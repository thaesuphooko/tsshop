'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>ကျွန်တော့်ဆိုင်လေး</h1>
      {products.map(p => <div key={p.id}>{p.title} - {p.price} Ks</div>)}
    </div>
  );
}
