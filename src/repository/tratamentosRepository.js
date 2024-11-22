import con from "./connection.js";

export async function inserirtratamentos (tratamentos) {
    const tratamento = `
    insert into Tratamentos (Procedimento, Medicamentos_uso, Custo)
                            values (?, ?, ?)
     `;

     let resposta = await con.query (tratamento, [tratamentos.procedimento, tratamentos.medicamentosDeUso, tratamentos.custo])
     let info = resposta [0]; 

     return info.insertId;
    
}

export async function consultartratamentos () {
    const tratamento = `
    select  ID_Tratamento               ID,
    ID_Consulta                         IDconsulta,
    Procedimento                        text,
    Medicamentos_uso                    utilizados,
    Custo                               numero , 
   from Tratamentos
    `;

    let resposta = await con.query (tratamento);
    let registros = resposta [0]; 

    return registros
}

export async function alterartratamentos (id, tratamentos) {
    const tratamento = `
            update Tratamentos  set
            Procedimento = ?, 
            Medicamentos_uso = ?,
            Custo = ?
        where ID_Tratamento = ?
    `
    let resposta = await con.query (tratamento, [tratamentos.procedimento, tratamentos.medicamentosDeUso, tratamentos.custo, id])
    let info = resposta [0]; 

    return info.affectedRows; 
}

export async function removertratamentos (id){
    const tratamento = `
    delete from Tratamentos 
    where ID_Tratamento = ?
    `

    let resposta = await con.query (tratamento, [id]); 
    let info = resposta [0]; 


    return info.affectedRows; 
}