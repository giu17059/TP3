import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buscador } from './components/buscador';
import { useState } from 'react';
import { Listado } from './components/listado';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  const [listaComprados, setListaComprados] = useState([]);


  return(
    <div className='container-fluid '>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Buscador/>}/>
              </Routes>
              <Routes>
                <Route path="/producto" element={<Buscador/>}/>
              </Routes>
              <Routes>
                <Route path="/carrito" element={<Buscador/>}/>
              </Routes>
          </BrowserRouter> 
  </div>
  )
}
export default App;
