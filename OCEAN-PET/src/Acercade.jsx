import React from 'react';
import './AcercaDe.css';

function Acercade() {
    return (
        <div className="acerca-pantalla">
            {/* 1. Header Principal */}
            <header className="acerca-hero">
                <span className="tag-pro">OCEAN-PET</span>
                <h1 className="titulo-principal">Inspirados por el <span className="resalte">Pacífico</span></h1>
                <p className="subtitulo">Transformamos el residuo plástico en soluciones de diseño para un futuro circular en México.</p>
            </header>

            {/* 2. Grid de Valores (Efecto Cristal) */}
            <section className="contenedor-grid">
                <div className="tarjeta-formal">
                    <div className="icon-box">♻️</div>
                    <h3>Economía Circular</h3>
                    <p>No solo limpiamos; creamos un ciclo donde el material recuperado nunca vuelve al mar.</p>
                </div>

                <div className="tarjeta-formal">
                    <div className="icon-box">📍</div>
                    <h3>Impacto Local</h3>
                    <p>Operamos directamente en las costas del Pacífico y el Golfo de México, apoyando comunidades.</p>
                </div>

                <div className="tarjeta-formal">
                    <div className="icon-box">🛡️</div>
                    <h3>Calidad Certificada</h3>
                    <p>Cada producto OCEAN-PET cumple con estándares industriales de resistencia y durabilidad.</p>
                </div>
            </section>

            {/* 3. Footer de Estadísticas */}
            <footer className="stats-bar">
                <div className="stat">
                    <h4>+50T</h4>
                    <span>Plástico Recuperado</span>
                </div>
                <div className="stat">
                    <h4>100%</h4>
                    <span>Hecho en México</span>
                </div>
                <div className="stat">
                    <h4>2026</h4>
                    <span>Meta Residuo Cero</span>
                </div>
            </footer>
        </div>
    );
}

export default Acercade;