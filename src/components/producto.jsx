
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import {useEffect, useState, useContext} from 'react';
import {Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Carrusel } from './carrusel';
import { ProductContext } from "../App";
import { useNavigate } from 'react-router-dom';

export function MostrarProducto (){
    const { prodSeleccionado, setListaComprados, listaComprados} = useContext(ProductContext);
    const [item, setItem] = useState({});
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate ();
    const [cantidad, setCantidad] = useState(1);
    

    useEffect(() => {
        if (prodSeleccionado && prodSeleccionado.id){
            fetch(`https://api.mercadolibre.com/items/${prodSeleccionado.id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error al obtener los datos:', error));

            fetch(`https://api.mercadolibre.com/items/${prodSeleccionado.id}/description`)
            .then(response => response.json())
            .then(data => setDescripcion(data.plain_text))
            .catch(error => console.error('Error al obtener los datos:', error));
        
        }
    }, [prodSeleccionado]); 

    function toCarrito (prodSeleccionado, cant){
        if(cant>0){
            const existe = listaComprados.find(
                (producto) => producto.id === prodSeleccionado.id
            )
            if (existe){
                alert('Ese producto ya existe en el carrito')
            }else{
                /* const nuevoProducto = {...prodSeleccionado , cantidad: cant, idcarrito: 1};*/
                const nuevoProducto = {...prodSeleccionado , cantidad: cant};
                setListaComprados (prevLista => [...prevLista, nuevoProducto]);
                navigate('/', {state: {producto: prodSeleccionado}});
            }
        } else {
            alert('La cantidad del producto debe ser mayor a 0.')
        }
    }
    if (!prodSeleccionado || !prodSeleccionado.thumbnail) {
        return <p>No tengo ningún producto para mostrar...</p>;
    }

    const mostrarAtributos = (item) => {
        return item.attributes ? (
            <div>
                <p>Caracteristicas principales</p>
                <Table striped bordered hover>
                    <tbody>
                        {item.attributes.map((atributo, index) =>(
                            <tr key={index}>
                                <td>{atributo.name}</td>
                                <td>{atributo.value_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )  : null};

return(
    <div>
        <Row>
            <Col >
                <button onClick={()=> navigate('/')} className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 14l-4 -4l4 -4" />
                        <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
                    </svg>
                </button>
            </Col>
            <Col className=' col-2 mt-4 d-flex justify-content-center'>
                    <button className="btn btn-dark" onClick={()=> navigate ('/carrito')}>Carrito 🛒</button>
            </Col>
        </Row>
        <Container className='contenedor'>
            <div style={{maxHeight: '1000px'}}>
                <Row className='fila_producto'> 
                    <Col md={6} className='imagenes'>
                    <div >
                        {item.pictures && item.pictures.length > 0 ? (
                            <Carrusel className='img carrusel' images={item.pictures} /> 
                        ): (
                            <img src={prodSeleccionado.thumbnail} alt="imagen del producto" className='imagen_personalizada'/>
                        )}
                    </div>
                    
                    </Col>
                    <Col md={6}>
                        
                        <h1 className='titulo'>{prodSeleccionado.title}</h1>
                        <h3 className='precio '>
                            Precio: ${prodSeleccionado.price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </h3>

                        <Row>
                            <Col className='md-3'>
                                <input type="number" min={1} value={cantidad} onChange={(e)=> setCantidad(Number(e.target.value))}/>
                            </Col>
                            <Col>
                                <Button className='btn_addCarrito' variant='success' onClick={() => { toCarrito(prodSeleccionado, cantidad) }}>
                                    Agregar al carrito
                                </Button>
                            </Col>
                        </Row>                 
                        
                    </Col>
                </Row> 
            </div>          
            <Row className='mt-4'>
                <Col className='md-6'>
                    {mostrarAtributos(item)}
                </Col>
                <Col className="md-6">
                    {descripcion && (
                        <p className='descripcion'>
                            <strong > 
                                Descripción: 
                            </strong>
                            {descripcion}
                        </p>
                        )}
                </Col>
                
            </Row>
        </Container>
    </div>
);
}
