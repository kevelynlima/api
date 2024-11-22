import * as db from '../repository/historicoSaudeRepository.js';

import { Router } from 'express';
const endpoints = Router (); 

endpoints.get ('/Antecedentes', async (req, resp) => {
    try {
        let registros = await db.consultarHistorico();
        resp.send (registros); 
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('/Antecedentes/', async (req, resp) => {
    try {
        let prontuario = req.body; 

        let id = await db.inserirHistorico(prontuario); 

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


endpoints.put ('/Antecedentes/: id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let prontuario = req.body; 

        let linhasAfetadas = await db.alterarHistorico(id, prontuario); 
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


endpoints.delete ('/Antecedentes/:id', async (req, resp) => {
    try {
        let id = req.params.id; 

        let linhasAfetadas = await db.removerHistorico(id);
        if (linhasAfetadas >= 1) {
            resp.send ();
        }
        else {
            resp.status (404).send ({erro: 'Este paciente não faz mais parte do nosso quadro'})
        }
    }
    catch (err) {
        resp.status (400).send({
            erro: err.message
        })
    }
})


export default endpoints; 
