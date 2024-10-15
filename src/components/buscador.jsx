import "./../App.css"
import { useState } from "react"
import Button  from "react-bootstrap/Button";
import { Listado } from "./listado";
import { Categoria } from "./categoria";


export function Buscador ({setProdSeleccionado}){
  const [buscador, setBuscador] = useState ("");
  const [cargando, setCargando] = useState (false);
  const [listaResultados, setListaResultados] = useState ([]);


   function buscar_api (){
    setCargando(true);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscador}`)
      .then((response) => response.json()) 
      .then((data) => {
        console.log(data.results);
        setListaResultados(data.results);
      })
      .catch((error) => {
        console.error("Error al buscar en la API de Mercado Libre:", error);
      })
      .finally(()=>{setCargando(false)});
   }

    return(
      <div className='col mt-2 text-center'>
        <div className='row '>
            <div className="col">
              <div className="d-flex justify-content-center">
                <input 
                    type="text" 
                    className="p-1"
                    placeholder="Buscador" 
                    value={buscador}
                    onChange={(e)=> setBuscador(e.target.value)} 
                    onKeyDown={(e)=> e.key === 'Enter'? buscar_api():{}}/>
                <Button onClick={buscar_api} variant="primary">🔍</Button>
              </div>
            </div>
        </div>
        <div className="row mt-2">
          <div className="d-flex justify-content-space">
            <Categoria setResultados={setListaResultados} setCarga={setCargando}/>
          </div>
        </div>
        {cargando ? (
                <div>
                    <p>Buscando...</p>
                    <div className='spinner-border' role='status'></div>
                </div>
            ) : (
                <Listado lista_Resultados={listaResultados} setProdSeleccionado={setProdSeleccionado}></Listado>
            )}
      </div>
    )
}