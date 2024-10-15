
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './../App.css';




export function MostrarProducto ({prodSeleccionado}){

    console.log(prodSeleccionado);
    
    return(
        <div>
            {prodSeleccionado.title}
        </div>







    );
}