import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buscador } from './components/buscador';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MostrarProducto } from './components/producto';
import { Home } from './components/home';
import { Carrito } from './components/carrito';
import { Listado } from './components/listado';


function App() {
  const [listaComprados, setListaComprados] = useState([]);
  const [prodSeleccionado, setProdSeleccionado] = useState();

  return(
    <div className='container-fluid '>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home setProdSeleccionado={setProdSeleccionado} />} />
              <Route path="/producto" element={<MostrarProducto prodSeleccionado={prodSeleccionado} />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </BrowserRouter> 
  </div>
  )
}
export default App;
