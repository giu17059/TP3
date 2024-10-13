
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './../App.css';




export function MostrarProducto ({producto}){




    return(
        <div>
            <h1>{producto.title}</h1>
        </div>







    );
}