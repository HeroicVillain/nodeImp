var http = require('http');

const server = http.createServer((req, res) => {

    console.log(req.url, req.method, req.headers);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Test Node</title></head>");
    res.write("<body><h1>This is a node js test response.</h1></body>");
    res.write("</html>");
    res.end();

});

server.listen(31579);