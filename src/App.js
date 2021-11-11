import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/button';
import Frases from './components/Frases'

function App() {
  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
       <img src={logo} alt="logo de los simpsons" />
       <Button variant='warning' className='my-5 px-1 w-50'>Obtener frase</Button>
       <Frases></Frases>
    </section>
  );
}

export default App;
