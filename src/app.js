var express = require('express');
var app = express();

var SupplierController = require("./routes/supplierController.js")

app.use('/supplier',SupplierController);


module.exports = app;



