import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState(0);
  let cartLength = 0;
  const handleAddToCart = (id) => {
    console.log(id);
    setCart(cartLength + 1);
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Foods handleAddToCart={handleAddToCart} cart={cart} />
      </main>
    </div>
  );
}

export default App;
