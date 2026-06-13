import './App.css'
import { Layout } from './components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Inicio, Nosotros, Contacto, Practica, PersonajePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path ="/" element={<Inicio />} />
          <Route path ="/nosotros" element={<Nosotros />} />
          <Route path ="/contacto" element={<Contacto />} />  
          <Route path ="/contactos" element={<Contacto />} />
          <Route path ="/practica" element={<Practica />} />  
          <Route path ="/personajes" element={<PersonajePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App; 
