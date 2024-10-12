import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buscador } from './components/buscador';
import { useState } from 'react';
import { Listado } from './components/listado';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [listaResultados, setListaResultados] = useState ([]);
  const [listaComprados, setListaComprados] = useState([]);


  return(
    <div className='container-fluid '>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Buscador  
                  setResultados={setListaResultados}/>} />
                <Route path="/about" element={<Listado
                  lista_Resultados={listaResultados}/>} />
              </Routes> 
          </BrowserRouter> 
  </div>
  )
}
export default App;
