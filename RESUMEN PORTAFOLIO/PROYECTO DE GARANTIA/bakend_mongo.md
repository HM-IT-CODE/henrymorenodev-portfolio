# backendFormEx_mongo

Proyecto backend desarrollado en Node.js para la gestión de formularios y recolección de datos, utilizando MongoDB y MSSQL como bases de datos principales.

## Tecnologías principales

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para la creación de APIs REST.
- **MongoDB**: Base de datos NoSQL para almacenamiento de datos.
- **MSSQL**: Soporte para conexión y consultas a bases de datos SQL Server.
- **Prisma**: ORM para la gestión de bases de datos relacionales y MongoDB.

## Librerías utilizadas

- `@prisma/client` y `prisma`: ORM para bases de datos.
- `bcryptjs`: Encriptación de contraseñas.
- `cookie-parser`: Parseo de cookies HTTP.
- `cors`: Configuración de CORS para la API.
- `dotenv`: Manejo de variables de entorno.
- `express`: Framework principal del servidor.
- `jsonwebtoken`: Autenticación basada en tokens JWT.
- `mongoose`: ODM para MongoDB.
- `morgan`: Logger de peticiones HTTP.
- `mssql`: Conexión y consultas a SQL Server.
- `nodemailer`: Envío de correos electrónicos.
- `nodemon`: Herramienta para desarrollo, reinicio automático del servidor.

## Estructura del proyecto

- `/src`: Código fuente principal.
  - `/controllers`: Lógica de negocio y controladores de rutas.
  - `/database`: Configuración y conexión a bases de datos.
  - `/mailconfig`: Configuración para envío de correos.
  - `/middlewares`: Middlewares personalizados.
  - `/models`: Modelos de datos.
  - `/routes`: Definición de rutas de la API.
  - `/utils`: Utilidades y helpers.

## Scripts útiles

- `npm run dev`: Inicia el servidor en modo desarrollo con nodemon.
- `npm run prod`: Inicia el servidor en modo producción.

---
