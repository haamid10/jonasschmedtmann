const http = require('http')
const url = require('url')
const fs = require('fs')


const server = http.createServer((req,res)=>{
  console.log(req.url);
  const pathName = req.url;

  if(pathName === '/' || pathName === '/overview'){
    res.end('This is the Overview');
  }else if(pathName === '/product') {
    res.end('product page')
  }else if (pathName === '/api'){
    fs.readFile(`${__dirname}/devData/data.json`,'utf-8',(err,data)=>{
      const productData = JSON.parse(data)
      console.log(productData)
      res.writeHead(200, {'Content-type': 'application/json'})
      res.end(data)
    })

    
  } else{
    res.writeHead(404,{
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    })
    res.end('<h1>Page not Found!</h1>')
  }
})

server.listen(8000,()=> console.log('Listening to req on port 800'))