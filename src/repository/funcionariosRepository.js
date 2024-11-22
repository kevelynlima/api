import con from "./connection.js"; 

export async function inserirFuncionarios(funcionario) {
    const comando = `
    insert into Funcionarios (Nome_Completo, Data_Nascimento, CPF, Telefone, Endereco, Cargo, Email, Formacao_Academica )
                    values (?, ?, ?, ?, ?, ?, ?, ?)
    
    `; 

    let resposta = await con.query (comando, [funcionario.nomeCompleto, funcionario.DataDeNascimento, funcionario.CPF, funcionario.Telefone, funcionario.Endereco, funcionario.Cargo, funcionario.Email, funcionario.formacaoAcademica])
    let info = resposta [0]; 

    return info.insertId; 
}

export async function consultarFuncionarios() {
    const comando = `
    select ID_Funcionario         ID,
        Nome_Completo           nome,
        Data_Nascimento         data,
        CPF                     identificacao,
        Telefone                numero
        Cargo                   hierarquia,
        Endereco                localizacao ,
        Email                   comunicacao,
        Formacao_Academica      text
    from Funcionarios
    `; 


    let resposta = await con.query (comando); 
    let registros = resposta [0]; 

    return registros
}

export async function alterarFuncionarios(id, funcionario){
    const comando = `
        update Funcionarios set
            Nome_Completo = ?,
            Data_Nascimento = ?,
            CPF = ?, 
            Telefone = ?, 
            Endereco = ?, 
            Cargo = ?, 
            Email = ?, 
            Formacao_Academica =?
        where ID_Funcionarios = ?
    `
    let resposta = await con.query(comando,[funcionario.nomeCompleto, funcionario.DataDeNascimento, funcionario.CPF, funcionario.Telefone, funcionario.Endereco, funcionario.Cargo, funcionario.Email, funcionario.formacaoAcademica, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function removerFuncionarios(id){
    const comando = `
            delete from Funcionarios
            where ID_Funcionarios = ?
    `

    let resposta = await con.query (comando, [id]); 
    let info = resposta [0]; 

    return info.affectedRows; 
}