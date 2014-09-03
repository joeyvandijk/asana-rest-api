var test = require('tape');
var asana = require('../index');
var _ = require('lodash');
var util = require('./util');




/** ====================== INITIALIZE ====================== */




//use allowedFields data inside lib objects as a reference
var typeahead = require('../lib/api/typeahead.js');
var allowedFields = ['id'];
_.map(typeahead._fields,function(item){
    allowedFields.push(item.replace(/@required/,''));
});
var api;

test('=== Typeahead - initialize ===',function(t){
    api = new asana(process.env.key);
    t.end();
});




/** ====================== CALLBACKS ====================== */




test('(callback) Typeahead.search',function(t){
    t.plan(4);
    api.typeahead.search(Number(process.env.workspace),{type:'project',query:'project2'},function(err,data){
        if(err){
            t.error(err,'(callback) Typeahead.search - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,1,'Array exist of 1 project');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Typeahead.search - ended');
        }
    });
});




/** ====================== STREAMING ====================== */




test('(streaming) Typeahead.search',function(t){
    t.plan(4);
    var items = 0;
    api.typeahead.search(Number(process.env.workspace),{type:'project',query:'project1'}).on('readable',function(){
        items++;
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
    }).on('end',function(){
        t.equal(items,1,'Array exist of 1 project');
        t.pass('(streaming) Typeahead.search - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Typeahead.search - invalid request.');
    });
});