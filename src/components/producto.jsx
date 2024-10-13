
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './../App.css';




export function MostrarProducto ({prodSeleccionado}){

    console.log('prod seleccionado en app.js:', prodSeleccionado);
    
    return(
        <div>
            <h1>{prodSeleccionado.title}</h1>
        </div>







    );
}