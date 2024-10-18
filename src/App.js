import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buscador } from './components/buscador';
import { useState, createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MostrarProducto } from './components/producto';
import { Home } from './components/home';
import { Carrito } from './components/carrito';

export const ProductContext = createContext();

function App() {
  const [listaComprados, setListaComprados] = useState([]);
  const [prodSeleccionado, setProdSeleccionado] = useState();
  const [listaResultados, setListaResultados] = useState ([]);

  return(

    <ProductContext.Provider value= {{listaResultados, setListaResultados, prodSeleccionado, setProdSeleccionado, listaComprados, setListaComprados}}>
        <div className='container-fluid '>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/producto" element={<MostrarProducto/>} />
                  <Route path="/carrito" element={<Carrito />} />
                </Routes>
              </BrowserRouter> 
      </div>
  </ProductContext.Provider>
  )
}
export default App;
