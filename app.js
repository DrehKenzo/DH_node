const http = require('http');

http.createServer((req,res)=>{
  res.writeHead(200, {"content-type": "text/plain"});
  
  switch(req.url){
    case "/":
      res.end("Voce esta na pagina home");
      break;
    case "/contato":
      res.end("Voce esta na pagina de contato");
      break;
    default:
      res.end("Voce esta em nosso servidor");
  }
  req.url

  res.end("Meu primeiro servidor");

}).listen(3000, 'localhost');