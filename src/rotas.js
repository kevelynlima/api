import agendasController from  './controller/servicosController.js';
import consultasController from  './controller/consultasController.js';
import funcionariosController from  './controller/funcionariosController.js';
import historicoSaudeController from  './controller/historicoSaudeController.js';
import pacientesController from  './controller/PacientesController.js';
import pagamentosController from  './controller/pagamentosController.js';
import servicosController from  './controller/servicosController.js';
import tratamentosController from  './controller/tratamentosController.js';
import preAvaliacaoController from './controller/preAvaliacaoController.js';
import loginAdmController from './controller/loginAdmController.js';


export default function adicionarRotas (servidor){
    servidor.use (agendasController); 
    servidor.use (consultasController); 
    servidor.use (funcionariosController); 
    servidor.use (historicoSaudeController); 
    servidor.use (pacientesController); 
    servidor.use (pagamentosController); 
    servidor.use (servicosController); 
    servidor.use (tratamentosController); 
    servidor.use (preAvaliacaoController);
    servidor.use (loginAdmController);
}