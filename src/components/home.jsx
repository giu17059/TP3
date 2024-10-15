import "./../App.css"
import { Buscador } from "./buscador";
import { Carrito } from "./carrito";
import { Categoria } from "./categoria";
import { useNavigate } from "react-router-dom";


    

export function Home ({setProdSeleccionado}){
    const navigate = useNavigate();
    
    return(
        <div>
            <h1 className="titulo">App Mercado Libre</h1>
                <Buscador setProdSeleccionado={setProdSeleccionado}/>
                     
            
            






                
            

        </div>
    );
}


