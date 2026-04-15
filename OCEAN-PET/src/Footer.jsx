import './Footer.css';
import logo from './assets/logo.png';
import instagram from './assets/rsocial/instagram.png';
import facebook from './assets/rsocial/facebook.png';
import linkedin from './assets/rsocial/linkedin.png';
import x from './assets/rsocial/x.png';
import PropTypes from 'prop-types';

function Footer ({cambiarVista}){
    return(
        <div>
            <Menu cambiarVista={cambiarVista}/>
        </div>
    )
}

function Menu ({cambiarVista}){
    return(
        <section className="contenedor-grid1">
                <div className="tarjeta-formal1">
                    <img src={logo} alt="Logo" />
                    <h3>OCEANPET</h3>
                </div>

                <div className="tarjeta-formal2">   
                    <li onClick={() => cambiarVista("PoliticaPrivacidad")}>Politica de Privacidad</li>
                    <p>Operamos directamente en las costas del Pacífico y el Golfo de México, apoyando comunidades.</p>
                </div>

                <div className="tarjeta-formal3">
                    <img src={instagram} alt="Redes Sociales" />
                    <img src={facebook} alt="Redes Sociales" />
                    <img src={linkedin} alt="Redes Sociales" />
                    <img src={x} alt="Redes Sociales" />
                </div>
            </section>
    )
}
Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};
export default Footer;