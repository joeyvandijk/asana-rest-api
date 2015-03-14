var request = require('request'),
    _ = require('lodash'),
    JSONStream = require('JSONStream'),
    stream = require('stream'),
    fs = require('fs'),
    path = require('path'),
    util = require('util'),
    read = require('./read');

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
    var stream = new read();
    if(params.body && params.upload){
        //upload a file
        delete values.form;
        var rqst = request.post(values);
        var form = rqst.form();
        form.append('file', fs.createReadStream(params.body.file));
        output = rqst.pipe(JSONStream.parse(parseFilter))
            .pipe(new Pass());
    }else{
        console.log('###');
        //start request
        var error = {
            code:0,
            data:[]
        };
        //TODO empty array = no data = issue when empty (no response with batch!!!)
        var responses = 0;
        request(values).on('response',function(res){
            if(res.statusCode != 200 && res.statusCode != 201){
                error.code = res.statusCode;
                console.log('RQST ERROR:',res.statusCode);
            }
        }).pipe(JSONStream.parse(parseFilter)).on('data',function(data){
            console.log('RQST GO:',data,error.code,params.responseType);
            if(error.code === 0){
                console.log('out...')
                stream.push(data);
            }else{
                console.log('RQST ERROR DATA:',data)
                _.each(data,function(item){
                    error.data.push(item);
                })
            }
            responses++;
        }).on('end',function(){
            if(error.code !== 0){
                console.log('RQST ERRORS:',error);
                _.each(error.data,function(item){
                    console.log('.',item.message)
                    //TODO create unique errors
                    stream.emit('error',new Error(error.code+' # '+item.message));
                });
            }
            if(responses === 0){
                stream.push([]);
            }
            console.log('RQST end',params.responseType);
            stream.push(null);
        }).on('error',function(err){
            console.log('RQST failed connection',err);
            stream.emit('error',err);
            stream.push(null);
        });
               /*
            //TODO temp, to check how to capture
            .on('response',function(res){
                //TODO temp
                console.log('REQUEST RES:',res.statusCode)
                if(res.statusCode == '404'){
                    this.error = true;
                    console.log('404');
                    output.emit('error',new Error('404'));
                    output.push(null);
//                    this.emit('error',new Error('wrong'));
                }else{
                    console.log('proceed...')
                }
            }).on('error',function(err){
                console.log('404 error',err);
            }).on('end',function(){
                console.log('404 end',this.error);
            })
            .pipe(JSONStream.parse('*'))
            .pipe(new Pass())
//            .pipe(JSONStream.parse(parseFilter))
//            .pipe(new Pass())
*/
    }

    //return information (when ready)
    if(params.streaming){
        return stream;
    }else{
        //callback response
        var list = [];
        stream.on('readable',function(){
            console.log('CB: read')
            //read 1 item
            list.push(this.read());
        }).on('end',function(){
            console.log('CB type:',params.responseType,list);
            if(params.responseType === 1){
                list = list[0];
            }
            if(!this.error){
                params.callback(null,list);
            }
        }).on('error',function(err){
            console.log('CB error',err);
            this.error = true;
            params.callback(new Error('Could not retrieve data from your request: '+err.toString()));
        });
    }
}

module.exports = Endpoint;