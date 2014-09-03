var test = require('tape');
var asana = require('../index');
var _ = require('lodash');
var util = require('./util');




/** ====================== INITIALIZE ====================== */




//use allowedFields data inside lib objects as a reference
var attachment = require('../lib/api/attachment.js');
var task = require('../lib/api/task.js');
var allowedFieldsTask = ['id'];
var allowedFields = ['id'];
_.map(attachment._fields,function(item){
    allowedFields.push(item.replace(/@required/,''));
});
_.map(task._fields,function(item){
    allowedFieldsTask.push(item.replace(/@required/,''));
});
var api;
var attachments = [];
var filename = 'success.png';

test('=== Attachment - initialize ===',function(t){
    api = new asana(process.env.key);
    t.end();
});




/** ====================== CALLBACKS ====================== */




test('(callback) Attachment.create',function(t){
    t.plan(4);
    api.attachment.create(Number(process.env.tasks.split(',')[0]),{file:__dirname+'/'+filename},function(err,data){
        if(err){
            t.error(err,'(callback) Attachment.create - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.equal(data.name,filename,'Attachment title is correct');
            attachments.push(data.id);
            t.pass('(callback) Attachment.create - ended');
        }
    });
});

test('(callback) Attachments',function(t){
    api.attachments(Number(process.env.tasks.split(',')[0]),function(err,data){
        if(err){
            t.error(err,'(callback) Attachments - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            t.equal(data.length,1,'Array has only 1 entry.');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
                t.equal(item.name,filename,'Attachment title is correct');
            });
            t.pass('(callback) Attachments - ended');
            t.end();
        }
    });
});

test('(callback) Attachment.list',function(t){
    api.attachment.list(Number(process.env.tasks.split(',')[0]),function(err,data){
        if(err){
            t.error(err,'(callback) Attachment.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            t.equal(data.length,1,'Array has only 1 entry.');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
                t.equal(item.name,filename,'Attachment title is correct');
            });
            t.pass('(callback) Attachment.list - ended');
            t.end();
        }
    });
});

test('(callback) Attachment.id',function(t){
    t.plan(4);
    api.attachment.id(attachments[0],function(err,data){
        if(err){
            t.error(err,'(callback) Attachment.id - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.equal(data.name,filename,'Attachment title is correct');
            t.pass('(callback) Attachment.id - ended');
        }
    });
});




/** ====================== STREAMING ====================== */




test('(streaming) Attachment.create',function(t){
    t.plan(4);
    api.attachment.create(Number(process.env.tasks.split(',')[0]),{file:__dirname+'/'+filename}).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
        t.equal(data.name,filename,'Attachment title is correct');
        attachments.push(data.id);
    }).on('end',function(){
        t.pass('(streaming) Attachment.create - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Attachment.create - invalid request.');
    });
});

test('(streaming) Attachments',function(t){
    var items = 0;
    api.attachments(Number(process.env.tasks.split(',')[0])).on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.equal(items,2,'Array has 2 entries.');
        t.pass('(streaming) Attachments - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Attachments - invalid request.');
    });
});

test('(streaming) Attachment.list',function(t){
    var items = 0;
    api.attachment.list(Number(process.env.tasks.split(',')[0])).on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.equal(items,2,'Array has 2 entries.');
        t.pass('(streaming) Attachment.list - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Attachment.list - invalid request.');
    });
});

test('(streaming) Attachment.id',function(t){
    t.plan(4);
    api.attachment.id(attachments[0]).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
        t.equal(data.name,filename,'Attachment title is correct');
    }).on('end',function(){
        t.pass('(streaming) Attachment.id - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Attachment.id - invalid request');
    });
});