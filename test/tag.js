var test = require('tape');
var asana = require('../index');
var _ = require('lodash');
var util = require('./util');




/** ====================== INITIALIZE ====================== */




//use allowedFields data inside lib objects as a reference
var tag = require('../lib/api/tag.js');
var task = require('../lib/api/task.js');
var allowedFieldsTask = ['id'];
var allowedFields = ['id'];
_.map(tag._fields,function(item){
    allowedFields.push(item.replace(/@required/,''));
});
_.map(task._fields,function(item){
    allowedFieldsTask.push(item.replace(/@required/,''));
});
var api;

test('=== Tag - initialize ===',function(t){
    api = new asana(process.env.key);
    t.end();
});




/** ====================== CALLBACKS ====================== */




test('(callback) Tags',function(t){
    api.tags(function(err,data){
        if(err){
            t.error(err,'(callback) Tags - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Tags - ended');
            t.end();
        }
    });
});

test('(callback) Tag.list',function(t){
    api.tag.list(function(err,data){
        if(err){
            t.error(err,'(callback) Tag.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Tag.list - ended');
            t.end();
        }
    });
});

test('(callback) Tag.list(workspace)',function(t){
    api.tag.list({workspace:process.env.workspace},function(err,data){
        if(err){
            t.error(err,'(callback) Tag.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,3,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Tag.list - ended');
            t.end();
        }
    });
});

test('(callback) Tag.tasks',function(t){
    api.tag.tasks(Number(process.env.tags.split(',')[0]),function(err,data){
        if(err){
            t.error(err,'(callback) Tag.tasks - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,1,'Array exist of 1 task');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFieldsTask),true,'Valid object format.');
            });
            t.pass('(callback) Tag.tasks - ended');
            t.end();
        }
    });
});

test('(callback) Tag.id',function(t){
    t.plan(3);
    api.tag.id(Number(process.env.tags.split(',')[0]),function(err,data){
        if(err){
            t.error(err,'(callback) Tag.id - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Tag.id - ended');
        }
    });
});

test('(callback) Tag.update',function(t){
    var name = 'adjustedTag1';
    t.plan(4);
    api.tag.update(Number(process.env.tags.split(',')[0]),{name:name},function(err,data){
        if(err){
            t.error(err,'(callback) Tag.update - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.equal(data.name,name,'Title is changed');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Tag.update - ended');
        }
    });
});

test('(callback) Tag.create',function(t){
    t.plan(4);
    var name = 'tag4';
    api.tag.create({name:name,workspace:process.env.workspace},function(err,data){
        if(err){
            t.error(err,'(callback) Tag.create - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.equal(data.name,name,'Tag title is correct');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.test('.addTag',function(t2){
                t2.plan(1);
                //add to task to show it in the desktop app
                api.task.addTag(Number(process.env.tasks.split(',')[0]),{tag:data.id},function(err,data){
                    if(err){
                        t2.error(err,'(callback) Tag.create/Task.addTag - invalid request');
                    }
                    t2.pass('(callback) Tag.create - ended');
                });
            });
        }
    });
});




/** ====================== STREAMING ====================== */




test('(streaming) Tags',function(t){
    var items = 0;
    api.tags().on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.pass('(streaming) Tags - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Tags - invalid request.');
    });
});

test('(streaming) Tag.list',function(t){
    var items = 0;
    api.tag.list().on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.pass('(streaming) Tag.list - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Tag.list - invalid request.');
    });
});

test('(streaming) Tag.list(workspace)',function(t){
    var items = 0;
    api.tag.list({workspace:process.env.workspace}).on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.equal(items,4,'Is an Array');
        t.pass('(streaming) Tag.list - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Tag.list - invalid request.');
    });
});

test('(streaming) Tag.id',function(t){
    t.plan(3);
    api.tag.id(Number(process.env.tags.split(',')[1])).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
    }).on('end',function(){
        t.pass('(streaming) Tag.id - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Tag.id - invalid request');
    });
});

test('(streaming) Tag.update',function(t){
    t.plan(4);
    var name = 'tag1';
    api.tag.update(Number(process.env.tags.split(',')[0]),{name:name}).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.equal(data.name,name,'Title is changed');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
    }).on('end',function(){
        t.pass('(streaming) Tag.update - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Tag.update - invalid request.');
    });
});

test('(streaming) Tag.create',function(t){
    t.plan(4);
    var name = 'tag5';
    api.tag.create({name:name,workspace:process.env.workspace}).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.equal(data.name,name,'Tag title is correct');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
    }).on('end',function(){
        t.pass('(streaming) Tag.create - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Tag.create - invalid request.');
    });
});