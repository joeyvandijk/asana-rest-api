var _ = require('lodash'),
    error = require('./error'),
    endpoint = require('./endpoint');

//TODO trigger errors
function determinePath(values,options){
    var path = '';
    //needed to determine which variable is an option
    options.pathVariables = 0;
    path = _.map(options.path, function(num) {
        if(num === '@'){
            //found an @, ignore and proceed
            this.start = true;
            return '';
        }else if(this.start){
            //param after an @
            if(typeof Number(num) === 'number' && Number(num) === options.pathVariables){
                var value = values[num];
                if(typeof value === 'string' || typeof value === 'number'){
                    //string or number is allowed for the path variable
                    num = value;
                }else if(_.isPlainObject(value)){
                    //with id:'objectPropertyName' you can use an object to prefill the path //TODO do I need this? and only @0?
                    if(options.id && options.pathVariables === 0){
                        num = values[num][options.id];
                    }else{
                        error.store('Invalid parameter, object given but not clear which property to use at @'+options.pathVariables+' .',options.path);
                    }
                }else if(typeof value === 'function' || _.isEmpty(value)){
                    error.store('No parameter given for @'+options.pathVariables+'.',options.path);
                }else{
                    error.store('Invalid parameter (#'+(options.pathVariables + 1)+') to embed in URL: not a String or Number.',options.path);
                }
                options.pathVariables++;
            }
            //TODO wait a bit longer in map if @19 or not needed?
            this.start = false;
        }
        //TODO delete value that is not used?
        return num;
    });

    //TODO move out of this function (add return?)
    //define function
    if(options.pathVariables !== 0){
        //nothing found
        options.path = path.join('');
    }
console.log('VALIDATE PATH:',options.path);
}

function overruleOptions(values,options){
    //TODO error reporting when wrong
    var opts;
    var args = values.length - options.pathVariables;
    if(!options.streaming){
        args--;
    }
    if(args > 0){
        //retrieve options
        if(options.streaming){
            opts = values[values.length-1];
        }else{
            opts = values[values.length-2];
        }
    }else if(options.allowedOptions){
        //check provided options if they are allowed, if not remove
        opts = values[0];
    }

    //filters + options available, so ignore id-parameter for injection of variables
    if(options.allowedOptions){
        //determine required items
        _.each(options.allowedOptions,function(item){
            if(item.indexOf('@required') != -1){
                var value = item.replace(/@required/,'');
                if(_.indexOf(_.keys(opts),value) === -1){
                    error.store('Missing required parameter @ '+options.name,value);
                }
            }
        });
        //determine valid options
        _.each(_.keys(opts),function(item){
            var fnd = false;
            _.each(options.allowedOptions,function(allowed){
                if(allowed.replace(/@required/,'').toLowerCase() === item.replace(/@required/,'').toLowerCase()){
                    fnd = true;
                    if(options.id === item){
                        //options parameter used with path, so delete to prevent issues with allowedFields
                        delete opts[item];
                    }
                }
            })
            if(!fnd){
                if(options.id !== item){
                    //skip parameter identifier, while not needed anymore during creation of request.
                    error.store('Invalid filter parameter @ '+options.name,item);
                }
                //invalid parameter
                delete opts[item];
            }
        });
    }

    if(opts){
        //add correct values for fields & options (body)
        if(opts.fields){
            //add fields (first while it is a special property that can be added to a body/params object)
            if(_.isArray(opts.fields)){
                //check which properties are allowed
                options.fields = _.reduce(opts.fields, function(result, num, key) {
                    if(_.indexOf(options.allowedFields,num) !== -1){
                        if(_.isEmpty(result)){
                            result = [num];
                        }else{
                            result.push(num);
                        }
                    }
                    return result;
                }, []);
            }else{
                error.store('Fields parameter is not an Array of String @ '+options.name,opts.fields);
            }
            //cleanup so body parameters are not mixed up
            delete opts.fields;
        }else{
            options.fields = _.clone(options.allowedFields);
        }

        //add allowed properties on correct object
        if(options.optionsType === 'params'){
            //add options object to .params
            options.qs = _.cloneDeep(opts);
            console.log('params');
        }else if(options.optionsType === 'body'){
            //add options object to .body
            options.body = _.cloneDeep(opts);
        }else{
            //invalid properties which are not used and therefore an error is necessary.
            _.each(_.keys(opts),function(item){
                error.store('Invalid options parameter '+item+' @ '+options.name,opts[item]);
            });
        }
    }else{
        //no options, so use all allowed fields
        options.fields = _.clone(options.allowedFields);
    }

    //clean fields to prevent @required added to URL path
    var i = 0;
    var il = options.fields.length;
    while(i<il){
        if(options.fields[i].indexOf('@required') !== -1){
            options.fields[i] = options.fields[i].replace(/@required/,'');
        }
        i++;
    }
    console.log('OPTIONS END:',options);
}

module.exports = function(values,options){
console.log('VALIDATE:',values);
    //TODO validate empty input : no id provided, what then?
    //check type
    if(typeof values[values.length-1] === 'function'){
        options.streaming = false;
        options.callback = values[values.length-1];
    }else{
        options.streaming = true;
    }
    //TODO validate if fields are provided or just only ignore the rest?

    //define properties when unavailable
    if(options.allowedOptions){
        //builtin property that is allowed on the options object to filter properties in response object
        options.allowedOptions.push('fields');
    }
    if(!options.optionsType){
        options.optionsType = 'options';//default
    }
    if(!options.responseType){
        options.responseType = 0;//default (multiple entries possible) : needed for callback format
    }
    if(!options.allowedFields){
        options.allowedFields = [];
    }

    determinePath(values,options);
    overruleOptions(values,options);

    if(error.available()){
        return error.response(options);
    }else{
        //all fine, proceed
        delete options.id;
        return endpoint(options);
    }
}