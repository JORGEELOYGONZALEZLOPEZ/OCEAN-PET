import './Productos.css';
import api from "./services/api";
import { useEffect, useState } from "react";
import { useCarrito } from './CarritoContext';

// Componente para el efecto de lupa
function ImagenZoom({ src, alt }) {
    const [style, setStyle] = useState({ display: 'none', backgroundPosition: '0% 0%' });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setStyle({
            display: 'block',
            backgroundPosition: `${x}% ${y}%`,
            backgroundImage: `url(${src})`
        });
    };

    const handleMouseLeave = () => {
        setStyle({ display: 'none' });
    };

    return (
        <div className="zoom-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <img src={src} alt={alt} className="img-base" />
            <div className="zoom-overlay" style={style}></div>
        </div>
    );
}

function Productos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [busqueda, setBusqueda] = useState("");
    const { agregarAlCarrito } = useCarrito();

    const obtenerProductos = async () => {
        try {
            const response = await api.get("/productos");
            setProductos(response.data);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    // LÓGICA DE FILTRADO: Si hay búsqueda, filtramos; si no, mostramos todos.
    const productosAMostrar = productos.filter((prod) =>
        prod.nombre_producto.toLowerCase().includes(busqueda.toLowerCase()) ||
        prod.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (loading) return <p>Cargando productos de Ocean Pet...</p>;

    return (
        <div className="productos-container">
            <h1>Inventario de Productos Sustentables</h1>

            <div className="buscador-container">
                <input
                    type="text"
                    placeholder="Escribe el nombre del producto para buscar..."
                    className="input-buscador"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>

            <div className="productos-grid">
                {/* CAMBIO CLAVE: Usamos productosAMostrar en lugar de productos */}
                {productosAMostrar.length > 0 ? (
                    productosAMostrar.map((prod) => (
                        <div key={prod.id} className="producto-card">
                            <ImagenZoom src={prod.imagen_url || 'https://via.placeholder.com/150'} alt={prod.nombre_producto} />
                            <h3>{prod.nombre_producto}</h3>
                            <p>{prod.descripcion}</p>
                            <p className="precio">${prod.precio_unitario}</p>
                            <p>Stock: {prod.stock} unidades</p>
                            <button className="btn">Comprar</button>
                            <button className="btn" onClick={() => agregarAlCarrito(prod)}>AGREGAR AL CARRITO</button>
                        </div>
                    ))
                ) : (
                    <div className="no-resultados">
                        <p>No se encontró ningún producto llamado "<strong>{busqueda}</strong>"</p>
                        <button onClick={() => setBusqueda("")} className="btn-ver-todos">
                            Mostrar todos los productos
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Productos;