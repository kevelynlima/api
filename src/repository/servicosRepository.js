import con from "./connection.js"; 

export async function inserirServicos(prestimo) {
    const comando = `
    insert into Pacientes (Nome_Servico, Nome_Completo, Descricao_Servico , Data_Horario, Tempo_Duracao)
                    values (?, ?, ?, ?, ?)
    
    `; 


    let resposta = await con.query (comando, [prestimo.NomeServico, prestimo.NomeCompleto, prestimo.DescricaoServico , prestimo.DataHorario, prestimo.TempoDuracao])
    let info = resposta [0]; 

    return info.insertId; 
}

export async function consultarServicos() {
    const comando = `
    select ID_Servicos                         ID,
           ID_Paciente                         ID,
           Nome_Servico                        descricao,
           Nome_Completo                       nome,
           Descricao_Servico                   text,
           Data_Horario                        date_time,
           Tempo_Duracao                       tempo
    from ServicosSaude
    `; 
     

    let resposta = await con.query (comando); 
    let registros = resposta [0]; 

    return registros
}

export async function alterarServicos(id, prestimo){
    const comando = `
    update Servicos set
            ID_Servicos = ?,         
            ID_Paciente = ?,        
            Nome_Servico = ?,        
            Nome_Completo ?,          
            Descricao_Servico = ?, 
            Data_Horario  = ?,
            Tempo_Duracao  = ? 
    where ID_Servicos = ?
`
    let resposta = await con.query(comando,[prestimo.dataDeRegistro, prestimo.descricaoDoProblema, prestimo.TratamentosAnteriores, prestimo.MedicamentosDeUso, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function removerServicos(id){
    const comando = `
            delete from Servicos
            where ID_Servicos = ?
    `

    let resposta = await con.query (comando, [id]); 
    let info = resposta [0]; 

    return info.affectedRows; 
}