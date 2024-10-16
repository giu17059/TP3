import Carousel from 'react-bootstrap/Carousel';


export function Carrusel ({ images = []} ) {
  
    console.log('imagenes en carrusel:', images);
    return (
        <Carousel>
            {images.map((imagen, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block mx-auto "
                        src={imagen.url}
                        alt={`Imagen ${index + 1}`}
                        
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
 
}