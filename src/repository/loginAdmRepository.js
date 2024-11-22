import con from "./connection.js";


export async function validarUsuario(Login) {
    const comando = `
        select 
            Id_Login id,
            Login nome
        from Login_ADM  
        where 
            Login = ?
            and Senha = ?
    `;
    

    let registros = await con.query(comando, [Login.Login, Login.Senha])
    return registros[0][0];
}