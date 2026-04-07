import Productos from './Productos';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contactos';
import Usuarios from './Usuarios';
import Carrito from './Carrito';
import Login from './Login';
import PropTypes from 'prop-types';

function Cuerpo(props){
    const vistas={
        Inicio: <Inicio/>,
        AcercaDe: <AcercaDe/>,
        Productos: <Productos/>,
        Contactos: <Contacto/>,
        Usuarios: <Usuarios/>,
        Carrito: <Carrito/>,
        Login: <Login/>
    }
    return(
        <div className='contenido'>
            {vistas[props.vista] || <Inicio/>}
            </div>
    )
}
Cuerpo.propTypes = {
    vista: PropTypes.string.isRequired
};
export default Cuerpo;