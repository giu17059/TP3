import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buscador } from './components/buscador';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MostrarProducto } from './components/producto';
import { Home } from './components/home';
import { Listado } from './components/listado';


function App() {
  const [listaComprados, setListaComprados] = useState([]);
  const [prodSeleccionado, setProdSeleccionado] = useState();

  console.log('prod seleccionado en app.js:', prodSeleccionado);

  return(
    <div className='container-fluid '>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home setProdSeleccionado={setProdSeleccionado}/>}/>
              </Routes>
              <Routes>
                <Route path="/producto" element={<MostrarProducto producto={prodSeleccionado}/>}/>
              </Routes>
              <Routes>
                <Route path="/carrito" element={<>/* el carrito */</>}/>
              </Routes>
          </BrowserRouter> 
  </div>
  )
}
export default App;
