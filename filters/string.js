    
    var   log           = require('ee-log')
        , type          = require('ee-types')
        , ConfigLoader  = require('ee-configfile')
        , geoip         = require('geoip-lite'); 


    var config = new ConfigLoader(__dirname.substr(0, __dirname.lastIndexOf('/')));


    module.exports = {
        shopifyHost: function(path) {
            return config.get('shopifyHost') + path;
        }

        , getErrorMessage: function(err) {
            if (err.msg) return err.msg;
            else return 'unknown error!';
        }

        , toJson: function( data ) {
            return JSON.stringify( data );
        }


        , ipToCountryCode: function(ip) {
            return geoip.lookup(ip) || 'ch';
        }

    }