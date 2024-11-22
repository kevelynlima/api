import * as db from '../repository/pagamentosRepository.js';

import { Router } from 'express';
const endpoints = Router (); 

endpoints.get ('/pagamentos', async (req, resp) => {
    try {
        let lancamento = await db.consultarPagamento();
        resp.send (lancamento); 
    }
    catch (err) {
        resp.status (400).send ({
            erro: err.message
        })
    }
})


endpoints.post ('/pagamentos/', async (req, resp) => {
    try {
        let pagamento = req.body; 

        let id = await db.inserirPagamento(pagamento); 

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


endpoints.put ('/pagamentos/: id', async (req, resp) => {
    try {
        let id = req.params.id; 
        let pagamento = req.body; 

        let linhasAfetadas = await db.alterarFormaDePagamento(id, pagamento); 
        if(linhasAfetadas >= 1){
            resp.send ();
        }
        else {
            resp.status(404).send({erro: 'Essa forma de pagamento não se encontra disponivel'})
        }
    }
    catch (err){
        req.status(400).send({
            erro: err.message
        })
    }
})


endpoints.delete ('/pagamentos/:id', async (req, resp) => {
    try {
        let id = req.params.id; 

        let linhasAfetadas = await db.devendoPagamento(id);
        if (linhasAfetadas >= 1) {
            resp.send ();
        }
        else {
            resp.status (404).send ({erro: 'Nenhum registro encontrado, seu pagamento se encontra pendente'})
        }
    }
    catch (err) {
        resp.status (400).send({
            erro: err.message
        })
    }
})




export default endpoints; 
