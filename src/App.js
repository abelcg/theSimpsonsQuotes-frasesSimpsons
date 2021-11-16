import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/button';
import Frases from './components/Frases';
import {useState, useEffect} from 'react';

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() =>{
    consultaApi();
  }, [])

  const consultaApi = async()=> {
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    const dato = await respuesta.json();
    console.log(respuesta);
    console.log(dato[0]);
    // guardar en el state
    setPersonaje(dato[0]);
  }

  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
       <img src={logo} alt="logo de los simpsons"/>
       <Button variant='warning' className='my-5 px-1 w-50' onClick={()=> consultaApi()}>Obtener frase</Button>
       <Frases personaje={personaje}></Frases>
    </section>
  );
}

export default App;
