const { json } = require('body-parser');
const apiService = require('../services/apiService');

module.exports = {
    login: async (req, res)=>{
        let json = {erro: '', result:[]};
        let nome = req.body.nome
        let senha = req.body.senha
        let login = await apiService.getLogin(nome, senha);
            for(let i in login){
                json.result.push({
                    nome: login[i].nome,
                    senha: login[i].senha
                });
                if(nome == json.result[i].nome && senha == json.result[i].senha){
                    console.log('logado')
                }else{
                    json.erro = 'login inválido';
                }
                console.log(i);
            }
        res.json(json);
    },
    //essa função chama todos os usuários registrados no banco
    todos: async (req, res)=>{
        let json = {erro: '', result:[]};
        let usuarios = await apiService.getTodos();
        for(let i in usuarios){
            json.result.push({
                id: usuarios[i].id,
                nome: usuarios[i].nome,
                sobrenome: usuarios[i].sobrenome,
                admin: usuarios[i].admin,
                ativo: usuarios[i].ativo
            });
        }
        res.json(json);
    },
    one: async (req, res)=>{
        
    },
    new: async (req, res)=>{
        let json = {erro: '', result:[]};
        let nome = req.body.nome;
        let sobrenome = req.body.rgm;
        let senha = req.body.idade;
        
        if(nome && sobrenome && senha){
            let userId = await NoteService.novo(nome, sobrenome, senha);
            json.result ={
                id: userId,
                nome,
                sobrenome,
                senha
            };
        }else{
            json.error = 'Não enviado!'
        }
        res.json(json);
        
    },
    update: async (req, res)=>{
        let json = {erro: '', result:[]};
        let id = req.params.id;
        let nome = req.body.nome;
        let sobrenome = req.body.rgm;
        let senha = req.body.idade;
        
        if(id && nome && sobrenome && senha){
            await NoteService.altera(id, nome, sobrenome, senha);
            json.result ={
                id,
                nome,
                sobrenome,
                senha
            };
        }else{
            json.error = 'Não enviado!'
        }
        res.json(json);
        
    },
    del: async(req, res) => {
        let json = {error:'', result:{}};

        await NoteService.delete(req.params.id);
        
        res.json(json);
    }
};





