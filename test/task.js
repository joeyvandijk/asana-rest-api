var test = require('tape');
var asana = require('../index');
var _ = require('lodash');
var util = require('./util');




/** ====================== INITIALIZE ====================== */




//use allowedFields data inside lib objects as a reference
var task = require('../lib/api/task.js');
var user = require('../lib/api/user.js');
var tag = require('../lib/api/tag.js');
var project = require('../lib/api/project.js');
var allowedFields = ['id'];
var allowedProjectFields = ['id'];
var allowedTagFields = ['id'];
var allowedUserFields = ['id'];
_.map(task._fields,function(item){
    allowedFields.push(item.replace(/@required/,''));
});
_.map(project._fields,function(item){
    allowedProjectFields.push(item.replace(/@required/,''));
});
_.map(tag._fields,function(item){
    allowedTagFields.push(item.replace(/@required/,''));
});
_.map(user._fields,function(item){
    allowedUserFields.push(item.replace(/@required/,''));
});
var api;
var createdTask;
var createdSubTask;
var userMe;

test('=== Task - initialize ===',function(t){
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
            t.equal(util.validObject(data,allowedUserFields),true,'Valid object format.');
            userMe = data.id;
            t.pass('(callback) User.me - ended');
        }
    });
});

test('(callback) Tasks (workspace)',function(t){
    api.tasks({workspace:process.env.workspace,assignee:'me'},function(err,data){
        if(err){
            t.error(err,'(callback) Tasks - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.notEqual(data.length,0,'Array is not empty');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Tasks - ended');
            t.end();
        }
    });
});

test('(callback) Task.list(workspace)',function(t){
    api.task.list({workspace:process.env.workspace,assignee:'me'},function(err,data){
        if(err){
            t.error(err,'(callback) Task.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,3,'Array has 3 tasks');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Task.list - ended');
            t.end();
        }
    });
});

test('(callback) Task.list(project)',function(t){
    api.task.list({project:process.env.projects.split(',')[0]},function(err,data){
        if(err){
            t.error(err,'(callback) Task.list - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,1,'Array has 1 task');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Task.list - ended');
            t.end();
        }
    });
});

test('(callback) Task.create',function(t){
    t.plan(4);
    var name = 'task4';
    api.task.create({name:name,workspace:process.env.workspace,notes:'created through the API',assignee:'me'},function(err,data){
        if(err){
            t.error(err,'(callback) Task.create - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            createdTask = data.id;
            t.equal(data.name,name,'Task title is correct');
            t.pass('(callback) Task.create - ended');
        }
    });
});

test('(callback) Task.addProject',function(t){
    //task needs to be created!
    t.plan(2);
    api.task.addProject(createdTask,{project:Number(process.env.projects.split(',')[2])},function(err,data){
        if(err){
            t.error(err,'(callback) Task.addProject - invalid request');
        }else{
            t.equal(_.isEmpty(data),true,'Object is empty = success.');
            t.pass('(callback) Task.addProject - ended');
        }
    });
});

test('(callback) Task.projects',function(t){
    api.task.projects(createdTask,function(err,data){
        if(err){
            t.error(err,'(callback) Task.projects - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,1,'Array exist of 1 task');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedProjectFields),true,'Valid object format.');
            });
            t.pass('(callback) Task.projects - ended');
            t.end();
        }
    });
});

test('(callback) Task.removeProject',function(t){
    t.plan(2);
    api.task.removeProject(createdTask,{project:Number(process.env.projects.split(',')[2])},function(err,data){
        if(err){
            t.error(err,'(callback) Task.removeProject - invalid request');
        }else{
            t.equal(_.isEmpty(data),true,'Object is empty = success.');
            t.pass('(callback) Task.removeProject - ended');
        }
    });
});

test('(callback) Task.addSubtask',function(t){
    t.plan(4);
    var name = 'subtask1';
    api.task.create({name:name,workspace:process.env.workspace,notes:'created through the API',parent:createdTask},function(err,data){
        if(err){
            t.error(err,'(callback) Task.addSubtask - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            createdSubTask = data.id;
            t.equal(data.name,name,'SubTask title is correct');
            t.pass('(callback) Task.addSubtask - ended');
        }
    });
});

test('(callback) Task.subtasks',function(t){
    api.task.subtasks(createdTask,function(err,data){
        if(err){
            t.error(err,'(callback) Task.subtasks - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,1,'Array has 1 subtask');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedFields),true,'Valid object format.');
            });
            t.pass('(callback) Task.subtasks - ended');
            t.end();
        }
    });
});

