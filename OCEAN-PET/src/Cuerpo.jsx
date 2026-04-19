import Productos from './Productos';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contactos';
import Usuarios from './Usuarios';
import Carrito from './Carrito';
import Clima from './Clima';
import Login from './Login';
import PropTypes from 'prop-types';
import PoliticaPrivacidad from './PoliticaPrivacidad';

function Cuerpo({ vista, cambiarVista}){
    const vistas={
        Inicio: <Inicio cambiarVista={cambiarVista}/>,
        AcercaDe: <AcercaDe/>,
        Productos: <Productos/>,
        Contactos: <Contacto/>,
        Usuarios: <Usuarios/>,
        Carrito: <Carrito/>,
        Login: <Login chVista={cambiarVista}/>, 
        PoliticaPrivacidad: <PoliticaPrivacidad/>
    }
    return(
        <div className='contenido'>
            <Clima/>
            {vistas[vista] || <Inicio cambiarVista={cambiarVista} />}
            </div>
    )
}
Cuerpo.propTypes = {
    vista: PropTypes.string.isRequired,
    cambiarVista: PropTypes.func.isRequired
};
export default Cuerpo;