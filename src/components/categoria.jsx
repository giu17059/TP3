import {useEffect, useState} from 'react';
import { Listado } from './listado';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Categoria ({setResultados}) {
    const [categorias, setCategoria] = useState([]);
    const[catSeleccionada, setCatSeleccionada] = useState('');
    const[listaResultados, setListaResultados] = useState([]); 
    const[cargando, setCargando] = useState(false);

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/sites/MLA/categories`)
            .then(response => response.json())
            .then(data => setCategoria(data))            
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    useEffect(() => {
        if (catSeleccionada) {
            setCargando(true);
            fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${catSeleccionada}`)
            .then(response => response.json())
            .then(data => {
                setListaResultados(data.results);
                console.log('Productos obtenidos: ', data.results);
            })
            .catch(error => console.error('Error al buscar por esta categoría:', error))
            .finally(()=> setCargando(false));
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
            {/* Mostrar el mensaje de carga */}
            {cargando ? (
                <div>
                    <p>Buscando...</p>
                    <div className='spinner-border' role='status'></div>
                </div>
            ) : (
                <Listado lista_Resultados={listaResultados}></Listado>
            )}
         </div>  
    )
    

}