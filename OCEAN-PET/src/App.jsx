import './App.css';
import Encabezado from './Encabezado.jsx';
import Cuerpo from './Cuerpo';
import Footer from './Footer';
import {useState } from "react";
import { AuthProvider } from "./AuthContext";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div className="body">
      <AuthProvider>
        <Encabezado cambiarVista={setVista}/>
        <Cuerpo vista={vista} cambiarVista={setVista} />
      </AuthProvider>
      <Footer vista={vista} cambiarVista={setVista}/>
    </div>
  )
}
export default App;