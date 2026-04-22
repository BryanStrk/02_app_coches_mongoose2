
# 🚗 API de Gestión de Coches con Node.js, Express y MongoDB

API REST desarrollada con **Node.js**, **Express** y **MongoDB (Mongoose)** para la gestión de coches, usuarios y ventas.

Este proyecto permite realizar operaciones CRUD, autenticación de usuarios y gestión básica de ventas.

---

## 📦 Tecnologías utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* Nodemon

---

## 📁 Estructura del proyecto

```bash
├── controller/
│   ├── usuario.controllers.js
│   ├── coche.controllers.js
│   └── venta.controllers.js
├── model/
│   ├── usuario.models.js
│   ├── coche.models.js
│   └── venta.models.js
├── routes/
│   ├── usuario.routes.js
│   ├── coche.routes.js
│   └── venta.routes.js
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/BryanStrk/02_app_coches_mongoose2.git
cd 02_app_coches_mongoose2
```

2. Instalar dependencias:

```bash
npm install
```

---

## 🚀 Ejecución del proyecto

### Modo normal

```bash
npm start
```

### Modo desarrollo (con nodemon)

```bash
npm run dev
```

---

## 🗄️ Base de datos

El proyecto utiliza MongoDB local.

Por defecto:

```bash
mongodb://127.0.0.1:27017/bbdd-coches-2026
```

⚠️ Asegúrate de que MongoDB esté corriendo antes de iniciar el servidor.

---

## 🔐 Endpoints principales

### 👤 Usuarios

| Método | Endpoint                     | Descripción            |
| ------ | ---------------------------- | ---------------------- |
| POST   | `/api/usuarios/login`        | Login de usuario       |
| GET    | `/api/usuarios/:id`          | Obtener usuario por ID |
| GET    | `/api/usuarios/cargainicial` | Carga inicial de datos |

---

### 🚗 Coches

| Método | Endpoint          | Descripción          |
| ------ | ----------------- | -------------------- |
| GET    | `/api/coches`     | Listar coches        |
| POST   | `/api/coches`     | Crear coche          |
| GET    | `/api/coches/:id` | Obtener coche por ID |
| PUT    | `/api/coches/:id` | Actualizar coche     |
| DELETE | `/api/coches/:id` | Eliminar coche       |

---

### 💰 Ventas

| Método | Endpoint      | Descripción     |
| ------ | ------------- | --------------- |
| GET    | `/api/ventas` | Listar ventas   |
| POST   | `/api/ventas` | Registrar venta |

---

## 📌 Ejemplo de Login (Postman)

```http
POST http://localhost:3000/api/usuarios/login
```

```json
{
  "username": "tomas",
  "password": "tomasin"
}
```

---

## ⚠️ Notas importantes

* El orden de las rutas es importante (ej: `/login` antes que `/:id`)
* `node_modules` está excluido mediante `.gitignore`
* Se recomienda validar IDs antes de consultas con Mongoose

---

## 🧪 Estado del proyecto

✔️ Funcional
✔️ CRUD básico implementado
✔️ Conexión a MongoDB operativa
✔️ Sistema de login básico

---

## 👨‍💻 Autor

**Bryan**

Proyecto realizado como parte del ciclo de **Desarrollo de Aplicaciones Web (DAW)**.

---

## 📄 Licencia

Este proyecto es de uso educativo.

---

## 🔥 (Opcional – si quieres subir nivel)

Si quieres dejarlo aún más pro, puedes añadir:

* JWT para autenticación
* Validaciones con Joi o express-validator
* Variables de entorno (`.env`)
* Docker

---
