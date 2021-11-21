import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/button";
import Frases from "./components/Frases";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [carga, setCarga] = useState(false);

  useEffect(() => {
    consultaApi();
  }, []);

  const consultaApi = async () => {
    setCarga(false)
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const dato = await respuesta.json();
    console.log(respuesta);
    console.log(dato[0]);
    setTimeout(() => {
      // guardar en el state
      setPersonaje(dato[0]);
      // mostrar el componente frase
      setCarga(true);
    }, 1500);
  };
  // operador  ternario
  // (condicion logica) ? (codigo a ejecutar cuando es verdadero) : (cuando la condicion es falsa)
  const mostrarComponente =
    carga === true ? <Frases personaje={personaje}></Frases> : <Spinner />;

  return (
    <section className="container my-5 d-flex flex-column align-items-center">
      <img src={logo} alt="The Simpsons logo" />
      <Button
        variant="warning"
        className="my-5 px-1 w-50"
        onClick={() => consultaApi()}
      >
        Get Quotes
      </Button>
      {mostrarComponente}
    </section>
  );
}

export default App;
