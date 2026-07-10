function getProdutos(req, res) {
    const produtos = [
        {id: 1, nome: "Arroz", preco: 3.0},
        {id: 2, nome: "Feijão", preco: 6.50},
        {id: 3, nome: "Açucar", preco: 3.75},
    ];
    res.statusCode = 200;
    res.end(JSON.stringify(produtos));
}

function createsProduto(req, res) {
    let body = "";

    req.on("data", chunk => {
        body += chunk.toString();
    });

    req.on("end", () => {
        try {
            const novoProduto = JSON.parse(body);
            novoProduto.id = Date.now();

            res.statusCode = 201;
            res.end(JSON.stringify({
                message: "Novo produto cadastrado",
                produto: novoProduto
            }));
        } catch (e) {
            res.statusCode = 400;
            res.end(JSON.stringify({message: "Erro ao criar o produto"}));
        }
    });
}

function updateProduto(req, res) {
    const id = req.url.split("/")[3];
    let body = "";

    req.on("data", chunk => {
        body += chunk.toString();
    })

    req.on("end", () => {
        try {
            const produtoAtualizado = JSON.parse(body);
            produtoAtualizado.id = parseInt(id, 10);

            res.statusCode = 200;
            res.end(JSON.stringify({
                message: `Produto com ID ${id} atualizado.`,
                produto: produtoAtualizado
            }));
        } catch (e){
            res.statusCode = 400;
            res.end(JSON.stringify({message: "Erro ao criar o produto"}));
        }
    });
}

function deleteProduto(req, res) {
    const id = res.url.split("/")[3];
    res.statusCode = 200;
    res.end(JSON.stringify({message: `Produto com ID ${id} deletado.`}))
}

module.exports = {
    getProdutos,
    createsProduto,
    updateProduto,
    deleteProduto
}