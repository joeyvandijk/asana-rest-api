var fs = require('fs');

//TODO implement REST
//TODO implement import/export features (full)
//TODO ? node-webkit for downloads?

function API(key){
    //register API endpoint-scripts
    if(key === undefined){
        throw new Error('Asana-REST-API needs a key to connect to the Asana API.')
    }

    function getKey(){
        return key;
    }

    var self = this;
    fs.readdirSync(__dirname+'/lib/api').forEach(function(item){
        var name = item.replace('.js','');
        if(name.charAt(name.length-1) === 's'){
            //get only
            self[name] = require('./lib/api/'+name);
        }else{
            //get/put/delete
            self[name] = require('./lib/api/'+name);
            self[name]._key = getKey;
            self[name]._parent = self;
        }
    });

    //TODO return errors back from the API = not happening now!
}

module.exports = API;

process.on('uncaughtException',function(err){
    console.log('UNCAUGHT ERROR:',err.stack);
})