'use strict';

module.exports = function(header){
    var obj =
        {
            ipaddress: header['x-forwarded-for'],
            language: header['accept-language'].split(",")[0],
            software: header['user-agent'].match(/\(([^)]+)\)/)[1]
        };
    return obj;
}
