import pool from "../conexao/conexao.js";

async function registraLeads(nome, email, telefone){

    const conexao = await pool.getConnection(); 

    const resposta = await conexao.query('INSERT INTO leads (nome, email, telefone) values(?,?,?)',[nome, email, telefone]);

    console.log(resposta);

    conexao.release();
}

export default registraLeads;