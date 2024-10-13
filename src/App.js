import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buscador } from './components/buscador';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MostrarProducto } from './components/producto';
import { Home } from './components/home';
<<<<<<< HEAD
import { Carrito } from './components/carrito';
=======
import { Listado } from './components/listado';
>>>>>>> d118158da46dbbcb0fe2370560314c08af413468


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
                <Route path="/carrito" element={<Carrito/>}/>
              </Routes>
          </BrowserRouter> 
  </div>
  )
}
export default App;
