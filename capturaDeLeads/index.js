import express from 'express';
import cors from 'cors';
import registraLeads from './servico/registraLeads.js';
import validaUsuario from './servico/validacao.js';

const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;

app.post('/usuarios', async(req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    let telefone = req.body.telefone;
    let usuario_Valido = validaUsuario(nome, email, telefone);

    if(usuario_Valido.status){

        await registraLeads(nome, email, telefone);

        res.status(204).end();

    } else {
        res.status(404).json(usuario_Valido.mensagem)
    }
})



app.listen(port, async() => {
    console.log("Servidor iniciado");
})
