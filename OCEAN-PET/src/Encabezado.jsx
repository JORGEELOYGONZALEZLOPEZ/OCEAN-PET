import './Encabezado.css';
import miImagen from './assets/logo.png'
import PropTypes from 'prop-types';
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
    return(
        <nav className='menu'>
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Contactos")}>Contactos</li>
                <li onClick={() => cambiarVista("Usuarios")}>Usuarios</li>
                <li onClick={() => cambiarVista("Carrito")}>Carrito</li>
                <li onClick={() => cambiarVista("Login")}>Login</li>
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