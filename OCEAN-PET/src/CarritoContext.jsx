import { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [elementos, setElementos] = useState([]);

    // ... dentro de tu CarritoProvider
    const agregarAlCarrito = (producto) => {
        setElementos((prev) => {
            const existe = prev.find(item => item.id === producto.id);
            
            // Si llegamos aquí, es porque la lógica de React se ejecutó
            if (existe) {
                alert(`¡Se añadió otra unidad de: ${producto.nombre_producto}!`);
                return prev.map(item => 
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            } else {
                alert(`¡Producto agregado: ${producto.nombre_producto}!`);
                return [...prev, { ...producto, cantidad: 1 }];
            }
        });
    };

    return (
        <CarritoContext.Provider value={{ elementos, agregarAlCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => useContext(CarritoContext);