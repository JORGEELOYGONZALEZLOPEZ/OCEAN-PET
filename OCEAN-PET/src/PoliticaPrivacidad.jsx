import './PoliticaPrivacidad.css'; // Opcional para tus estilos

function PoliticaPrivacidad () {
    const fechaActual = "10 de abril de 2026";

    return (
        <div className="politica-container">
            <header className="politica-header">
                <h1>Política de Privacidad</h1>
                <p>Última actualización: {fechaActual}</p>
            </header>

            <section className="politica-content">
                <p>
                    En <strong>Ocean Pet</strong>, nos tomamos muy en serio la protección de tus datos personales. 
                    Esta política explica cómo recolectamos, usamos y protegemos la información de nuestros 
                    usuarios y clientes comprometidos con la limpieza de los océanos.
                </p>

                <hr />

                <h3>1. Información que Recolectamos</h3>
                <p>Para procesar tus compras de productos sustentables, recolectamos:</p>
                <ul>
                    <li><strong>Datos de contacto:</strong> Nombre, correo electrónico y número de teléfono.</li>
                    <li><strong>Datos de envío:</strong> Dirección física para la entrega de productos.</li>
                    <li><strong>Datos de pago:</strong> Información procesada de forma segura por plataformas externas (no almacenamos tus tarjetas).</li>
                </ul>

                <h3>2. Uso de la Información</h3>
                <p>Utilizamos tus datos exclusivamente para:</p>
                <ul>
                    <li>Gestionar la logística de envío de productos fabricados con plástico recuperado.</li>
                    <li>Informarte sobre el impacto ambiental generado por tu compra.</li>
                    <li>Mejorar nuestros procesos de recolección en el Pacífico y el Golfo de México.</li>
                </ul>

                <h3>3. Transferencia de Datos</h3>
                <p>
                    Ocean Pet no vende ni alquila tu información personal. Solo compartimos datos con proveedores 
                    de logística (mensajería) necesarios para que recibas tus productos.
                </p>

                <h3>4. Tus Derechos (Derechos ARCO)</h3>
                <p>
                    Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales. 
                    Para ejercer estos derechos, puedes enviar un correo a: 
                    <a href="mailto:privacidad@oceanpet.com"> privacidad@oceanpet.com</a>.
                </p>

                <h3>5. Seguridad</h3>
                <p>
                    Implementamos certificados SSL y medidas de seguridad técnicas para garantizar que tu 
                    información esté protegida contra accesos no autorizados durante tu navegación y compra.
                </p>

                <div className="politica-footer-nota">
                    <p>
                        <em>
                            Al usar nuestro sitio, aceptas nuestras prácticas de privacidad. Gracias por ayudarnos 
                            a limpiar los mares de México.
                        </em>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PoliticaPrivacidad;