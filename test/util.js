var _ = require('lodash');
var fs = require('fs');
var read = require('./../lib/read');

var p;

function wait(type,msg,end){
    //timeout needed for using the streams2 setup with an error message
    setTimeout(function(){
        if(type === 'error'){
            msg = new Error(msg)
        }
        p.emit(type,msg);
        if(end){
            p.push(null);
        }
    },10);
}

module.exports = {
    key: function key(){
        p = new read();
        var exists = fs.existsSync(__dirname+'/config.json');
        if(exists){
            var stream = fs.createReadStream(__dirname+'/config.json');
            stream.json = '';
            stream.on('readable',function(){
                this.json += this.read();
            }).on('end',function(){
                try{
                    var json = JSON.parse(this.json);
                    this.json= null;
                    if(typeof json.key === 'string' && !_.isEmpty(json.key)){
                        wait('key',json.key,'utf8');
                    }else{
                        wait('error','Provide a key to authorize your API request.');
                    }
                    if(typeof json.workspace === 'string' && !_.isEmpty(json.workspace)){
                        wait('workspace',json.workspace,'utf8',true);
                    }else{
                        wait('error','Provide a workspace to execute in.',true);
                    }
                }catch(e){
                    wait('error','Invalid config.json file format, please use JSON with key property. ('+ e.toString()+')',true);
                }
            }).on('error',function(err){
                wait('error','Could not retrieve file: '+err.toString(),true);
            });
        }else{
            wait('error',new Error('File config.json does not exist'),true);
        }
        return p;
    },
    validObject: function(input,params){
        try{
            if(_.isEmpty(_.difference(_.keys(input),params))){
                return true;
            }else{
                return false;
            }
        }catch(e){
            return false;
        }
    },
    isJSON : function(input){
        try{
            JSON.parse(input);
            return true;
        }catch(e){
            return false;
        }
    }
};