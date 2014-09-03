var test = require('tape');
var asana = require('../index');
var _ = require('lodash');
var util = require('./util');




/** ====================== INITIALIZE ====================== */




//use allowedFields data inside lib objects as a reference
var story = require('../lib/api/story.js');
var task = require('../lib/api/task.js');
var allowedFieldsTask = ['id'];
var allowedFields = ['id'];
_.map(story._fields,function(item){
    allowedFields.push(item.replace(/@required/,''));
});
_.map(task._fields,function(item){
    allowedFieldsTask.push(item.replace(/@required/,''));
});
var api;
var createdStory;

test('=== Project - initialize ===',function(t){
    api = new asana(process.env.key);
    t.end();
});




/** ====================== CALLBACKS ====================== */




test('(callback) Story.create',function(t){
    t.plan(6);
    var name = 'comment1';
    api.story.create(Number(process.env.tasks.split(',')[1]),{text:name},function(err,data){
        if(err){
            t.error(err,'(callback) Story.create - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            createdStory = data.id;
            t.equal(data.text,name,'Story title is correct');
            t.equal(data.type,'comment','Story type is correct');
            t.equal(data.target.id,Number(process.env.tasks.split(',')[1]),'Story target is correct');
            t.pass('(callback) Story.create - ended');
        }
    });
});

test('(callback) Stories',function(t){
    api.stories(Number(process.env.tasks.split(',')[1]),function(err,data){
        if(err){
            t.error(err,'(callback) Stories - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,3,'Array has 1 comment');//and 2 command stories
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Stories - ended');
            t.end();
        }
    });
});

test('(callback) Story.list',function(t){
    api.story.list(Number(process.env.tasks.split(',')[1]),function(err,data){
        if(err){
            t.error(err,'(callback) Story.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,3,'Array has 1 comment');//and 2 command stories
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Story.list - ended');
            t.end();
        }
    });
});

test('(callback) Story.id',function(t){
    t.plan(3);
    api.story.id(createdStory,function(err,data){
        if(err){
            t.error(err,'(callback) Story.id - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Story.id - ended');
        }
    });
});




/** ====================== STREAMING ====================== */




test('(streaming) Story.create',function(t){
    t.plan(6);
    var name = 'comment2';
    api.story.create(Number(process.env.tasks.split(',')[1]),{text:name}).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
        createdStory = data.id;
        t.equal(data.text,name,'Story title is correct');
        t.equal(data.type,'comment','Story type is correct');
        t.equal(data.target.id,Number(process.env.tasks.split(',')[1]),'Story target is correct');
    }).on('end',function(){
        t.pass('(streaming) Story.create - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Story.create - invalid request.');
    });
});

test('(streaming) Stories',function(t){
    var items = 0;
    api.stories(Number(process.env.tasks.split(',')[1])).on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.equal(items,4,'Array has 2 comments');//and 2 command stories
        t.pass('(streaming) Stories - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Stories - invalid request.');
    });
});

test('(streaming) Story.list',function(t){
    var items = 0;
    api.story.list(Number(process.env.tasks.split(',')[1])).on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.equal(items,4,'Array has 2 comments');//and 2 command stories
        t.pass('(streaming) Story.list - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Story.list - invalid request.');
    });
});

test('(streaming) Story.id',function(t){
    t.plan(3);
    api.story.id(createdStory).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
    }).on('end',function(){
        t.pass('(streaming) Story.id - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Story.id - invalid request');
    });
});