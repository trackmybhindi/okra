var express = require('express');
var app = express();

//var path = require('path');// Added

var SupplierController = require("./routes/supplierController.js")
var ProductController = require("./routes/productController.js")

//var index = require("./routes/index.js")

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

//app.use('/',index);
app.use('/supplier',SupplierController);
app.use('/product',ProductController);

module.exports = app;



