var request = require('request'),
    _ = require('lodash'),
    JSONStream = require('JSONStream'),
    stream = require('stream'),
    fs = require('fs'),
    path = require('path'),
    util = require('util');

//ensure streams2 stream is going out
function Pass(){
    stream.PassThrough.call(this,{objectMode:true});
}
util.inherits(Pass, stream.PassThrough);

function Endpoint(params){
    var apiEndpoint = 'https://app.asana.com/api/1.0';
    //list of items or just one item is rendered differently with JSONStream (TODO because of API response?)
    var parseFilter = '*';
    if(params.responseType === 0){
        parseFilter = 'data.*';
    }

    //create values to execute with
    var values = {
        url:apiEndpoint+params.path,
        auth:{user:params.key,pass:''},
        method : params.method
    };
    if(params.fields && params.fields.length > 0){
        //filter object properties to show or hide
        values.url += '?opt_fields='+params.fields.toString();
    }
    if(params.qs){
        //add query string variables
        if(values.url.indexOf('?') === -1){
            values.url += '?';
        }
        if(values.url.charAt(values.url.length-1) !== '&' && values.url.charAt(values.url.length-1) !== '?'){
            values.url += '&';
        }
        var url = _.map(_.keys(params.qs),function(item){
            return item+'='+encodeURIComponent(params.qs[item])+'&';
        });
        values.url += url.join('');
        values.url = values.url.substr(0,values.url.length-1);
    }

    if(params.body){
        //add body with post / put
        values.form = params.body;
    }
    console.log('RQST:',values,'parse:',parseFilter);

    //execute request
    var output;
    if(params.body && params.upload){
        //upload a file
        delete values.form;
        var rqst = request.post(values);
        var form = rqst.form();
        form.append('file', fs.createReadStream(params.body.file));
        output = rqst.pipe(JSONStream.parse(parseFilter))
            .pipe(new Pass());
    }else{
        //start request
        output = request(values)
            .pipe(JSONStream.parse(parseFilter))
            .pipe(new Pass());
    }

    //return information (when ready)
    if(params.streaming){
        return output;
    }else{
        //callback response
        var list = [];
        output.on('readable',function(){
            //read 1 item
            list.push(this.read());
        });
        output.on('end',function(){
            if(params.responseType === 1){
                list = list[0];
            }
            params.callback(null,list);
        });
        output.on('error',function(err){
            params.callback(new Error('Could not retrieve data from your request: '+err.toString()));
        });
    }
}

module.exports = Endpoint;