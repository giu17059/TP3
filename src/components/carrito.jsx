import './../App.css';
import {useEffect, useState, useContext} from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { Listado } from "./listado";
import { ProductContext } from '../App';
import { useNavigate } from 'react-router-dom';
import {Button } from 'react-bootstrap';


export function Carrito (){
    
    const location = useLocation();
    const nuevoProducto = location.state?.producto;
    const [productosCarrito, setProductosCarrito] = useState([]);
    const { listaComprados, setListaComprados} = useContext(ProductContext);
    const navigate = useNavigate()
    const [total, setTotal]=useState(0)

    useEffect (()=> {
        if(nuevoProducto){
            setProductosCarrito((prevProductos) => [...prevProductos, nuevoProducto]);        
        }
    },[nuevoProducto]);

    useEffect (() =>{
            const nuevoTotal = listaComprados.reduce((total,item) => {
                return total + (item.price * item.cantidad);
        },0);
        setTotal(nuevoTotal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    },[listaComprados]);


    const aumentarCant = (item) =>{
        const compradosAux = listaComprados.map ((producto) =>{
            if (producto.id === item.id){
                return {...producto, cantidad: Number(producto.cantidad) +1};
            }else{
                return producto;
            }
        })
        setListaComprados(compradosAux);
    }

    const disminuirCant = (item)=> {
        const compradosAux = listaComprados.map ((producto) =>{
            if (producto.id === item.id){
                return {...producto, cantidad: Number(producto.cantidad) -1};
            }else{
                return producto;
            }
        }).filter(item => item.cantidad > 0); 
        setListaComprados(compradosAux);
    }
    const borrarProducto = (item) => {
        const compradosAux = listaComprados.map((producto) =>{
            if (producto.id === item.id){
                return null;
            }else{
                return producto;
            }
        });
        const listaFiltrada = compradosAux.filter((producto) => producto !== null);
        setListaComprados(listaFiltrada);
    };
    
    function mostrarSubtotal (item){
        const subtotal = item.cantidad * item.price;
        return subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

return(
    
    <div>
        
        <button onClick={()=> navigate('/')} className='btn'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-back-up" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 14l-4 -4l4 -4" />
                <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
        </button>

        <div className='container mt-2'>
            
                {listaComprados.length === 0 ? (
                    <div className='text-center p-4'>
                        <h3>No hay productos en el carrito.</h3>
                    </div>
                ) : (
                    listaComprados.map((item) => (
                        <div className='row text-center p-2 mb-3 border align-items-center' key={item.id}> 
                            {/* Columna de la imagen */}
                                <div className='col-md-2 d-flex justify-content-center'>
                                    <img src={item.thumbnail} alt="imagen del producto" className='img-fluid imagen_personalizada' />
                                </div>

                            {/* Columna del título y precio */}
                            <div className='col-md-6'>
                                    <h5 className='mb-3'>{item.title}</h5>
                                    <p>Precio Unitario: ${item.price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                            </div>

                            {/* Columna para la cantidad y botones */}
                                <div className='col-md-3 btns_cant'>
                                    <div className='d-flex justify-content-center align-items-center'> 
                                        <button className='btn btn-danger btn_change' onClick={() => disminuirCant(item)}>-</button> 
                                        <div className='letter_size'> {item.cantidad.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
                                        <button className='btn btn-success btn_change' onClick={()=> aumentarCant(item)} >+</button>
                                        <button onClick={()=> {borrarProducto(item)}} className='btn btn-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M4 7l16 0" />
                                                <path d="M10 11l0 6" />
                                                <path d="M14 11l0 6" />
                                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            {/* Botón de eliminar producto */}
                            <div className='col-md-1 d-flex justify-content-center'>
                                    
                            </div>    
                            
                            {/* Subtotal */}
                            <div className='col-md-12 text-end mt-2'>
                                {/*<div className='col-9'></div>*/}
                                {/*<div className='col-3'>*/}
                                    Subtotal: ${mostrarSubtotal(item)}
                                
                            </div>
                         </div>
                ))
            )}

                {/*<div className='row text-center p-4 border'>*/}
                    <div className='col-md-12 d-flex justify-content-end'>
                        <div className='total-container'>
                            <strong className='letra_total'>Total: ${total}</strong>
                        </div>
                    </div>
                {/*</div>  */}
            
        </div>   
    </div>)
}