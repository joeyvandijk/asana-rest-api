var test = require('tape');
var asana = require('../index');
var _ = require('lodash');
var util = require('./util');




/** ====================== INITIALIZE ====================== */




//use allowedFields data inside lib objects as a reference
var workspace = require('../lib/api/workspace.js');
var allowedFields = ['id'];
_.map(workspace._fields,function(item){
    allowedFields.push(item.replace(/@required/,''));
});
var api;

test('=== Workspace - initialize ===',function(t){
    api = new asana(process.env.key);
    t.end();
});




/** ====================== CALLBACKS ====================== */




test('(callback) Workspaces',function(t){
    api.workspaces(function(err,data){
        if(err){
            t.error(err,'(callback) Workspaces - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Workspaces - ended');
            t.end();
        }
    });
});

test('(callback) Workspace.list',function(t){
    api.workspace.list(function(err,data){
        if(err){
            t.error(err,'(callback) Workspace.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Workspace.list - ended');
            t.end();
        }
    });
});

test('(callback) Workspace.update',function(t){
    t.plan(3);

    var title = 'test3';
    api.workspace.update(process.env.workspace,{name:title},function(err,data){
        if(err){
            t.error(err,'(callback) Workspace.update - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.equal(data.name,title,'Valid title');
            t.pass('(callback) Workspace.update - ended');
        }
    });
});




/** ====================== STREAMING ====================== */




test('(streaming) Workspaces',function(t){
    var items = 0;
    api.workspaces().on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.pass('(streaming) Workspaces - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Workspaces - invalid request.');
    });
});

test('(streaming) Workspace.list',function(t){
    var items = 0;
    api.workspace.list().on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.pass('(streaming) Workspace.list - ended.');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Workspace.list - invalid request.');
    });
});

test('(streaming) Workspace.update',function(t){
    t.plan(3);

    var title = 'Test2';
    api.workspace.update(process.env.workspace,{name:title}).on('readable',function(){
        //check data format
        var response = this.read();
        t.equal(util.validObject(response,allowedFields),true,'Valid object format.');
        t.equal(response.name,title,'Valid title');
    }).on('end',function(){
        t.pass('(streaming) Workspace.update - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Workspace.update - invalid request.');
    });
});