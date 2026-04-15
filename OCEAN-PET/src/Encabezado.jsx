import './Encabezado.css';
import miImagen from './assets/logo.png';
import inicio from './assets/home.png';
import carrito from './assets/carrito.gif';
import Usuarios from './assets/usuarios.png';
import Acercade from './assets/acercade.png';
import Login from './assets/login.png';
import Contacto from './assets/contacto.png';
import Productos from './assets/productos.png';

import PropTypes from 'prop-types';
import { useAuth } from './AuthContext';

function Encabezado ({cambiarVista}){
    return (
        <div className='encabezado'>
            <Logotipo/>
            <Menu cambiarVista={cambiarVista}/>
        </div>
    )
}
function Logotipo(){
    return (
        <div className='Logo'>
            <img src={miImagen} alt="logotipo"/>
        </div>
    )
}
function Menu({cambiarVista}){
    const { isLoggedIn, logout } = useAuth();
    const handleLogout = () => {
        logout();
        cambiarVista("Inicio");
    };
    return(
        <nav className='menu'>
            <ul>
                <li onClick={() => cambiarVista("Inicio")}><img src={inicio} alt="Inicio"/> Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}><img src={Acercade} alt="AcercaDe"/> Acerca de</li>
                {/*{isLoggedIn ?
                    <>*/}
                        <li onClick={() => cambiarVista("Productos")}><img src={Productos} alt="Prodcutos"/> Productos</li>
                        <li onClick={() => cambiarVista("Contactos")}><img src={Contacto} alt="Contacto"/> Contacto</li>
                        <li onClick={() => cambiarVista("Usuarios")}><img src={Usuarios} alt="Usuarios"/> Usuarios</li>
                        <li onClick={() => cambiarVista("Carrito")}><img src={carrito} alt="Carrito"/> Carrito</li>
                        {/*<li onClick={handleLogout}>Cerrar Sesion</li>
                        </>
                ) : (*/}
                    <li onClick={() => cambiarVista("Login")}><img src={Login} alt="Login"/> Login</li>
                    {/*)}*/}
            </ul>
        </nav>
    )
}
Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};
Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};


export default Encabezado;