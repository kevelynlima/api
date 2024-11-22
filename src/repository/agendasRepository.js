import con from './connection.js'; 

export async function inserirInf (informacoes) {
    const comando = `
    insert into Agendas (Data, Hora_Inicial, Hora_Final, Observacoes)
                        values (?, ?, ?, ?) 
    `; 

    let resposta = await con.query (comando, [informacoes.data, informacoes.horaInicial, informacoes.horaFinal, informacoes.observacoes])
    let info = resposta [0]; 

    return info.inserId; 
}

export async function consultarAgenda(){
    const comando = `
        select ID_Agenda                   ID, 
        ID_Funcionario                     ID,
        Data                               Data,
        Hora_Inicial                       Horario,
        Hora_Final                         Horario,
        Obervacoes                         Text,
        from Agendas
    `;

    let resposta = await con.query (comando);
    let registros = resposta [0];

    return registros

}

export async function alterarInf(id, informacoes){
    const comando = `
    update Agendas set
            Data = ?,
            Hora_Inicial = ?, 
            Hora_Final = ?, 
            Observacoes = ?
        where ID_Agenda = ?;    
    
`
    let resposta = await con.query ((comando), [informacoes.data, informacoes.horaInicial, informacoes.horaFinal, informacoes.observacoes, id])
    let info = resposta [0];

    return info.affectedRows;
}


export async function removeragendas (id){
    const comando =   `
    delete from Agendas
    where ID_Agenda = ? 

`

    let resposta = await con.query(comando, [id]); 
    let info = resposta[0]; 

    return info.affectedRows; 
}

