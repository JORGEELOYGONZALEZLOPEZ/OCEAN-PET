import './Inicio.css';
import imagen1 from './assets/recoleccion.png';
import imagen2 from './assets/mar.png';
import imagen3 from './assets/producto.png';
import PropTypes from 'prop-types';
import ProductosIcono from './assets/productos.png'; // Renombrado para evitar conflictos
import { useAuth } from './AuthContext';

function Inicio({ cambiarVista }) {
    // Movemos el Hook a la función Inicio que es la principal
    const { isLoggedIn } = useAuth();

    // La lógica de navegación también debe estar disponible o pasarse
    const manejarNavegacion = () => {
        if (isLoggedIn) {
            cambiarVista("Productos");
        } else {
            cambiarVista("Login");
        }
    };

    return (
        <div className='contenido'>
            {/* Pasamos isLoggedIn y manejarNavegacion como props a Card */}
            <Card 
                isLoggedIn={isLoggedIn} 
                manejarNavegacion={manejarNavegacion} 
            />
            <Inicio1 />
        </div>
    );
}

function Card({ isLoggedIn, manejarNavegacion }) {
    return (
        <div className="card">
            <div>
                <br />
                <h1 className='h1'>Salvando los océanos de México</h1>
                <br />
                <h3 className='h3'>
                    Transformamos el plástico recuperado del Pacifico y el Golfo de México en productos sustentables y funcionales
                </h3>
                <br />
                <br />
                {/* Ahora las variables sí existen aquí porque llegan como props */}
                <button onClick={manejarNavegacion}>
                    <img src={ProductosIcono} alt="Productos" />
                    {isLoggedIn ? " Ver Productos" : " Ver Productos"}
                </button>
            </div>
        </div>
    );
}

// Estos componentes se mantienen igual
function Inicio1() {
    return (
        <div className='InicioDiv'>
            <TarjetaComponent />
        </div>
    );
}

function TarjetaComponent() {
    return (
        <div className='cuerpo'>
            <Tarjeta name='15 TONELADAS' src={imagen1} description='PLASTICO RECICLADO' />
            <Tarjeta name='2 OCEANOS' src={imagen2} description='Pacifico y Golfo de México' />
            <Tarjeta name='5,000 +' src={imagen3} description='Productos fabricados' />
        </div>
    );
}

function Tarjeta(props) {
    return (
        <div className='interior'>
            <div>
                <h3>{props.name}</h3>
                <div className='imagenes'>
                    <img src={props.src} alt="logotipo" />
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

// Validaciones de Props corregidas
Tarjeta.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

Card.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    manejarNavegacion: PropTypes.func.isRequired
};

Inicio.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};

export default Inicio;