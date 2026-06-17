import './App.css'
import { Layout } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Inicio, EquipoTrabajo, Noticia, Contactos, Practica } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<EquipoTrabajo />} />
          <Route path="/noticias" element={<Noticia />} />
          <Route path="/practica" element={<Practica />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App; 
