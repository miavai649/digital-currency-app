import './App.css';
import CurrrencyData from './Components/CurrencyData/CurrrencyData';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      
      {/* navbar */}
      <Header></Header>

      {/* main content */}
      <CurrrencyData></CurrrencyData>
    </div>
  );
}

export default App;
