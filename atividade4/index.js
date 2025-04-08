const express = require('express');
const app     = express();

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>';
    html    += '<h3>Rotas disponiveis:</h3>';
    html    += '<p>/adicionar/:id/:nome/:qtd</p>'
    html    += '<p>/listar</p>';
    html    += '<p>/remover/:id</p>';
    html    += '<p>/editar/:id/:qtd</p>';
    res.send(html);
})

// /adicionar/:id/:nome/:qtd
app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
    let item = {
        id: number(req.params.id),
        nome: req.params.nome,
        qtd: number (req.params.qtd)
    };
    res.send(estoque.adicionar(item));
});

app.get('/listar', (req, res)=>{
    res.send(estoque.listar());
});

// /remover/:id

app.get('/editar/:id/:qtd', (req, res)=>{
    let id  = number(req.params.id);
    let qts = number(req.params.qtd);
    res.send(estoque.editar(id, qtd));
});

const PORT  = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});
