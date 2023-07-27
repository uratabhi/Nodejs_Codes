const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  console.log(req.url);
  if(req.url=='/home'){
     res.end('<h1> Welcome Home </h1>')
  }
  else if(req.url =='/about'){
     res.end('<h1>Welcome to About Us Page </h1>')
  }
  else if(req.url=='/node'){
    res.end('<h1>Welcome to my NodeJs project </h1>')
  }
  else{
     res.end('<h1>server not found! </h1>');
  }
});

server.listen(4000, ()=>{
     console.log('server is lisetening on port 4000')
});
