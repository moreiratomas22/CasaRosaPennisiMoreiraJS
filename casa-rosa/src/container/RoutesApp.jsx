import NavBar from '../Components/NavBar/NavBar';
import Titulo from '../Components/Titulo/Titulo'
import ItemListContainer from './ItemListContainer';



function RoutesApp() {
    const handleConsole = () => {
        console.log('soy evento')
      }

      const fnMensaje = () => {
        console.log("Estas clickeando y te muestro un mensaje")
      }
  return (
    < >
      
      <NavBar> 
      <Titulo subTit='soy un subtitulo'/>
      </NavBar>

      <ItemListContainer />

      <div saludo={fnMensaje}> </div>
     
      

      
        
      
    </>
  )
}

export default RoutesApp
