import './Usuarios.css'
import api from "./services/api";
import cargando from './assets/loading.gif';
import { useEffect, useState } from "react";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

    const obtenerUsuarios = async () => {
        try {
            // Ajustamos la ruta a '/usuarios' que es la que tienes en tu Node
            const response = await api.get("/usuarios"); 
            setUsuarios(response.data); 
        } catch (error) {
            console.error("Error al obtener usuarios: ", error);
        } finally {
            setLoading(false);
        }
    };

    const removeUsuario = async (usuarioId) => {
        if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;
        
        try {
            // Ajustamos la ruta para eliminar
            await api.delete(`/usuarios/${usuarioId}`);
            alert('¡Usuario eliminado con éxito!');
            obtenerUsuarios(); // Recargamos la lista
        } catch (error) {
            console.error("Error al eliminar:", error);
            alert("No se pudo eliminar el usuario");
        }
    };

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    if (loading) return <p className='loading'><img src={cargando} alt="loading" /></p>;

    return (
        <div style={{ padding: "20px" }}>
            <h1>Lista de Usuarios Ocean Pet</h1>
            <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#f4f4f4" }}>
                        <th>ID</th>
                        <th>Nombre Completo</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.length > 0 ? (
                        usuarios.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                {/* Ajustado para usar tus campos de base de datos */}
                                <td>{`${user.nombre} ${user.apellidoP} ${user.apellidoM}`}</td>
                                <td>{user.email}</td>
                                <td>{user.rol}</td>
                                <td style={{ textAlign: "center" }}>
                                    <button onClick={() => setUsuarioSeleccionado(user)}>📝 Editar</button>
                                    <button 
                                        onClick={() => removeUsuario(user.id)} 
                                        style={{ marginLeft: "10px", color: "red" }}
                                    >
                                        🗑️ Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>No hay usuarios registrados.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;