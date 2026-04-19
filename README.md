OCEAN-PET
Documentación de Proyecto Full-Stack
🚀 Proyecto OCEAN-PET + ViteEste es un proyecto Full-Stack moderno diseñado para gestionar la recuperación de plástico en el Océano Pacífico y el Golfo de México, transformando materiales recuperados en productos tecnológicos y sostenibles.
📋 DescripciónEste repositorio funciona como una plataforma integral que conecta la recolección de residuos marinos con una interfaz de comercio electrónico. Cubre desde la gestión de inventario en base de datos hasta la navegación fluida de un catálogo dinámico.
🛠️ Stack TecnológicoEl proyecto utiliza un ecosistema Full-Stack JavaScript de alto rendimiento:Frontend: React.js con arquitectura de componentes funcionales y Hooks.Backend: Node.js y Express.js para la construcción de una API REST.Base de Datos: MySQL gestionado mediante el ORM Sequelize.Seguridad: dotenv para la protección de llaves sensibles.
📊 Estructura y Lógica de NegocioEl sistema implementa una arquitectura modular para separar la lógica de datos de la interfaz:Base de Datos (Modelos)EntidadPropósitoProductosGestión de inventario reciclado: nombre, precio, stock y descripción técnica.UsuariosControl de perfiles para clientes y administración de roles.Carrito / ÓrdenesGestión de transacciones y vinculación de pedidos.
💻 Arquitectura de InterfazLa interfaz se basa en la reutilización de componentes para un mantenimiento eficiente:Nuestro Catálogo Tecnológico: Módulo dinámico que consume la API del backend.Gestión de Carrito: Lógica para modificar cantidades y calcular totales.Vistas Dinámicas: Navegación SPA mediante la función cambiarVista.
🌐 Integraciones y SeguridadOpenWeather API: Implementación de datos climáticos para monitorear zonas de recolección.GitHub Push Protection: Reglas activas para prevenir la exposición de llaves API.Control de Versiones: Uso estricto de .gitignore.
🛠️ Requisitos PreviosAsegúrate de tener instalado Node.js y npm. Verifica con:Bashnode -v
Bashnpm -v
Configurar entorno:Crea un archivo .env con tus credenciales de MySQL y tu clave de OpenWeather.Iniciar proyecto:Bashnpm start
