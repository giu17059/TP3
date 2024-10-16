
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import {useEffect, useState, useContext} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Carrusel } from './carrusel';
import { ProductContext } from "../App";

export function MostrarProducto (){

    const { prodSeleccionado } = useContext(ProductContext);
    const [item, setItem] = useState({});
    

    useEffect(() => {
        if (prodSeleccionado && prodSeleccionado.id){
            fetch(`https://api.mercadolibre.com/items/${prodSeleccionado.id}`)
            .then(response => response.json())
            .then(data => setItem(data))
            .catch(error => console.error('Error al obtener los datos:', error));
        }
    }, [prodSeleccionado]); 
    
    if (!prodSeleccionado || !prodSeleccionado.thumbnail) {
        return <p>Cargando...</p>;
    }

    return(
        <Container>
            <Row> 
                <Col md={6}>
                    {item.pictures && item.pictures.length > 0 ? (
                        <Carrusel images={item.pictures} /> 
                    ): (
                        <img src={prodSeleccionado.thumbnail} alt="imagen del producto" className='imagen_personalizada'/>
                    )}
                </Col>
                <Col md={6}>
                    
                    <h1>{prodSeleccionado.title}</h1>
                    <h3>Precio: ${prodSeleccionado.price}</h3>
                    <p>Descripcion: {prodSeleccionado.description}</p>
                    <p>Atributos </p>
                </Col>
            </Row>
        </Container>
        
    );
}
