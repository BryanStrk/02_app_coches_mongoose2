const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyparser = require("body-parser")

 const rutaCoches = require("./routes/coche.routes")
 const rutaUsuarios = require("./routes/usuario.routes")
const rutaVentas = require("./routes/venta.routes")

// Middleware
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use("/api/coches", rutaCoches);
app.use("/api/usuarios",rutaUsuarios)
app.use("/api/ventas", rutaVentas)

// conexion a mongoose
mongoose.connect("mongodb://127.0.0.1:27017/bbdd-coches-2026")
.then(()=> console.log("Base de datos de MOngo En Marcha...."))
.catch(()=> console.log("Bbdd NOOO arrancada"))
// levantar el servicio
app.listen(3000, () => console.log("proyecto arrancado por el puerto 3000"))