
API REST de concesionario con Node.js, Express y MongoDB (Mongoose) para gestionar coches, 
usuarios y ventas, incluyendo carga inicial de datos, filtros y relaciones con populate.

CRUD de coches:

Login básico de usuario

Registro de ventas (marca coche como vendido)

Consultar venta por id con populate (usuario y coche)

Tecnologías:

Node.js // Express // MongoDB + Mongoose // Nodemon (dev)

Estructura del proyecto:

index.js → arranque del servidor + conexión Mongo + rutas

routes/ → endpoints

controller/ → lógica de negocio

model/ → esquemas Mongoose (Coche, Usuario, Venta)

bbdd/ → datos semilla para carga inicial

Cómo ejecutar:

npm install``````

Arrancar MongoDB local:

node index.js 

Conexión: 

mongodb://127.0.0.1:27017/bbdd-coches_2026_Unir_daw

ideal pasarlo a .env.

Endpoints

Coches

GET /api/coches/cargainicial → carga coches desde bbdd/coches.js

GET /api/coches → lista todos

GET /api/coches/precio-mayor/:precio → filtra por precio

GET /api/coches/marca/:marca → filtra por marca

POST /api/coches → crea coche

PUT /api/coches/:id → actualiza

DELETE /api/coches/:id → elimina

Usuarios

GET /api/usuarios/cargainicial → carga usuarios desde bbdd/usuarios.js

POST /api/usuarios/login → login por username/password

GET /api/usuarios/:id → buscar por id

Ventas

POST /api/ventas → registra venta

GET /api/ventas/:id → detalle con populate

Ejemplos de uso

crear coche - login - registrar - venta

Mejoras futuras:

Guardar MONGO_URI en .env

Añadir scripts start/dev en package.json

Validaciones y manejo de errores más consistente

Autenticación real (JWT + hash de password con bcrypt)

Middleware de roles (ADMON/CLIENTE/DIRECTOR)

Tests (Jest/Supertest)

