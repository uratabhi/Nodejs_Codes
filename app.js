const express = require('express');

const app = express();


app.use((req, res, next)=>{
   console.log('In the midddlware');
   next(); // allows the request to continue to the next middleware in line
})
app.use((req, res, next)=>{
  console.log('In another midddlware');
  //res.send('<h1> hello to node js </h1>') // content-type header = /texthtml
  res.send({key1 : 'name'}); // content-type = application/json
})

app.listen(3000); // this method is used to start a web server and make your express application listen for imcoming for http requests.
