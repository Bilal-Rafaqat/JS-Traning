const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
})
server.listen(port, ()=>{
    console.log(`Listning to Port ${port}`);
})
