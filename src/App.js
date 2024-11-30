import './App.css';
import Acceuil from './pages/Acceuil';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>

      <Router>
        <div className="App">
          <Routes>
            <Route path="/accueil" element={<Acceuil />} />
            <Route path="/service" element={<ServicesPage />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>

  );
}

export default App;
