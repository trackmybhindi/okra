var mysql = require('../dbconnection').pool;
var schemas = require("./schemas.js");
var utils = require('../utils/utils');
var _ = require("lodash");

var Product = function (data) {
    this.data = this.sanitize(data);
}

Product.prototype.data = {}

Product.prototype.changeName = function (product_name) {
    this.data.product_name = product_name;
}

Product.prototype.get = function (product_name) {
    return this.data[product_name];
}

Product.prototype.set = function (product_name, value) {
    this.data[product_name] = value;
}

Product.prototype.sanitize = function (data) {
    return data;
}

Product.getProductById = function (id, callback) {
    mysql.getConnection(function(err, conn){
        conn.query("select * from products_tbl where product_id = " + id, function(err, rows) {
        console.log ("res1 " + rows);
	    if (err) return callback(err);
	        callback(null, new Product(rows));
        })
    })
}

Product.getProductBySupplierId = function (id, callback) {
    mysql.getConnection(function(err, conn){
        conn.query("select * from products_tbl where supplier_id = " + id, function(err, rows) {
            console.log ("res1 " + rows);
            if (err) return callback(err);
            callback(null, new Product(rows));
        })
    })
}
Product.getAllProducts = function (callback) {
    mysql.getConnection(function(err, conn){
        conn.query("select * from products_tbl", function(err, rows) {
		if (err) return callback(err);
            callback(null, (rows));
         })
     })
}

Product.addProduct  = function (Product, callback) {
    mysql.getConnection(function(err, conn){
        conn.query("insert into products_tbl (product_name,product_address)  values(?, ?) ", [Product.product_name, Product.product_address], function(err, rows) {
            if (err) return callback(err);
            callback(null, (rows));
        })
    })
}

/*Product.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    mysql.getConnection(function(err, conn){
         conn.query("select * from product_tbl where product_id =", function(err, rows) {
              res.json(rows);
         })
     })
    db.get('users', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
}*/

/*Product.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    mysql.getConnection(function(err, conn){
         conn.query("select * from product_tbl where product_id =", function(err, rows) {
              res.json(rows);
         })
     })
    db.get('users', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
}*/


module.exports = Product;
