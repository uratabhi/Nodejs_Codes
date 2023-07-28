const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// Middleware to parse URL-encoded data in the request body
app.use(bodyParser.urlencoded({extended : false}));
 
app.use('/add-product',(req, res, next)=>{
  // console.log('In the midddlware');
   res.send('<form action = "/product" method = "POST"><input type="text" name="title"><input type="number" name="size" ><button type="submit">Add Product</button></form>')
})

app.post('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req, res, next)=>{
  //console.log('In another midddlware');
  res.send('<h1> hello to node js </h1>') // content-type header = /texthtml
})

app.listen(3000); // this method is used to start a web server and make your express application listen for imcoming for http requests.
