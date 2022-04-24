import logo from './logo.svg';
import './App.css';
import Search from "./Search";
import Today from "./Today";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Search />
      <Today />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
