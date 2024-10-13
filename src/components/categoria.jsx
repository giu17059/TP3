import {useEffect, useState} from 'react';

export function Categoria ({setResultados}) {
const [categorias, setCategoria] = useState([]);

useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/categories')
    .then(response => response.json())
    .then(data => setCategoria(data))
    
    .catch(error => console.error('Error al obtener los datos:', error));
}, []);

return (
    <div> 
        <select>
           <option  value="" >Seleccione una categoria</option>
            {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                    {categoria.name}
                </option>   
           ))}
        </select>
    </div>
)

}