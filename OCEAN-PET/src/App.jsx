import './App.css';
import Encabezado from './Encabezado.jsx';
import Cuerpo from './Cuerpo';
import Footer from './Footer';
import {useState } from "react";
import { AuthProvider } from "./AuthContext";
import { CarritoProvider } from "./CarritoContext";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div className="body">
      <AuthProvider>
        <CarritoProvider>
          <Encabezado cambiarVista={setVista}/>
          <Cuerpo vista={vista} cambiarVista={setVista} />
        </CarritoProvider>
      </AuthProvider>
      <Footer vista={vista} cambiarVista={setVista}/>
    </div>
  )
}
export default App;