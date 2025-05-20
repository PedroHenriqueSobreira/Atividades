const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

// Configuração do Mustache
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Middleware para processar formulário
app.use(express.urlencoded({ extended: true }));

// Rota GET para exibir o formulário
app.get('/', (req, res) => {
    res.render('index.html');
});

// Rota POST para processar os dados do formulário
app.post('/agendar_consulta', (req, res) => {
    let form_invalido = false;
    let campos_invalidos = [];
    const dados_consulta = req.body;

    // Validação dos campos obrigatórios
    if (!dados_consulta.nome || dados_consulta.nome.trim().length === 0) {
        form_invalido = true;
        campos_invalidos.push("Nome");
    }

    if (!dados_consulta.sobrenome || dados_consulta.sobrenome.trim().length === 0) {
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }

    if (!dados_consulta.cpf || dados_consulta.cpf.trim().length === 0) {
        form_invalido = true;
        campos_invalidos.push("CPF");
    }

    // Renderiza novamente a página com os dados e mensagens
    res.render('index.html', {
        form_invalido,
        campos_invalidos,
        dados_consulta
    });
});

// Inicialização do servidor
const PORT = 8080;
app.listen(PORT, () => {
    console.log('App rodando na porta ' + PORT);
});
