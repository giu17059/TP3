import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Buscador } from './components/buscador';
import { useState } from 'react';



function App() {
  const [listaResultados, setListaResultados] = useState ([]);



  return(
    <div>
  <Buscador 
    setResultados = {setListaResultados}/>

  </div>
  )
}
export default App;
