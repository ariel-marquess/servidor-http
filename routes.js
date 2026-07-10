const { getProdutos, createsProduto, updateProduto, deleteProduto } = require('./controllers/produtosController');

function handleRequest(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const routeKey = `${req.method} ${req.url}`;

    switch (true) {
        case routeKey === 'GET /api/produtos':
            getProdutos(req, res);
            break;

        case routeKey === 'POST /api/produtos':
            createsProduto(req, res);
            break;

        case req.url.startsWith('/api/produtos/') && req.method === 'PUT':
            updateProduto(req, res);
            break;

        case req.url.startsWith('/api/produtos/') && req.method === 'DELETE':
            deleteProduto(req, res);
            break;

        default:
            res.statusCode = 404;
            res.end(JSON.stringify({
                message: 'Rota não encontrada.'
            }));
            break;
    }
}

module.exports = { handleRequest };