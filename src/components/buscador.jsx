import "./../App.css";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { Listado } from "./listado";
import { Categoria } from "./categoria";
import { ProductContext } from "../App";
import { useNavigate } from "react-router-dom";

export function Buscador() {
  const [buscador, setBuscador] = useState("");
  const [cargando, setCargando] = useState(false);
  const { listaResultados, setListaResultados, setProdSeleccionado } = useContext(ProductContext);
  const navigate = useNavigate();

  function buscar_api() {
    setCargando(true);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscador}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setListaResultados(data.results); 
        setBuscador(""); 
      })
      .catch((error) => {
        console.error("Error al buscar en la API de Mercado Libre:", error);
      })
      .finally(() => {
        setCargando(false);
      });
  }

  return (
    <div className='col mt-2 text-center'>
      <div className='row'>
        <div className="col">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              className="p-1 buscador"
              placeholder="Buscador"
              value={buscador}
              onChange={(e) => setBuscador(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' ? buscar_api() : {}}
            />
            <Button onClick={buscar_api} variant="primary" className="boton_buscar" disabled={!buscador}>
              🔍
            </Button>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="d-flex justify-content-around">
          <div>
            <Categoria setCarga={setCargando}/>
          </div>
          <div>
            <button className="btn btn-dark" onClick={()=> navigate ('/carrito')}>Carrito 🛒</button>
          </div>
        </div>
      </div>
      {cargando ? (
        <div>
          <p>Buscando...</p>
          <div className='spinner-border' role='status'></div>
        </div>
      ) : (
        <Listado/>
      )}
    </div>
  );
}
