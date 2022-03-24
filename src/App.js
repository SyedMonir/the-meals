import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Foods />
      </main>
    </div>
  );
}

export default App;
