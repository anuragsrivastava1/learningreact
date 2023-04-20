import './App.css';
import Contactform from './components/Contactform';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
  <Navbar/>  
  <div className='container '>
  <Contactform></Contactform>
  </div>
    
    </>
  );
}

export default App;
