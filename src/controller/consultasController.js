import * as db from "../repository/consultasRepository.js"; 

import { Router } from "express";
const endpoints = Router ();

endpoints.get ('/Consultas', async (req, resp) => {
    try {
        let registros = await db.consultarConsultas(); 
        resp.send (registros);
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('/Consultas/', async (req, resp) => {
    try {
        let consultas = req.body; 

        let id = await db.inserirConsultas(consultas);

        resp.send ({
            novoId: id
        })
    }
    catch (err){
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.put ('/Consultas/: id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let pessoa = req.body; 

        let linhasAfetadas = await db.alterarConsultas(id, consulta);
        if(linhasAfetadas >= 1){
            resp.send ();
        }
        else {
            resp.status (404).send({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err){
        req.status(400).send ({
            erro: err.message
        })
    }
})

endpoints.delete ('Consultas/:id', async (req, resp) => {
    try{
        let id= req.params.id;

        let linhasAfetadas = await db.removerConsultas (id); 
        if(linhasAfetadas >= 1){
            resp.send (); 
        }
        else {
           resp.status (404).send ({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
}) 


export default endpoints; 