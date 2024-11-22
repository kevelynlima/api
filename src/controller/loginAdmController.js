
import { gerarToken } from '../utils/jwt.js';

import * as db from '../repository/loginAdmRepository.js';

import { Router } from "express";
const endpoints = Router();


endpoints.post('/entrar/', async (req, resp) => {
    try {
        let Login = req.body;

        let usuario = await db.validarUsuario(Login);

        if (usuario == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" })
        } else {
            let token = gerarToken(usuario);
            resp.send({
                "token": token
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})





export default endpoints;