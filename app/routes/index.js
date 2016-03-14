'use strict';

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.send("TODO: Some form of documentation");
        });
};