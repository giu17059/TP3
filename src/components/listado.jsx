
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import { ProductContext } from "../App";
import './../App.css';


export function Listado (){
    const navigate = useNavigate();
    const { listaResultados } = useContext(ProductContext);
    const { setProdSeleccionado} = useContext(ProductContext);
    const totalCarrito = 0;
    console.log(listaResultados);
    
    function toProducto (item){

        setProdSeleccionado(item);
        navigate('/producto');
    }

    return(
        <div className='container mt-2'>
            <div className='col text-center'>
                {listaResultados.length === 0 ? (
                    <div className='text-center p-4'>
                        <h3>No hay productos disponibles.</h3>
                    </div>
                ) : (
                    listaResultados.map((item) => (
                        <div className='row text-center p-4 border' key={item.id}> 
                            <div className='col-1'></div>
                            <div className='col'>
                                <img src={item.thumbnail} alt="imagen del producto" className='imagen_personalizada' />
                            </div>
                            <div className='col'>
                                <div className='row pb-3'>
                                    {item.title}
                                </div>
                                <div className='row'>
                                    ${item.price}
                                </div>
                            </div>
                            <div className='col-2 mt-4'>
                                <Button variant='success' onClick={() => { toProducto(item) }}>Ver producto</Button>
                            </div>
                        </div>
                    )))}
            </div>
        </div>
    )   
} 