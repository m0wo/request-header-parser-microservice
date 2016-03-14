'use strict';

var HeaderParser = require(process.cwd() + '/app/controllers/headerParser.js');

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.send("TODO: Some form of documentation");
        });
        
    app.route('/api/whoami')
        .get(function(req, res){
            res.send(HeaderParser(req.headers))
        });
};