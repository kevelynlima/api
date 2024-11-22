import * as db from '../repository/tratamentosRepository.js';

import { Router } from 'express';
const endpoints = Router (); 

endpoints.get ('/tratamentos', async (req, resp) => {
    try {
        let registros = await db.consultartratamentos ();
        resp.send (registros); 
    }
    catch (err){
        resp.status (400).send ({
            erro: err.message
        })
    }
})

endpoints.post ('/tratamentos/', async (req, resp) => {
    try {
        let pessoa = req.body; 

        let id = await db.inserirconsulta (tratamento); 

        resp.send ({
            novoId: id
        })
    }
    catch(err){
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.put ('/tratamentos/:id', async (req, resp) =>{
    try {
        let id = req.params.id;
        let pessoa = req.body;

        let linhasAfetadas = await db.alterarconsulta (id, tratamento);
        if (linhasAfetadas >=1){
            resp.send ();
        }
        else{
            resp.status(404).send({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err){
        req.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete ('tratamentos/:id', async (req, resp) =>{
    try {
        let id = req.params.id; 

        let linhasAfetadas = await db.removerconsultas (id);
        if (linhasAfetadas >= 1){
            resp.send ();
        }
        else{
            resp.status (404).send ({erro: 'Nenhum registro encontrado'})
        }
    }
    catch (err){
        resp.status (404).send({
            erro: err.message
        })
    }
})



export default endpoints; 