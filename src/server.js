var app = require('./app');
var config = require ('./config/config')
var port = config.server.port;

var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    const all_routes = require('express-list-endpoints');
    console.log(all_routes(app));
});


