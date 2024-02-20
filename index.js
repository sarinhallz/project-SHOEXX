// importando a biblioteca express
const express = require('express');
// atribuindo a uma variável a função do express
const app = express();
// caminho relativo
const path = require('path');

// configurando express para exibir arquivos estáticos. ou seja, o express irá procurar por arquivos estáticos, como HTML, CSS, imagens, entre outros, dentro desse diretório e outros.
app.use(express.static(__dirname));

// criando função de rota que dá acesso à homepage
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'home.html'));
    console.log(__dirname);
    console.log("home :)");
});

// criando outra rota para a página de login
app.get('/login', function(request, response) {
    response.sendFile(path.join(__dirname, 'logon.html'));
    console.log("login");
});

// criando última rota para a página de marcas
app.get('/marcas', function(request, response) {
    console.log("marcas");
    response.sendFile(path.join(__dirname, 'marcas.html'));
});

// iniciando o servidor na porta especificada
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`iniciando servidor na porta: ${PORT}`);
});
