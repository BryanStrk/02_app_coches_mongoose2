const express = require("express");
const ruta = express.Router();
const usuarioController = require("../controller/usuario.controllers")


ruta.get("/cargainicial",usuarioController.cargaInicial )
ruta.post("/login", usuarioController.findByUsernameAndPassword)
ruta.get("/:id", usuarioController.findById)


module.exports = ruta;

