import './Inicio.css';
import imagen1 from './assets/recoleccion.png';
import imagen2 from './assets/mar.png';
import imagen3 from './assets/producto.png';
import PropTypes from 'prop-types';


function Inicio (){
    return(
        <div className='contenido'>
            <Card/>
            <Inicio1/>
        </div>
    )
}
function Card(){
    return(
        <div className="card">
            <div>
                <br />
                <h1 className='h1'>Salvando los océanos de México</h1>
                <br />  
                <h3 className='h3'>Transformamos el plástico recuperado del Pacifico y el Golfo de México en productos sustentables y funcionales</h3>
            </div>
        </div>   
    )
}
//Parte de las tarjetas
function Inicio1() {
    return(
        <div className='InicioDiv'>
        <>
            <TarjetaComponent />
        </>
        </div>
    );
}

function TarjetaComponent(){
    return(
        <div className='cuerpo'>
            <Tarjeta name = '15 TONELADAS' src={imagen1} description='PLASTICO RECICLADO'/>
            <Tarjeta name = '2 OCEANOS' src={imagen2} description='Pacifico y Golfo de México'/>
            <Tarjeta name = '5,000 +' src={imagen3} description='Productos fabricados'/>
        </div>
    )
}

function Tarjeta(props){
    return(
        <div className='interior'>
            <div> 
                <h3>{props.name}</h3>
                <div className='imagenes'>
                    <img src={props.src} alt="logotipo"/>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
Tarjeta.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
export default Inicio;