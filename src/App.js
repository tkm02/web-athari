import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Service from './components/Service/Service';
import Valeurs from './components/Valeurs/Valeurs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <About/>
      <Service/>
      <Banner />
      <Valeurs />
    </div>
  );
}

export default App;
