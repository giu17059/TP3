import "./../App.css"
import { Buscador } from "./buscador";
import { Carrito } from "./carrito";
import { Categoria } from "./categoria";
import { useNavigate } from "react-router-dom";


    

export function Home ({setProdSeleccionado}){
    const navigate = useNavigate();
    
    return(
        <div>
            <h1>App Mercado Libre</h1>

            <nav className="nav-fluid">
                <div className="row">
                    <div className="col">
                        <Buscador setProdSeleccionado={setProdSeleccionado}/>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-bottom">
                            <button onClick={()=> navigate ('/carrito')}>carrito 🛒</button>
                        </div>
                    </div>
                </div>
               
            </nav>  
            
            






                
            

        </div>
    );
}


