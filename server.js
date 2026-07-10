const http = require("http");
const { handleRequest } = require("./routes");
const port = 3000;
const server = http.createServer((req, res) => {
    handleRequest(req, res);
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})