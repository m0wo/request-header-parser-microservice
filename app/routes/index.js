'use strict';

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.send("TODO: Some form of documentation");
        });
        
    app.route('/api/whoami')
        .get(function(req, res){
            var obj = 
            {
                ipaddress: req.headers['x-forwarded-for'],
                language: req.headers['accept-language'].split(",")[0],
                software: req.headers['user-agent'].match(/\(([^)]+)\)/)[1]
            }
            res.send(obj);
        });
};