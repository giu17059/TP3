import {useEffect, useState, useContext} from 'react';
import { Listado } from './listado';
import { ProductContext } from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Categoria ({setCarga}) {
    const [categorias, setCategoria] = useState([]);
    const[catSeleccionada, setCatSeleccionada] = useState('');
    const { setListaResultados } = useContext(ProductContext);
    useEffect(() => {
        fetch(`https://api.mercadolibre.com/sites/MLA/categories`)
            .then(response => response.json())
            .then(data => setCategoria(data))            
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    useEffect(() => {
        if (catSeleccionada) {
            setCarga(true);
            fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${catSeleccionada}`)
            .then(response => response.json())
            .then(data => {
                setListaResultados(data.results);
                console.log('Productos obtenidos: ', data.results);
            })
            .catch(error => console.error('Error al buscar por esta categoría:', error))
            .finally(()=> setCarga(false));
        }
    }, [catSeleccionada]);

    return (
        <div>
            <div>
                <select
                    className='btn btn-dark'
                    onChange={(e) => setCatSeleccionada(e.target.value)}>
                        <option  value="" >Seleccione una categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.name}
                            </option>   
                        ))}
                </select>
            </div>
        </div>  
    )
    

}