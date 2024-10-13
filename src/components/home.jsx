import "./../App.css"
import { Buscador } from "./buscador";
import { Categoria } from "./categoria";



export function Home ({setProdSeleccionado}){

    console.log("setProdSeleccionado en home.js", setProdSeleccionado);
    
    return(
        <div>
            <h1>App Mercado Libre</h1>
                
            <Buscador setProdSeleccionado={setProdSeleccionado}/>

        </div>
    );
}


