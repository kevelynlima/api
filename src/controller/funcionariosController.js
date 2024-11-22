import * as db from '../repository/funcionariosRepository.js';

import { Router } from 'express';
const endpoints = Router (); 

endpoints.get ('/Funcionarios', async (req, resp) => {
    try {
        let registros = await db.consultarFuncionarios ();
        resp.send (registros); 
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('/Funcionarios/', async (req, resp) => {
    try {
        let pessoa = req.body; 

        let id = await db.inserirFuncionarios(pessoa); 

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



endpoints.delete ('/Funcionarios/:id', async (req, resp) => {
    try {
        let id = req.params.id; 

        let linhasAfetadas = await db.removerFuncionarios(id);
        if (linhasAfetadas >= 1) {
            resp.send ();
        }
        else {
            resp.status (404).send ({erro: 'Este funcionario não faz mais parte dos nossos colaboradores'})
        }
    }
    catch (err) {
        resp.status (400).send({
            erro: err.message
        })
    }
})




export default endpoints; 

