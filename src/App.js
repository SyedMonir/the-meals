import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  // let cartLength = 0;
  const handleAddToCart = (food) => {
    const newCart = [...cart, food];
    setCart(newCart);
  };

  return (
    <div>
      <Header cart={cart} />
      <main>
        <Foods handleAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}

export default App;
