import * as db from "../repository/agendasRepository.js"; 

import { Router } from "express";
const endpoints = Router ();

endpoints.get ('/Agenda/', async (req, resp) => {
    try {
        let registros = await db.consultarAgenda (); 
        resp.send (registros);
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('Agenda/', async (req, resp) => {
    try {
        let informacao = req.body; 

        let id= await db.inserirInf (informacao);

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


endpoints.put ('/Agenda/: id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let pessoa = req.body; 

        let linhasAfetadas = await db.alterarInf(id, informacao);
        if(linhasAfetadas >= 1){
            resp.send ();
        }
        else {
            resp.status (404).send({erro: 'Nenhuma informação foi inserida com esses dados '})
        }
    }
    catch (err){
        req.status(400).send ({
            erro: err.message
        })
    }
})

endpoints.delete ('Agenda/:id', async (req, resp) => {
    try{
        let id= req.params.id;

        let linhasAfetadas = await db.removerDaAgenda(id); 
        if(linhasAfetadas >= 1){
            resp.send (); 
        }
        else {
           resp.status (404).send ({erro: 'Essa informação não existe mais'})
        }
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
}) 


export default endpoints; 