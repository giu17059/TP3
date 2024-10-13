import {useEffect, useState} from 'react';
import { Listado } from './listado';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Categoria ({setResultados, setCarga}) {
    const [categorias, setCategoria] = useState([]);
    const[catSeleccionada, setCatSeleccionada] = useState('');

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
                setResultados(data.results);
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