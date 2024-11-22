import con from "./connection.js"; 

export async function inserirPagamento(pagamento) {
    const comando = `
    insert into Pagamento (Valor, Forma_Pagamento, Data_Pagamento, Status)
                        values (?, ?, ?, ?)
    
    `; 

    let resposta = await con.query (comando, [pagamento.Valor, pagamento.Forma_Pagamento, pagamento.Data_Pagamento, pagamento.Status])
    let info = resposta [0]; 

    return info.insertId; 
}

export async function consultarPagamento() {
    const comando = `
    select ID_Pagamento         ID,
        ID_Consulta             ID,
        Valor                   numero,
        Forma_Pagamento         numero,
        Data_Pagamento          data
    from Pagamento
    `; 


    let resposta = await con.query (comando); 
    let registros = resposta [0]; 

    return registros
}

export async function alterarFormaDePagamento(id, pagamento){
    const comando = `
        update Pagamento set
             ID_Pagamento = ?,         
             ID_Consulta = ?,        
             Valor = ?,        
             Forma_Pagamento ?,          
             Data_Pagamento = ?   
        where ID_Pagamento =?   
    `
    let resposta = await con.query(comando,[pagamento.Valor_Demandado, pagamento.Forma_Pagamento, pagamento.Data_Pagamento, pagamento.id, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function devendoPagamento(id){
    const comando = `
            delete from Pagamento
            where ID_Pagamento = ?
    `

    let resposta = await con.query (comando, [id]); 
    let info = resposta [0]; 

    return info.affectedRows; 
}