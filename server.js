const http = require("http");


http.createServer((request, response) =>{
    response.writeHead(200, {'Content-Type': 'application/json'});

    if(request.url === '/produto'){
        response.end(JSON.stringify({
            message: "Rota de Produto"
        }));
    }

    if(request.url === '/usuario'){
        response.end(JSON.stringify({
            message: "Rota de Usuário"
        }));
    }

    response.end(JSON.stringify({
        message: "Rota não existente"
    }));
}).listen(4001, ()=> console.log("Servidor ativo na porta 4001"));