var http = require('http');
const getPort = require('get-port');

var serverPort = (async () => {
    await getPort({port: getPort.makeRange(30000, 50000)});
    // Will use any port from 3000 to 3100, otherwise fall back to a random port
})();

const server = http.createServer((req, res) => {

    console.log(req.url, req.method, req.headers);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Test Node</title></head>");
    res.write("<body><h1>This is a node js test response.</h1></body>");
    res.write("</html>");
    res.end();

});

(async () => {
    serverPort = await getPort({port: getPort.makeRange(30000, 50000)});
    console.log("Server running on port: "+ serverPort);
    // Will use any port from 3000 to 3100, otherwise fall back to a random port
    server.listen(serverPort);
})();


