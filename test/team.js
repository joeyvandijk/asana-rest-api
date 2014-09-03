var test = require('tape');
var asana = require('../index');
var _ = require('lodash');
var util = require('./util');




/** ====================== INITIALIZE ====================== */




//use allowedFields data inside lib objects as a reference
var team = require('../lib/api/team.js');
var allowedFields = ['id'];
_.map(team._fields,function(item){
    allowedFields.push(item.replace(/@required/,''));
});
var api;

test('=== Team - initialize ===',function(t){
    api = new asana(process.env.key);
    t.end();
});




/** ====================== CALLBACKS ====================== */




test('(callback) Teams',function(t){
    api.teams(process.env.workspace,function(err,data){
        if(err){
            t.error(err,'(callback) Teams - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Teams - ended');
            t.end();
        }
    });
});

test('(callback) Team.list',function(t){
    api.team.list(process.env.workspace,function(err,data){
        if(err){
            t.error(err,'(callback) Team.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Team.list - ended');
            t.end();
        }
    });
});




/** ====================== STREAMING ====================== */




test('(streaming) Teams',function(t){
    api.teams(process.env.workspace).on('readable',function(){
        //check data format
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
            t.pass('(streaming) Workspaces - ended');
            t.end();
        }).on('error',function(err){
            t.error(err,'(streaming) Workspaces - invalid request.');
        });
});

test('(streaming) Team.list',function(t){
    api.team.list(process.env.workspace).on('readable',function(){
        //check data format
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
            t.pass('(streaming) Workspace.list - ended.');
            t.end();
        }).on('error',function(err){
            t.error(err,'(streaming) Workspace.list - invalid request.');
        });
});