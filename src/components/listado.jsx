
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './../App.css';


export function Listado ({lista_Resultados, setProdSeleccionado}){
    const navigate = useNavigate();

    console.log('set producto seleccionado en listado', setProdSeleccionado);

    return(
        <div className='container mt-2'>
            <div className='col text-center'>
                {lista_Resultados.map((item)=> 
                    <div className='row text-center p-4 border'>
                        <div className='col-1'></div>
                        <div className='col-2'>
                            <img src={item.thumbnail} alt="imagen del producto" className='imagen_personalizada'/>
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
                            <Button variant='success' onClick={()=>{
                                setProdSeleccionado(item);
                                navigate('/producto');
                            }}>comprar</Button>
                        </div>
                    </div>)}
            </div>
        </div>
    )   
}