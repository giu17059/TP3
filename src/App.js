import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buscador } from './components/buscador';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MostrarProducto } from './components/producto';
import { Home } from './components/home';



function App() {
  const [listaComprados, setListaComprados] = useState([]);
  const [prodSeleccionado, setProdSeleccionado] = useState();

  return(
    <div className='container-fluid '>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
              </Routes>
              <Routes>
                <Route path="/producto" element={<MostrarProducto producto={prodSeleccionado}/>}/>
              </Routes>
              <Routes>
                <Route path="/carrito" element={<Buscador/>}/>
              </Routes>
          </BrowserRouter> 
  </div>
  )
}
export default App;
