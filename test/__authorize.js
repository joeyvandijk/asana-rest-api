var test = require('tape');
var util = require('./util');

test('API key authentication provided.',function(t){
    t.plan(2);

    process.env.apiTimeout = 2000;
    if(process.env.key === undefined){
        util.key()
            .on('workspace',function(data){
                process.env.workspace = data;
                t.notEqual(process.env.key,undefined,'workspace provided');
            }).on('key',function(data){
                process.env.key = data;
                t.notEqual(process.env.key,undefined,'API key provided');
            }).on('error',function(err){
                t.fail(err.toString());
                process.exit(1);
            });
    }
});