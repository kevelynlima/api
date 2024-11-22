import * as db from "../repository/preAvaliacaoRepository.js"; 

import { Router } from "express";
const endpoints = Router ();

endpoints.get('/PreAvaliacao/', async (req, resp) => {
    try {
        let dados = await db.consultarAvaliacao(); 
        resp.send(dados);
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})

endpoints.post('/PreAvaliacao/', async (req, resp) => {
    try {
        let dados = req.body
        let resultadoID = await db.inserirAvaliacao(dados); 

        resp.send({
            id: resultadoID
        });
    }
    catch (err) {
        resp.status(400).send ({
            erro: err.message
        })
    }
})


endpoints.put('/PreAvaliacao/: id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let dominio = req.body; 

        let linhasAfetadas = await db.alterarAvaliacao(id, dominio);
        if(linhasAfetadas >= 1){
            resp.send ();
        }
        else {
            resp.status (404).send({erro: 'Nenhuma informação foi inserida com esses dados'})
        }
    }
    catch (err){
        req.status(400).send ({
            erro: err.message
        })
    }
})

endpoints.delete('PreAvaliacao/:id', async (req, resp) => {
    try{
        let id= req.params.id;

        let linhasAfetadas = await db.removerAvaliacao(id); 
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
