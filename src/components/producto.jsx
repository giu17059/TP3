
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import {useEffect, useState, useContext} from 'react';
import {Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Carrusel } from './carrusel';
import { ProductContext } from "../App";
import { useNavigate } from 'react-router-dom';

export function MostrarProducto (){
    const { prodSeleccionado } = useContext(ProductContext);
    const [item, setItem] = useState({});
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate ();
    

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

    function toCarrito (prodSeleccionado){
        navigate('/', {state: {producto: prodSeleccionado}});
    }

    console.log('prod seleccionado en producto:', prodSeleccionado);
    console.log('item en componente producto', item);
    console.log('pictures item en componente producto', item.pictures);
    
    if (!prodSeleccionado || !prodSeleccionado.thumbnail) {
        return <p>No tengo ningún producto para mostrar...</p>;
    }

    const mostrarAtributos = (item) => {
        console.log('mostrar atributos', item.atributes);
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
        <Container className='contenedor'>
            <Row className='fila_producto'> 
                <Col md={6} className='imagenes'>
                    {item.pictures && item.pictures.length > 0 ? (
                        <Carrusel className='img' images={item.pictures} /> 
                    ): (
                        <img src={prodSeleccionado.thumbnail} alt="imagen del producto" className='imagen_personalizada'/>
                    )}
                </Col>
                <Col md={6}>
                    
                    <h1 className='titulo'>{prodSeleccionado.title}</h1>
                    <h3 className='precio '>
                        Precio: ${prodSeleccionado.price.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </h3>
                    {descripcion && (
                        <p className='descripcion'>
                            <strong> 
                                Descripción: 
                            </strong>
                            {descripcion}
                        </p>
                        )}
                   
                    
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={8}>
                    {mostrarAtributos(item)}
                </Col>
                <Col className="text-end">
                    <Button className='btn_addCarrito' variant='success' onClick={() => { toCarrito(prodSeleccionado) }}>
                        Agregar al carrito
                    </Button>
                </Col>
                
            </Row>
        </Container>
        
    );
}
