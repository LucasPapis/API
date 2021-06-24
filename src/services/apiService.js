const db = require('../db');

module.exports = {
    // consulta que retorna todos os usuários do banco
    // Só não traz a senha
    getTodos: () =>{
        return new Promise((resolve, reject)=>{
            db.query('SELECT id, nome, sobrenome, admin, ativo FROM usuarios', (error, results)=>{
                if(error){reject(error); return; }
                resolve(results);
            });
        });
    },
    getLogin: (nome, senha) =>{
        return new Promise((resolve, reject)=>{
            db.query('SELECT nome, senha FROM usuarios WHERE nome = ?', [nome], (error, results) =>{
                if (error){reject(error); return; }
                //console.log(results[0].senha);
               resolve(results);
            });
        });

    },
    novo: (nome, sobrenome, senha) =>{
        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO usuarios (nome, sobrenome, senha, admin, ativo) VALUES (?, ?, ? ,0,1)',[nome, sobrenome, senha] , 
            (error, results)=>{
                if(error) {reject(error); return; }
                resolve(results.insertId);          
            });
        });
    },
    altera: (id, nome, sobrenome, senha) => {
        return new Promise((resolve, reject)=>{
            db.query('UPDATE usuarios SET nome = ?, sobrenome = ?, senha = ? WHERE id = ?',[id, nome, sobrenome, senha],
            (error, results)=>{
                if(error) {reject(error); return; }
                resolve(results.insertId);          
            });
        });
    },
    delete: (id) =>{
        return new Promise((resolve, reject)=>{
            db.query('DELETE FROM usuarios WHERE id = ?', [id], (error, results)=>{
                if(error){reject(error); return; }
                resolve(results);
            });
        });
    }
    
};