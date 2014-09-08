var read = require('./read');
var error = require('./error');
var _ = require('lodash');
var process = require('./batchprocess');

function batch(){
    var options = {};
    //check type
    if(typeof arguments[arguments.length-1] === 'function'){
        options.streaming = false;
        options.callback = arguments[arguments.length-1];
    }else{
        options.streaming = true;
    }

    //validate input
    if(arguments.length === 1 || arguments.length === 2){
        //has to be an array
        if(_.isArray(arguments[0])){
            _.forEach(arguments[0],function(item){
                if(_.isObject(item) && typeof item.endpoint === 'string' && _.isArray(item.params)){
                    //valid object
                }else{
                    error.store('Provided item in the batch-Array is using an invalid format, please read the documentation.',require('util').inspect(item));
                }
            });
        }else{
            error.store('Provided property is not an Array, please read the documentation.',typeof arguments[0]);
        }
    }else{
        error.store('No available Array to batch through. Please read the documentation.');
    }

    if(error.available()){
        return error.response(options);
    }else{
        var stream = new read();
        process(stream,arguments[0],this);

        //create response
        if(options.streaming){
            return stream;
        }else{
            //callback response
            var list = [];
            stream.on('readable',function(){
                //read 1 item
                list.push(this.read());
            });
            stream.on('end',function(){
                options.callback(null,list);
            });
            stream.on('error',function(err){
                options.callback(new Error('Could not retrieve data from your batch request: '+err.toString()));
            });
        }
    }
}

module.exports = batch;