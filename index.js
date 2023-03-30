const http = require('http')
const url = require('url')


const server = http.createServer((req,res)=>{
  console.log(req.url);
  res.end('Hello from the server!')
})

server.listen(8000,()=> console.log('Listening to req on port 800'))