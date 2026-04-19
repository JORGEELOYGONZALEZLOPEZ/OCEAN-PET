import { useCarrito } from './CarritoContext';
import './Carrito.css'; // Vamos a crear este archivo ahora

function Carrito() {
    const { elementos, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } = useCarrito();

    // Cálculo del total general
    const totalCompra = elementos.reduce((acc, item) => acc + (item.precio_unitario * item.cantidad), 0);

    if (elementos.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2>Tu carrito está vacío 🌊</h2>
                <p>Parece que aún no has rescatado ningún producto del océano.</p>
            </div>
        );
    }

    return (
        <div className="carrito-container">
            <h1>Tu Carrito de Compras</h1>
            
            <div className="carrito-contenido">
                {/* Sección de productos */}
                <div className="carrito-lista">
                    {elementos.map((item) => (
                        <div key={item.id} className="carrito-card">
                            <img src={item.imagen_url} alt={item.nombre_producto} />
                            <div className="carrito-detalles">
                                <h3>{item.nombre_producto}</h3>
                                <p className="precio-unitario">Precio: ${item.precio_unitario}</p>
                                <div className="cantidad-controles">
                                    <span>Cantidad: <strong>{item.cantidad}</strong></span>
                                </div>
                            </div>
                            <div className="carrito-subtotal">
                                <p>${(item.precio_unitario * item.cantidad).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Resumen de Compra (Lateral) */}
                <div className="carrito-resumen">
                    <h3>Resumen de pedido</h3>
                    <div className="resumen-fila">
                        <span>Subtotal</span>
                        <span>${totalCompra.toFixed(2)}</span>
                    </div>
                    <div className="resumen-fila">
                        <span>Envío Eco-Friendly</span>
                        <span className="gratis">GRATIS</span>
                    </div>
                    <hr />
                    <div className="resumen-total">
                        <span>Total</span>
                        <span>${totalCompra.toFixed(2)}</span>
                    </div>
                    <button className="btn-finalizar">FINALIZAR COMPRA</button>
                    <button onClick={limpiarCarrito} className="btn-vaciar">Vaciar Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Carrito;