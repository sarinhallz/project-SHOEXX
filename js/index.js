// Importando a biblioteca express
const express = require('express');
// Atribuindo a uma variável a função do express
const app = express();
// Caminho relativo
const path = require('path');

app.use(express.static('html'));

// Criando função de rota que dá acesso à homepage
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../html/home.html'));
    console.log(__dirname);
    console.log("home :)");
});

// Criando outra rota para a página de login
app.get('/login', function(request, response) {
    response.sendFile(path.join(__dirname, 'logon.html'));
    console.log("login");
});

// Criando última rota para a página de marcas
app.get('/marcas', function(request, response) {
    console.log("marcas");
    response.sendFile(path.join(__dirname, 'marcas.html'));
});

// Iniciando o servidor na porta especificada
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
