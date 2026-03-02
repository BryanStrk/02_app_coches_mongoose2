const express = require("express");
const ruta = express.Router();
const Usuario = require("../model/usuario.models")
const usuarios = require("../bbdd/usuarios")

class UsuarioController {

    async cargaInicial (req, res){
        await Usuario.insertMany(usuarios)
        return res.status(201).send("Carga de usuarios completada")
    }

    async findByUsernameAndPassword(req, res) {
       const result =  await Usuario.findOne({username: req.body.username, password:req.body.password});
        if (!result)
            return res.status(404).send("Usuario o password incorrecto");

        return res.status(200).send(result);

    }

    async registrarUsuario(req, res) {

    }

    async findById(req, res) {

        const result =  await Usuario.findById(req.params.id);
        if (!result)
            return res.status(404).send("No existe este usuario");

        return res.status(200).send(result);




    }


}


module.exports = new UsuarioController();