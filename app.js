const { response } = require("express");
const express = require("express");
const { randomUUID } = require("crypto");

const app = express();

// app.get("/primeira-rota", (req, res) => {
//     return res.json({
//         message: "Acessou a primeira rota com nodemon",
//     });
// });

app.use(express.json());

const products = [];

/**
 * Body => Sempre que eu quiser enviar dados para minha aplicação
 * Params => /product/2124541223
 * Query => /product?id=21231545645647&value=245749874654
 */

app.post("/products", (request, response) => {
    
    const { name, price } = request.body;

    const product = {
        name,
        price,
        id: randomUUID(),
    }

    products.push(product);

    return response.json(product);
});

app.get("/products", (request, response) => {
    return response.json(products);
});

app.get("/products/:id", (request, response) => {
    const { id } = request.params;
    const product = products.find(product => product.id === id);
    return response.json(product);
});

app.put("/products/:id", (request, response) => {
    const { id } = request.params;
    const { name, price } = request.body;

    const productIndex = products.findIndex(product => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    return response.json({ message: "Produto alterado com sucesso" });

});

app.listen(4002, ()=> console.log("Servidor ativo na porta 4002"));