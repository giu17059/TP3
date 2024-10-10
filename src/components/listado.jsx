
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


export function Listado ({lista_Resultados}){




    return(
        <div className='container'>
            <div className='col text-center'>
            {lista_Resultados.map((item)=> 
                <div className='row text-center p-4 border'>
                    <div className='col-1'></div>
                    <div className='col-2'>
                        <img src={item.thumbnail} alt="imagen del producto"/>
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
                        <Button variant='success'>comprar</Button>
                    </div>
                </div>)}
            </div>
        </div>



    )   
}