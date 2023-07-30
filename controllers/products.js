const path = require('path');

const rootDir = require('../util/path');

exports.addProductsSection = (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
 };

exports.goToHome = (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
};

exports.goTo = (req, res, next)=>{
    res.sendFile(path.join(rootDir,'views', 'shop.html'));
}