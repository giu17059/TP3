import "./../App.css"
import { useState } from "react"
import Button  from "react-bootstrap/Button";

export function Buscador ( {setResultados}){
   const [buscador, setBuscador] = useState ("");

   

   function buscar_api (){
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscador}`)
      .then((response) => response.json()) 
      .then((data) => {
        console.log(data.results); 
        setResultados(data.results); 
      })
      .catch((error) => {
        console.error("Error al buscar en la API de Mercado Libre:", error);
      });

   }

    return(
       <div className="">
        <input 
            type="text" 
            className="p-1"
            placeholder="Buscador" 
            value={buscador}
            onChange={(e)=> setBuscador(e.target.value)} 
            onKeyDown={(e)=> e.key === 'Enter'? buscar_api():{}}/>
        <Button onClick={buscar_api} variant="primary">🔍</Button>



       </div> 
    )
}