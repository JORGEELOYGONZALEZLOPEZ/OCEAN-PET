import './App.css';
import Encabezado from './Encabezado.jsx';
import Cuerpo from './Cuerpo';
import {useState } from "react";
function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div className="body">
      <Encabezado cambiarVista={setVista}/>
      <Cuerpo vista={vista} chVista={setVista} />
      
    </div>
  )
}

export default App;