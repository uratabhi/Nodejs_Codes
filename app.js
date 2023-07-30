const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./Routes/admin");

const shopRoutes = require("./Routes/shop");
const exp = require("constants");

// Middleware to parse URL-encoded data in the request body
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

app.listen(9000);
