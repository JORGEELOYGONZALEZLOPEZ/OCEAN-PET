import './Login.css';
import { useState } from "react";
import api from "./services/api";
import { useAuth } from './AuthContext';

function Login ({chVista}){
    const {Login } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Datos de registro:", { email, password});

        try{
            const credenciales = { email, password };
            const respuesta = await api.post('/usuarios/login', credenciales);
            if (respuesta.data && respuesta.data.token){
                Login(respuesta.data.token);
                alert('Autenticacion autorisada');
                setEmail('');
                setPassword('');    
                chVista("Inicio");
                
            }else{
                alert('Credenciales invalidas');
            }
        }catch (error){
            alert('Error al iniciar sesión'); 
            console.error('Detalle del error:', error);
        }

    };

    const handleCancelar = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <div className="formulario-wrapper">
            <div className="form-card">
                <h2>Crear Cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Usuario</label>
                        <input 
                            type="text" 
                            placeholder="luis.mtz2@oceanpet.mx"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="input-group">
                        <label>Contraseña</label>
                        <input 
                            type="password" 
                            placeholder="••••••••"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>

                    <div className="button-group">
                        <button type="submit" className="btn-primary">Ingresar</button>
                        <button type="button" className="btn-secondary" onClick={handleCancelar}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;