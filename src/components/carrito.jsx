import './../App.css';
import {useEffect, useState, useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Listado } from "./listado";
import { ProductContext } from '../App';
import { useNavigate } from 'react-router-dom';


export function Carrito (){
    
    const location = useLocation();
    const nuevoProducto = location.state?.producto;
    const [productosCarrito, setProductosCarrito] = useState([]);
    const { listaComprados, setListaComprados} = useContext(ProductContext);
    const navigate = useNavigate()

    useEffect (()=> {
        if(nuevoProducto){
            setProductosCarrito((prevProductos) => [...prevProductos, nuevoProducto]);        
        }
    },[nuevoProducto]);


    function restar(producto) {
        
        const listanueva = listaComprados.map((item) => {
            if (item.id === producto.id) { 
                return { ...item, cantidad: Number(item.cantidad)-1 }; 
            }
            return item; 
        }).filter(item => item.cantidad > 0); 
        
        setListaComprados(listanueva);
    }

    function agregar (producto){
        const listanueva = listaComprados.map((item) => {
            if (item.id === producto.id) { 
                return { ...item, cantidad: Number(item.cantidad)+1 }; 
            }
            return item; 
        })
        
        setListaComprados(listanueva);
    }

    function quitar (producto){
        const nuevaLista = listaComprados.filter((item) => item.id !== producto.id)
        setListaComprados(nuevaLista)
    }


return(
    <div>
        <button onClick={()=> navigate('/')} className='btn'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M9 14l-4 -4l4 -4" />
                                            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
                                            </svg>
        </button>
        <div className='container mt-2'>
            <div className='col text-center'>
                {listaComprados.length === 0 ? (
                    <div className='text-center p-4'>
                        <h3>No hay productos en el carrito.</h3>
                    </div>
                ) : (
                    listaComprados.map((item) => (
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
                                <div className='row'>
                                    <div className='col'>
                                        <button className='btn btn-danger' onClick={()=>restar(item)}>-</button>
                                    </div>
                                    <div className='col'>
                                        {item.cantidad}
                                    </div>
                                    <div className='col'>
                                        <button className='btn btn-success' onClick={()=>agregar(item)}>+</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-2 mt-4'>
                                <div className='row'>
                                    <button className='btn btn-danger' onClick={()=>quitar(item)}>X</button>
                                </div>
                                <div className='row'>
                                    Subtotal: {item.price * item.cantidad}
                                </div>
                            </div>
                        </div>
                    )))}
            </div>
        </div>
    </div>
        
    )
}