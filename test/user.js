var test = require('tape');
var asana = require('../index');
var _ = require('lodash');
var util = require('./util');




/** ====================== INITIALIZE ====================== */




//use allowedFields data inside lib objects as a reference
var user = require('../lib/api/user.js');
var allowedFields = ['id'];
_.map(user._fields,function(item){
    allowedFields.push(item.replace(/@required/,''));
});
var api;
var userid;

test('=== User - initialize ===',function(t){
    api = new asana(process.env.key);
    t.end();
});




/** ====================== CALLBACKS ====================== */




test('(callback) User.me',function(t){
    t.plan(2);
    api.user.me(function(err,data){
        if(err){
            t.error(err,'(callback) User.me - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.pass('(callback) User.me - ended');
        }
    });
});

test('(callback) Users',function(t){
    api.users(function(err,data){
        if(err){
            t.error(err,'(callback) Users - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
                //use throughout these tests = need to be on top (due to serial execution of tape)
                if(!userid){
                    userid = item.id;
                }
            });
            t.pass('(callback) Users - ended');
            t.end();
        }
    });
});

test('(callback) User.list({workspace})',function(t){
    api.user.list({workspace:process.env.workspace},function(err,data){
        if(err){
            t.error(err,'(callback) User.list({workspace}) - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) User.list({workspace}) - ended');
            t.end();
        }
    });
});

test('(callback) User.id',function(t){
    t.plan(3);
    api.user.id(userid,function(err,data){
        if(err){
            t.error(err,'(callback) User.id - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) User.id - ended');
        }
    });
});




/** ====================== STREAMING ====================== */



test('(streaming) User.id',function(t){
    t.plan(3);
    api.user.id(userid).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
    }).on('end',function(){
        t.pass('(streaming) User.id - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) User.id - invalid request');
    });
});

test('(streaming) User.me',function(t){
    t.plan(3);
    api.user.me().on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
    }).on('end',function(){
        t.pass('(streaming) User.me - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) User.me - invalid request');
    });
});

test('(streaming) Users',function(t){
    var items = 0;
    api.users().on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.pass('(streaming) Users - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Users - invalid request');
    });
});

test('(streaming) User.list({workspace})',function(t){
    var items = 0;
    api.user.list({workspace:process.env.workspace}).on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.pass('(streaming) User.list({workspace}) - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) User.list({workspace}) - invalid request');
    });
});