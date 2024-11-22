import con from "./connection.js"; 

export async function inserirHistoricoSaude(historico) {
    const comando = `
    insert into Historico_Saude (Data_Registro, Descricao_Problema, Tratamentos_Anteriores, Medicamentos_uso )
                        values (?, ?, ?, ?)
    
    `; 


    let resposta = await con.query (comando, [historico.dataDeRegistro, historico.descricaoDoProblema, historico.TratamentosAnteriores, historico.MedicamentosUso])
    let info = resposta [0]; 

    return info.insertId; 
}

export async function consultarHistoricoSaude() {
    const comando =  `
    select ID_Historico_Saude         ID,
           ID_Paciente           ID
           Data_Registro          data,
           Descricao_Problema      TEXT,
           Tratamentos_Anteriores   TEXT, 
           Medicamentos_uso          DESCRICAO
    from HistoricoSaude
        
    `; 
     

    let resposta = await con.query (comando); 
    let registros = resposta [0]; 

    return registros
}

export async function alterarHistoricoSaude(id, historico){
    const comando = `
        update HistoricoSaude 
             set Data_Registro = ?, 
             Descricao_Problema = ?, 
             Tratamentos_Anteriores = ?, 
             Medicamentos_uso = ?,
    `
    let resposta = await con.query(comando,[historico.dataDeRegistro, historico.descricaoDoProblema, historico.TratamentosAnteriores, historico.MedicamentosDeUso, id, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function removerHistoricoSaude(id){
    const comando = `
            delete from historicoSaude
            where ID_Historico_Saude = ?
    `

    let resposta = await con.query (comando, [id]); 
    let info = resposta [0]; 

    return info.affectedRows; 
}