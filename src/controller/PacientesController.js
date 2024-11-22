import * as db from '../repository/pacientesRepository.js'

import { Router } from 'express';
const endpoints = Router (); 

endpoints.get ('/Pacientes', async (req, resp) => {
    try {
        let registros = await db.consultarPacientes ();
        resp.send (registros); 
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('/Pacientes/', async (req, resp) => {
    try {
        let pessoa = req.body; 

        let id = await db.inserirPacientes (pessoa); 

        resp.send({
            novoId: id 
        })
    }
    catch (err){
        resp.status (400).send ({
            erro:err.message
        })
    }
})


endpoints.put ('/Pacientes/: id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let pessoa = req.body; 

        let linhasAfetadas = await db.alterarPacientes(id, pessoa); 
        if(linhasAfetadas >= 1){
            resp.send ();
        }
        else {
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err){
        req.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete ('/Pacientes/:id', async (req, resp) => {
    try {
        let id = req.params.id; 

        let linhasAfetadas = await db.removerPacientes (id);
        if (linhasAfetadas >= 1) {
            resp.send ();
        }
        else {
            resp.status (404).send ({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err) {
        resp.status (400).send({
            erro: err.message
        })
    }
})




export default endpoints; 
