import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState(0);
  // let cartLength = 0;
  const handleAddToCart = (id) => {
    const newCartLength = cart + 1;
    setCart(newCartLength);
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
