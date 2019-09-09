var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'groot123',
    database : 'tmb'
});

exports.pool = pool;