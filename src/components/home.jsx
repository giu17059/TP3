import "./../App.css"
import { Buscador } from "./buscador";
import { Carrito } from "./carrito";
import { Categoria } from "./categoria";
import { useNavigate } from "react-router-dom";


<<<<<<< HEAD
export function Home (){

    const navigate = useNavigate();

=======
export function Home ({setProdSeleccionado}){
>>>>>>> d118158da46dbbcb0fe2370560314c08af413468

    console.log("setProdSeleccionado en home.js", setProdSeleccionado);
    
    return(
        <div>
            <h1>App Mercado Libre</h1>
<<<<<<< HEAD

            <nav className="nav-fluid">
                <div className="row">
                    <div className="col">
                        <Buscador/>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-bottom">
                            <button onClick={()=> navigate ('/carrito')}>carrito 🛒</button>
                        </div>
                    </div>
                </div>
               
            </nav>  
            
            






=======
                
            <Buscador setProdSeleccionado={setProdSeleccionado}/>
>>>>>>> d118158da46dbbcb0fe2370560314c08af413468

        </div>
    );
}


