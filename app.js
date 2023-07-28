const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const adminRoutes = require('./Routes/admin');

const shopRoutes = require('./Routes/shop');

// Middleware to parse URL-encoded data in the request body
app.use(bodyParser.urlencoded({extended : false}));
 
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
   res.status(404).send('<h1>Page Not Found</h1>');
})

app.listen(3000); // this method is used to start a web server and make your express application listen for imcoming for http requests.
