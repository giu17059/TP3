import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buscador } from './components/buscador';
import { useState } from 'react';
import { Listado } from './components/listado';



function App() {
  const [listaResultados, setListaResultados] = useState ([]);



  return(
    <div className='container-fluid '>
      <div className='row mt-2 text-center'>
        <div className='col '>
            <Buscador  
              setResultados={setListaResultados}/>
          </div>
      </div> 
      <div className='col'>
        <Listado
          lista_Resultados={listaResultados}/>
      </div>
  </div>
  )
}
export default App;
