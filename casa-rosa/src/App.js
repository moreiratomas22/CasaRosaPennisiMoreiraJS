import NavBar from './Components/NavBar/NavBar';
import Titulo from './Components/Titulo/Titulo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

const handleConsole = () => {
  console.log('soy evento')
}

function App() {
  return (
    <div className="App" onClick={ ()=> handleConsole()} >
      <header className="App-header">

      <Titulo />
      <NavBar />

        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  )
}

export default App;
