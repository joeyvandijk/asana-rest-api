var test = require('tape');
var util = require('./util');
var _ = require('lodash');
var asana = require('./../index.js');

var api;

function createListeners(stream,test,last,cb){
    stream.on('readable',function(){
        if(cb){
            cb(this.read(),last);
        }else{
            this.read();
        }
    }).on('end',function(){
        if(last && !cb){
            test.end();
        }
    }).on('error',function(err){
        test.error(err,'Fill error - xxx.create');
    });
}

test('=== initialize content ===',function(t){
    api = new asana(process.env.key);
    t.end();
});

function cleanup(param){
    if(param.charAt(param.length-1) === ','){
        return param.substring(0,param.length-1);
    }
    return param;
}

test('Fill workspace with projects',function(t){
    var list = [];
    api.project.list({workspace:process.env.workspace,fields:['name']}).on('readable',function(){
        list.push(this.read());
    }).on('end',function(){
        //case incensitive comparison
        var projects = ['project1','project2','project3'];
        process.env.projects = '';
        var diff = [];
        var i;
        _.each(projects,function(item){
            i = 0;
            var il = list.length;
            var found = false;
            while(i<il){
                if(item === list[i].name.toLowerCase()){
                    process.env.projects += list[i].id+',';
                    found = true;
                }
                i++;
            }
            if(!found){
                diff.push(item);
            }
        });

        i=0;
        t.plan(diff.length);
        _.each(diff,function(item){
            var last = false;
            if(i === diff.length - 1){
                //define last one, to end this test
                last = true;
            }
            t.test('. project'+i,function(t2){
                createListeners(api.project.create({name:item,notes:item+' description',workspace:Number(process.env.workspace)}),t2,last,function(data,lastItem){
                    process.env.projects += data.id+',';
                    t2.end();
                });
            });
            i++;
        });
        if(diff.length === 0){
            t.end();
        }
    }).on('error',function(err){
        t.error(err,'Fill error - projects');
    });
});

test('Fill workspace with tasks',function(t){
    process.env.projects = cleanup(process.env.projects);

    var list = [];
    api.task.list({workspace:process.env.workspace,fields:['name'],assignee:'me'}).on('readable',function(){
        list.push(this.read());
    }).on('end',function(){
            //case incensitive comparison
            var tasks = ['task1','task2','task3'];
            process.env.tasks = '';
            var diff = [];
            var i;
            _.each(tasks,function(item){
                i = 0;
                var il = list.length;
                var found = false;
                while(i<il){
                    if(item === list[i].name.toLowerCase()){
                        process.env.tasks += list[i].id+',';
                        found = true;
                    }
                    i++;
                }
                if(!found){
                    diff.push(item);
                }
            });

            i=0;
            t.plan(diff.length);
            var addToProject = false;
            _.each(diff,function(item){
                var last = false;
                if(i === diff.length - 1){
                    //define last one, to end this test
                    last = true;
                }
                t.test('. task'+i,function(t2){
                    var obj = {name:item,notes:item+' description',workspace:Number(process.env.workspace),assignee:'me'};
                    if(!addToProject){
                        addToProject = true;
                        obj.projects = [process.env.projects.split(',')[0]];
console.log('add to project1:',obj);
                    }
                    createListeners(api.task.create(obj),t2,last,function(data,lastItem){
                        process.env.tasks += data.id +',';
                        if(lastItem){
                            process.env.tasks = cleanup(process.env.tasks);
                        }
                        t2.end();
                    });
                });
                i++;
            });
            if(diff.length === 0){
                t.end();
            }
        }).on('error',function(err){
            t.error(err,'Fill error - tasks');
        });
});


test('Fill workspace with tags',function(t){
    //cleanup tasks
    process.env.tasks = cleanup(process.env.tasks);

    var tagsAttached = process.env.tasks.split(',').length;
    function attachTagToTask(){
        //ensure that all tasks have a different tag
        return Number(process.env.tasks.split(',')[--tagsAttached]);
    }

    var list = [];
    api.tag.list({workspace:process.env.workspace,fields:['name']}).on('readable',function(){
        list.push(this.read());
    }).on('end',function(){
        //case incensitive comparison
        process.env.tags = '';
        var tags = ['tag1','tag2','tag3'];
        var diff = [];
        var i;
        _.each(tags,function(item){
            i = 0;
            var il = list.length;
            var found = false;
            while(i<il){
                if(item === list[i].name.toLowerCase()){
                    process.env.tags += list[i].id+',';
                    found = true;
                }
                i++;
            }
            if(!found){
                diff.push(item);
            }
        });
        i=0;
        t.plan(diff.length);
        _.each(diff,function(item){
            var data;
            t.test('    .tag'+i,function(t2){
                api.tag.create({name:item,notes:item+' description',workspace:Number(process.env.workspace),fields:['id','name']}).on('readable',function(){
                    data = this.read();
                    process.env.tags += data.id+',';
                }).on('end',function(){
                    t2.plan(1);
                    t2.test('   task.addTag',function(t3){
                        //add task to it
                        api.task.addTag(attachTagToTask(),{tag:data.id},function(err,items){
                            if(err){
                                t3.error(err,'Could not attach tag ('+data.id+') to task');
                            }
                            t3.end();
                        });
                    });
                }).on('error',function(err){
                    t2.error(err,'Fill error - Tags.create');
                });
            });
            i++;
        });
        if(diff.length === 0){
            t.end();
        }
    }).on('error',function(err){
        t.error(err,'Fill error - tags');
    });
});

test.test('Cleanup tags',function(t){
    //ensure it will be done after all additions
    process.env.tags = cleanup(process.env.tags);
    console.log('PROJECTS:',process.env.projects);
    t.end();
})