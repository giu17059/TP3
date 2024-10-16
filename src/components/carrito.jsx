import './../App.css';
import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Listado } from "./listado";




export function Carrito (){
    
    const location = useLocation();
    const nuevoProducto = location.state?.producto;
    const [productosCarrito, setProductosCarrito] = useState([]);

    useEffect (()=> {
        if(nuevoProducto){
            setProductosCarrito((prevProductos) => [...prevProductos, nuevoProducto]);        
        }
    },[nuevoProducto]);
    console.log('productos del carrito:',productosCarrito)
    return(
        <Listado lista_Resultados={productosCarrito}></Listado>
        
    )
}