test('(callback) Task.id',function(t){
    t.plan(3);
    api.task.id(createdTask,function(err,data){
        if(err){
            t.error(err,'(callback) Task.id - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Task.id - ended');
        }
    });
});

test('(callback) Task.update',function(t){
    var name = 'adjustedTask4';
    t.plan(4);
    api.task.update(createdTask,{name:name},function(err,data){
        if(err){
            t.error(err,'(callback) Task.update - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.equal(data.name,name,'Title is changed');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Task.update - ended');
        }
    });
});

test('(callback) Task.addTag',function(t){
    t.plan(2);
    api.task.addTag(createdTask,{tag:Number(process.env.tags.split(',')[0])},function(err,data){
        if(err){
            t.error(err,'(callback) Task.addTag - invalid request');
        }else{
            t.equal(_.isEmpty(data),true,'Object is empty = success.');
            t.pass('(callback) Task.addTag - ended');
        }
    });
});

test('(callback) Task.tags',function(t){
    api.task.tags(createdTask,function(err,data){
        if(err){
            t.error(err,'(callback) Task.tags - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,1,'Array has 1 tag');
            _.each(data,function(item){
                t.equal(util.validObject(item,allowedTagFields),true,'Valid object format.');
            });
            t.pass('(callback) Task.tags - ended');
            t.end();
        }
    });
});

test('(callback) Task.removeTag',function(t){
    t.plan(2);
    api.task.removeTag(createdTask,{tag:Number(process.env.tags.split(',')[0])},function(err,data){
        if(err){
            t.error(err,'(callback) Task.removeTag - invalid request');
        }else{
            t.equal(_.isEmpty(data),true,'Object is empty = success.');
            t.pass('(callback) Task.removeTag - ended');
        }
    });
});

test('(callback) Task.removeParentTask',function(t){
    t.plan(3);
    api.task.removeParentTask(createdSubTask,function(err,data){
        if(err){
            t.error(err,'(callback) Task.removeParentTask - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Task.removeParentTask - ended');
        }
    });
});

test('(callback) Task.subtasks (empty)',function(t){
    api.task.subtasks(createdTask,function(err,data){
        if(err){
            t.error(err,'(callback) Task.subtasks - invalid request');
        }else{
            t.equal(_.isArray(data),true,'Is an Array');
            t.equal(data.length,0,'Array has no subtasks');
            t.pass('(callback) Task.subtasks - ended');
            t.end();
        }
    });
});

test('(callback) Task.addParentTask',function(t){
    t.plan(3);
    api.task.addParentTask(createdSubTask,{parent:createdTask},function(err,data){
        if(err){
            t.error(err,'(callback) Task.addParentTask - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Task.addParentTask - ended');
        }
    });
});

test('(callback) Task.removeFollower',function(t){
    t.plan(3);
    api.task.removeFollower(createdTask,{followers:[userMe]},function(err,data){
        if(err){
            t.error(err,'(callback) Task.removeFollower - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Task.removeFollower - ended');
        }
    });
});

test('(callback) Task.addFollower',function(t){
    t.plan(3);
    api.task.addFollower(createdTask,{followers:[userMe]},function(err,data){
        if(err){
            t.error(err,'(callback) Task.addFollower - invalid request');
        }else{
            t.equal(util.validObject(data,allowedFields),true,'Valid object format.');
            t.notEqual(_.isEmpty(data),true,'Object is not empty');
            t.pass('(callback) Task.addFollower - ended');
        }
    });
});

test('(callback) Task.remove',function(t){
    t.plan(2);
    api.task.remove(createdTask,function(err,data){
        if(err){
            t.error(err,'(callback) Task.remove - invalid request');
        }else{
            t.equal(_.isEmpty(data),true,'Object is empty = success.');
            t.pass('(callback) Task.remove - ended');
        }
    });
});




/** ====================== STREAMING ====================== */


// will put the effort of streaming into using a mock setup, to speed things up, like Nock.