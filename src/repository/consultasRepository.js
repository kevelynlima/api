import con from './connection.js'; 

export async function inserirConsultas (consultas) {
    const comando = `
    insert into Consultas (Nome_Completo, Hora_Consulta, Telefone, Data_Consulta, Servicos)
                        values (?, ?, ?, ?, ?) 
    `; 

    let resposta = await con.query (comando, [consultas.Nome_Completo, consultas.Hora_Consulta, consultas.Telefone, consultas.Data_Consulta, consultas.Servicos])
    let info = resposta [0]; 

    return info.inserId; 
}


export async function consultarConsultas(){
    const comando = `
    select  ID_Consulta              id,
            Nome_Completo            nome,
            Hora_Consulta            time,
            Telefone                 telefone,
            Data_Consulta            date,
            Servicos                 tipos
        from Consultas
    `;

    let resposta = await con.query (comando);
    let registros = resposta [0];

    return registros

}

export async function alterarConsultas(id, consultas){
    const comando = `
    update Consultas 
       set   ID_Consulta    = ?,         
            Nome_Completo   = ?,       
            Hora_Consulta   = ?,                  
            Telefone        = ?,
            Data_Consulta   =?,  
            Servicos        = ?    
where ID_Consulta           = ?;
`
    let resposta = await con.query ((comando), [consultas.Nome_Completo,consultas.Hora_Consulta, consultas.Telefone,consultas.Data_Consulta, consultas.Servicos, id])
    let info = resposta [0];

    return info.affectedRows;
}


export async function removerConsultas (id){
    const comando = `
    delete from Consultas
    whwre ID_Consulta = ? 
`

    let resposta = await con.query(comando, [id]); 
    let info = resposta[0]; 

    return info.affectedRows; 
}

