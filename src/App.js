import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import ConsultantSlider from './components/Consultant/ConsultantSlider';
import ContactForm from './components/Contact/ContactForm';

import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Partner from './components/Partner/Partner';
import Service from './components/Service/Service';
import Target from './components/Target/Target';
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
      <ConsultantSlider/>
      <Target/>
      <Partner/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
