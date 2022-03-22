import NavBar from '../Components/NavBar/NavBar';
import Titulo from '../Components/Titulo/Titulo'
import ItemListContainer from './ItemListContainer';
import ItemCount from '../Components/ItemCount/ItemCount';



function RoutesApp() {
    const handleConsole = () => {
        console.log('soy evento')
      }

      const fnMensaje = () => {
        console.log("Estas clickeando y te muestro un mensaje")
      }

      const onAdd = (qty) => {
        alert(`Agregaste ${qty} productos`);
      };
  return (
    < >
      
      <NavBar> 
      <Titulo subTit='soy un subtitulo'/>
      </NavBar>

      <ItemListContainer saludo={fnMensaje} />

      <hr/>

      <ItemCount onAdd={onAdd} />
  
     
      

      
        
      
    </>
  )
}

export default RoutesApp
