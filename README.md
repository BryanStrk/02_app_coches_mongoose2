# 🚗 02_app_coches_mongoose2

API REST desarrollada con **Node.js**, **Express** y **MongoDB con Mongoose** para gestionar **coches**, **usuarios** y **ventas**.

El proyecto está organizado por capas (`routes`, `controller`, `model`) y sigue una estructura sencilla orientada al aprendizaje de APIs con Express y relaciones entre colecciones usando `ObjectId` y `populate()`.

---

## 📌 Funcionalidades

- Gestión de coches
- Gestión de usuarios
- Login de usuarios
- Registro de ventas
- Relación entre usuarios, coches y ventas
- Uso de referencias en MongoDB con Mongoose
- Uso de middleware en Express

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Nodemon**
- **Body-parser**

---

## 📂 Estructura del proyecto

```bash
02_app_coches_mongoose2
├── bbdd
│   ├── coches.js
│   └── usuarios.js
├── controller
│   ├── coche.controllers.js
│   ├── usuario.controllers.js
│   └── venta.controllers.js
├── middleware
│   └── middle.js
├── model
│   ├── coche.model.js
│   ├── usuario.models.js
│   └── venta.models.js
├── routes
│   ├── coche.routes.js
│   ├── usuario.routes.js
│   └── venta.routes.js
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
🧠 Estructura por capas
routes/

Define las rutas de la API y conecta cada endpoint con su controlador correspondiente.

controller/

Contiene la lógica de negocio de cada entidad:

consultas
inserciones
búsquedas
respuestas HTTP
model/

Define los modelos de Mongoose y la estructura de las colecciones en MongoDB.

middleware/

Contiene middleware personalizado para validaciones o lógica intermedia entre la petición y el controlador.

bbdd/

Incluye datos iniciales o arrays base usados para cargar información en la base de datos.

🗄️ Modelo de datos

El proyecto trabaja con tres entidades principales:

Usuario

Representa a las personas que usan la aplicación.

Campos habituales:

username
password
nombre
email
rol
enabled
Coche

Representa los coches disponibles en el sistema.

Campos habituales:

marca
modelo
precio
otros atributos del vehículo
Venta

Relaciona un usuario con un coche.

Campos habituales:

idUsuario
idCoche
precio

Este modelo permite trabajar con referencias y usar populate() para recuperar información relacionada.

🔗 Relación entre colecciones

La colección ventas actúa como unión entre usuarios y coches.

Ejemplo conceptual:

Coche <--- Venta ---> Usuario

Cada venta guarda referencias (ObjectId) a:

un usuario
un coche

Gracias a esto, se puede usar Mongoose con .populate() para obtener datos completos del usuario y del coche asociados a una venta.

⚙️ Instalación

Clona el repositorio:

git clone https://github.com/BryanStrk/02_app_coches_mongoose2.git
cd 02_app_coches_mongoose2

Instala las dependencias:

npm install
▶️ Ejecución del proyecto
Ejecutar con Node
node index.js
Ejecutar con Nodemon
npx nodemon index.js

O usando scripts de npm si los tienes configurados:

npm run dev
🌐 Puerto del servidor

La aplicación se ejecuta en:

http://localhost:3000
🍃 Conexión con MongoDB

La conexión a MongoDB se realiza desde index.js.

Ejemplo:

mongoose.connect("mongodb://127.0.0.1:27017/nombre_de_tu_base_de_datos")

Es importante que el nombre de la base de datos en el código coincida exactamente con la base que estás usando en MongoDB Compass.

📮 Endpoints principales
Usuarios
Login
POST /api/usuarios/login

Body JSON de ejemplo:

{
  "username": "tomas",
  "password": "tomasin"
}
Obtener usuario por id
GET /api/usuarios/:id
Carga inicial
GET /api/usuarios/cargainicial
Coches

Las rutas de coches están en:

/api/coches

Dependiendo de tu implementación, aquí puedes tener operaciones como:

listar coches
buscar coche por id
crear coche
actualizar coche
eliminar coche
Ventas

Las rutas de ventas están en:

/api/ventas

Dependiendo de tu implementación, aquí puedes tener operaciones como:

registrar venta
listar ventas
mostrar ventas con datos de usuario y coche usando populate()
🧪 Pruebas con Postman

Para probar la API puedes usar Postman o Thunder Client.

Ejemplo de login:

Método: POST
URL: http://localhost:3000/api/usuarios/login
Body: raw > JSON
{
  "username": "tomas",
  "password": "tomasin"
}
⚠️ Detalles importantes del proyecto
1. Orden de rutas

En Express, las rutas específicas deben declararse antes que las rutas dinámicas.

Ejemplo correcto:

ruta.post("/login", usuarioController.findByUsernameAndPassword)
ruta.get("/:id", usuarioController.findById)

Esto evita que /login sea interpretado como si fuera un id.

2. Validación de ObjectId

Cuando se busca por id, conviene validar antes si el valor recibido es un ObjectId válido para evitar errores de tipo CastError.

3. node_modules no debe subirse a Git

El proyecto incluye .gitignore para evitar subir dependencias innecesarias al repositorio.

📘 Objetivo académico

Este proyecto ha sido desarrollado como práctica de aprendizaje para trabajar:

APIs REST con Express
conexión con MongoDB
modelado con Mongoose
relaciones entre documentos
uso de middleware
organización del proyecto por capas
👨‍💻 Autor

Bryan Paico Albines

Proyecto realizado dentro del ciclo de Desarrollo de Aplicaciones Web (DAW).
