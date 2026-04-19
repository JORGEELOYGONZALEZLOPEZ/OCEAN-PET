import './Encabezado.css';
import miImagen from './assets/logo.png';
import inicio from './assets/home.png';
import carrito from './assets/carrito.gif';
import Usuarios from './assets/usuarios.png';
import Login from './assets/login.png';
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
                <button onClick={() => cambiarVista("Inicio")}><img src={inicio} alt="Inicio"/> Inicio</button>
                {isLoggedIn ? (
                    <>
                        <button onClick={() => cambiarVista("Productos")}><img src={Productos} alt="Prodcutos"/> Productos</button>
                        <button onClick={() => cambiarVista("Usuarios")}><img src={Usuarios} alt="Usuarios"/> Usuarios</button>
                        <button onClick={() => cambiarVista("Carrito")}><img src={carrito} alt="Carrito"/> Carrito</button>
                        <button onClick={handleLogout}>Cerrar Sesion</button>
                        </>
                ) : (
                    <button onClick={() => cambiarVista("Login")}><img src={Login} alt="Login"/> Login</button>
                    )}
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