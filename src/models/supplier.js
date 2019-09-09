var mysql = require('../dbconnection').pool;
var schemas = require("./schemas.js");
var utils = require('../utils/utils');
var _ = require("lodash");

var Supplier = function (data) {
    this.data = this.sanitize(data);
}

Supplier.prototype.data = {}

Supplier.prototype.changeName = function (supplier_name) {
    this.data.supplier_name = supplier_name;
}

Supplier.prototype.get = function (supplier_name) {
    return this.data[supplier_name];
}

Supplier.prototype.set = function (supplier_name, value) {
    this.data[supplier_name] = value;
}

Supplier.prototype.sanitize = function (data) {
    return data;
}

Supplier.getSupplierById = function (id, callback) {
    mysql.getConnection(function(err, conn){
        conn.query("select * from suppliers_tbl where supplier_id = " + id, function(err, rows) {
        console.log ("res1 " + rows);
	    if (err) return callback(err);
	        callback(null, new Supplier(rows));
        })
    })
}

Supplier.getAllSuppliers = function (callback) {
    mysql.getConnection(function(err, conn){
        conn.query("select * from suppliers_tbl", function(err, rows) {
		if (err) return callback(err);
            callback(null, (rows));
         })
     })
}

Supplier.addSupplier  = function (Supplier, callback) {
    mysql.getConnection(function(err, conn){
        conn.query("insert into suppliers_tbl (supplier_name,supplier_address)  values(?, ?) ", [Supplier.supplier_name, Supplier.supplier_address], function(err, rows) {
            if (err) return callback(err);
            callback(null, (rows));
        })
    })
}

/*Supplier.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    mysql.getConnection(function(err, conn){
         conn.query("select * from supplier_tbl where supplier_id =", function(err, rows) {
              res.json(rows);
         })
     })
    db.get('users', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
}*/

/*Supplier.prototype.save = function (callback) {
    var self = this;
    this.data = this.sanitize(this.data);
    mysql.getConnection(function(err, conn){
         conn.query("select * from supplier_tbl where supplier_id =", function(err, rows) {
              res.json(rows);
         })
     })
    db.get('users', {id: this.data.id}).update(JSON.stringify(this.data)).run(function (err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
}*/


module.exports = Supplier;  
