import * as db from '../repository/servicosRepository.js';
import { Router } from 'express';
const endpoints = Router (); 

endpoints.get ('/servicos', async (req, resp) => {
    try {
        let registros = await db.consultarServicos();
        resp.send (registros); 
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('/servicos/', async (req, resp) => {
    try {
        let prestimo = req.body; 

        let id = await db.inserirServico(prestimo); 

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


endpoints.put ('/servicos/: id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let prestimo = req.body; 

        let linhasAfetadas = await db.alterarServico(id, prestimo); 
        if(linhasAfetadas >= 1){
            resp.send ();
        }
        else {
            resp.status(404).send({erro: 'Nenhum serviço atribuido'})
        }
    }
    catch (err){
        req.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete ('/servicos/:id', async (req, resp) => {
    try {
        let id = req.params.id; 

        let linhasAfetadas = await db.removerServico(id);
        if (linhasAfetadas >= 1) {
            resp.send ();
        }
        else {
            resp.status (404).send ({erro: 'Este serviço não realizamos mais'})
        }
    }
    catch (err) {
        resp.status (400).send({
            erro: err.message
        })
    }
})


export default endpoints; 
