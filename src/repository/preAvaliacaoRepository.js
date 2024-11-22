import con from "./connection.js"; 

export async function inserirAvaliacao(dados) {
    const comando = `
    insert into Pre_Avaliacao (Nome, Sobrenome, Email, Telefone, Data_Consulta, Mensagem)
    values (?, ?, ?, ?, ?, ?)
    `
    let [resultado] = await con.query(comando, [dados.Nome, dados.Sobrenome, dados.Email, dados.Telefone, dados.Data_Consulta, dados.Mensagem])
    return resultado.insertId
}


export async function consultarAvaliacao() {
    const comando =  `
    SELECT Id_PreAvaliacao      ID, 
            Nome                Nome,
            Sobrenome           Sobrenome, 
            Email               Email,
            Telefone            Celular,
            Data_Consulta       Date,
            Mensagem            Text
    FROM Pre_Avaliacao;
        
    `; 
     

    console.log(comando)

    let resposta = await con.query(comando); 
    let registros = resposta[0]; 

    return registros
}

export async function alterarAvaliacao(id, avaliacao){
    const comando = `
        update Pre_Avaliacao set 
                Nome =?, 
                Sobrenome =?,
                Email = ?,
                Telefone = ?,  
                Data_Consulta = ?, 
                Mensagem = ?
        where Id_PreAvaliacao = ?
    `
    let resposta = await con.query(comando,[avaliacao.Nome, avaliacao.Sobrenome, avaliacao.Email, avaliacao.Telefone, avaliacao.Data_Consulta, avaliacao.Mensagem, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function removerAvaliacao(id){
    const comando = `
            delete from Pre_Avaliacao
            where Id_PreAvaliacao = ?
    `

    let resposta = await con.query (comando, [id]); 
    let info = resposta [0]; 

    return info.affectedRows; 
}
