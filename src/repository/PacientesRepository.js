import con from "./connection.js"; 

export async function inserirPacientes(pessoa) {
    const comando = `
    insert into Pacientes (Nome_Completo, Data_Nascimento, CPF, Telefone, Endereco, Email, Informacao_Saude)
                        values (?, ?, ?, ?, ?, ?, ?)
    
    `; 

    let resposta = await con.query (comando, [pessoa.nomeCompleto, pessoa.Nascimento, pessoa.CPF, pessoa.Telefone, pessoa.Endereco, pessoa.Email, pessoa.InformacaoSaude])
    let info = resposta [0]; 

    return info.insertId; 
}

export async function consultarPacientes() {
    const comando = `
    select ID_Paciente          ID,
        Nome_Completo           nome,
        Data_Nascimento         data,
        CPF                     identificacao,
        Telefone                numero,
        Endereco                localizacao ,
        Email                   comunicacao,
        Informacao_Saude        informacoes
    from Pacientes
    `; 

    let resposta = await con.query (comando); 
    let registros = resposta [0]; 

    return registros
}

export async function alterarPacientes(id, pessoa){
    const comando = `
        update Pacientes 
             set Nome_Completo = ?, 
             Data_Nascimento = ?, 
             CPF = ?, 
             Telefone = ?,
             Endereco = ?, 
             Email = ?, 
             Informacao_Saude = ?
        where ID_Paciente = ?
    `
    let resposta = await con.query(comando,[pessoa.nomeCompleto, pessoa.Nascimento, pessoa.CPF, pessoa.Telefone, pessoa.Endereco, pessoa.Email, pessoa.InformacaoSaude, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function removerPacientes(id){
    const comando = `
            delete from Pacientes
            where ID_Paciente = ?
    `

    let resposta = await con.query (comando, [id]); 
    let info = resposta [0]; 

    return info.affectedRows; 
}