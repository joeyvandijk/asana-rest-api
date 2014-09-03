var test = require('tape');
var asana = require('../index');
var _ = require('lodash');
var util = require('./util');




/** ====================== INITIALIZE ====================== */




//use allowedFields data inside lib objects as a reference
var project = require('../lib/api/project.js');
var task = require('../lib/api/task.js');
var allowedFieldsTask = ['id'];
var allowedFields = ['id'];
_.map(project._fields,function(item){
    allowedFields.push(item.replace(/@required/,''));
});
_.map(task._fields,function(item){
    allowedFieldsTask.push(item.replace(/@required/,''));
});
var api;
var createdProject;

test('=== Project - initialize ===',function(t){
    api = new asana(process.env.key);
    t.end();
});




/** ====================== CALLBACKS ====================== */




test('(callback) Projects',function(t){
    api.projects(function(err,data){
        if(err){
            t.error(err,'(callback) Projects - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Projects - ended');
            t.end();
        }
    });
});

test('(callback) Project.list',function(t){
    api.project.list(function(err,data){
        if(err){
            t.error(err,'(callback) Project.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Project.list - ended');
            t.end();
        }
    });
});

test('(callback) Project.list(workspace)',function(t){
    api.project.list({workspace:process.env.workspace},function(err,data){
        if(err){
            t.error(err,'(callback) Project.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,3,'Array has 3 projects');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Project.list - ended');
            t.end();
        }
    });
});

test('(callback) Project.tasks',function(t){
    api.project.tasks(Number(process.env.projects.split(',')[0]),function(err,data){
        if(err){
            t.error(err,'(callback) Project.tasks - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,1,'Array has 1 task');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFieldsTask),true,'Valid object format.');
            });
            t.pass('(callback) Project.tasks - ended');
            t.end();
        }
    });
});

test('(callback) Project.id',function(t){
    t.plan(3);
    api.project.id(Number(process.env.projects.split(',')[0]),function(err,data){
        if(err){
            t.error(err,'(callback) Project.id - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Project.id - ended');
        }
    });
});


test('(callback) Project.update',function(t){
    var name = 'adjustedProject1';
    t.plan(4);
    api.project.update(Number(process.env.projects.split(',')[0]),{name:name},function(err,data){
        if(err){
            t.error(err,'(callback) Project.update - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.equal(data.name,name,'Title is changed');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Project.update - ended');
        }
    });
});

test('(callback) Project.create',function(t){
    t.plan(4);
    var name = 'project4';
    api.project.create({name:name,workspace:process.env.workspace,notes:'created through the API'},function(err,data){
        if(err){
            t.error(err,'(callback) Project.create - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            createdProject = data.id;
            t.equal(data.name,name,'Project title is correct');
            t.pass('(callback) Project.create - ended');
        }
    });
});

test('(callback) Project.remove',function(t){
    t.plan(2);
    api.project.remove(createdProject,function(err,data){
        if(err){
            t.error(err,'(callback) Project.remove - invalid request');
        }else{
            t.equal(_.isEmpty(data),true,'Object is empty = success.');
            t.pass('(callback) Project.remove - ended');
        }
    });
});




/** ====================== STREAMING ====================== */




test('(streaming) Projects',function(t){
    var items = 0;
    api.projects().on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.pass('(streaming) Projects - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Projects - invalid request.');
    });
});

test('(streaming) Project.list',function(t){
    var items = 0;
    api.project.list().on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.notEqual(items,0,'Array is not empty');
        t.pass('(streaming) Project.list - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Project.list - invalid request.');
    });
});

test('(streaming) Project.list(workspace)',function(t){
    var items = 0;
    api.project.list({workspace:process.env.workspace}).on('readable',function(){
        items++;
        t.equal(util.validObject(this.read(),allowedFields),true,'Valid object format.');
    }).on('end',function(){
        t.equal(items,3,'Array has 3 projects.');
        t.pass('(streaming) Project.list - ended');
        t.end();
    }).on('error',function(err){
        t.error(err,'(streaming) Project.list - invalid request.');
    });
});

test('(streaming) Project.id',function(t){
    t.plan(3);
    api.project.id(Number(process.env.projects.split(',')[1])).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
    }).on('end',function(){
        t.pass('(streaming) Project.id - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Project.id - invalid request');
    });
});

test('(streaming) Project.update',function(t){
    t.plan(4);
    var name = 'project1';
    api.project.update(Number(process.env.projects.split(',')[0]),{name:name}).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.equal(data.name,name,'Title is changed');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
    }).on('end',function(){
        t.pass('(streaming) Project.update - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Project.update - invalid request.');
    });
});

test('(streaming) Project.create',function(t){
    t.plan(4);
    var name = 'project5';
    api.project.create({name:name,workspace:process.env.workspace}).on('readable',function(){
        var data = this.read();
        t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
        t.notEqual(_.isEmpty(data),true,'Object is not empty');
        createdProject = data.id;
        t.equal(data.name,name,'Project title is correct');
    }).on('end',function(){
        t.pass('(streaming) Project.create - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Project.create - invalid request.');
    });
});

test('(streaming) Project.remove',function(t){
    t.plan(2);
    api.project.remove(createdProject).on('readable',function(){
        var data = this.read();
        t.equal(_.isEmpty(data),true,'Object is empty = success.');
    }).on('end',function(){
        t.pass('(streaming) Project.remove - ended');
    }).on('error',function(err){
        t.error(err,'(streaming) Project.remove - invalid request.');
    });
});