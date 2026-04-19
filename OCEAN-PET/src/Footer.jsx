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
                    <div>
                        <button onClick={() => cambiarVista("PoliticaPrivacidad")}>Politica de Privacidad</button>
                        <button onClick={() => cambiarVista("AcercaDe")}>Acerca De</button>
                        <button onClick={() => cambiarVista("Contactos")}>Contacto</button>
                    </div>
                    <p>Operamos directamente en las costas del Pacífico y el Golfo de México, apoyando comunidades.</p>
                </div>

                <div className="tarjeta-formal3">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                        <img src={x} alt="X" />
                    </a>
                </div>
            </section>
    )
}   
Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
};
export default Footer;