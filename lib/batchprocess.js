var _ = require('lodash');

function request(config){
    console.log('RQST:',config.current,config.tasks[config.current]);

    //execute batch task
    var segments = config.tasks[config.current].endpoint.split('.');
    var response;
    var features;
console.log('segments:',segments);
    //create call depending on the semantic structure
    if(segments.length === 1 && config.reference[segments[0]] instanceof Function){
        features = config.reference[segments[0]]('features');
        console.log('1:',features);
        response = config.reference[segments[0]]();
    }else if(segments.length === 2 && config.reference[segments[0]][segments[1]] instanceof Function){
        features = config.reference[segments[0]][segments[1]]('features');
        console.log('2:',features);
        response = config.reference[segments[0]][segments[1]].apply(config.reference[segments[0]],config.tasks[config.current].params);
    }else if(segments.length === 3 && config.reference[segments[0]][segments[1]][segments[2]] instanceof Function){
        features = config.reference[segments[0]][segments[1][segments[2]]]('features');
        console.log('3:',features);
        response = config.reference[segments[0]][segments[1][segments[2]]].apply(config.reference[segments[0]][segments[1]],config.tasks[config.current].params);
    }

    if(response){
        response.on('readable',function(){
            console.log('RQST data...');
            config.stream.push(this.read());
        }).on('end',function(){
            console.log('RQST end:',features.responseType);
            next(config);
        }).on('error',function(err){
            console.log('RQST error:',err);
                //TODO determine kind of error
            //do not post an error, while the end-event will do that
            config.stream.push({error:'ResponseError',message:err.message});
        });
    }else{
        console.log('post error..')
        //invalid request or non-existent endpoint
        config.stream.push({error:'InvalidEndpoint',message:'Endpoint: "'+config.tasks[config.current].endpoint+'" does not exist. Please read the documentation.'});
        next(config);
    }
}

function next(config){
    //determine end or proceed to next batch task
    config.current++;
    if(config.current === config.tasks.length){
        //finished
        config.stream.push(null);
    }else{
        request(config);
    }
}

module.exports = function(){
    console.log('batch process:');
    var config = {
        stream:arguments[0],
        tasks:arguments[1],
        reference:arguments[2],
        current:0
    };

    request(config);
}