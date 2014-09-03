var validate = require('./../validate');

var call = {
    _fields: ['assignee','assignee_status','created_at','completed','completed_at','due_on','followers','hearted','hearts','modified_at','name','notes','num_hearts','projects','parent','workspace','tags'],
    _stories: ['created_at','created_by','hearted','hearts','num_hearts','text','target','source','type'],
    _projects: ['archived','created_at','followers','modified_at','name','color','notes','workspace','team'],
    _tags: ['created_at','followers','name','color','notes','workspace'],
    _listProjectFields: ['assignee','project@required','workspace','completed_since','modified_since'],
    _listFields: ['assignee@required','project','workspace@required','completed_since','modified_since'],
    _projectBody: ['project@required','insert_after','insert_before'],
    _tagBody: ['tag@required'],
    _followerBody: ['followers'],
    _createBody: ['assignee','assignee_status','completed','due_on','hearted', 'name','notes','projects','workspace@required'],
    _updateBody: ['assignee','assignee_status','completed','due_on','hearted', 'name','notes'],
    _key: function(){},
    /**
     * @apiVersion 0.6.0
     * @api {get} api.task.id(); {}.id
     * @apiName id
     * @apiDescription Retrieve a single task.
     * @apiGroup Task
     * @apiGroupDescription The task is the basic object around which many operations in Asana are centered.
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.id(1234567890).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.id(1234567890,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TaskSuccess
     */
    id : function get(){
        return validate(arguments,{method:'get',path:'/tasks/@0',name:'task.id',allowedFields:this._fields,responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {get} api.task.list(); {}.list / api.tasks
     * @apiName list
     * @apiDescription Retrieve a list of (filtered) tasks.
     * @apiGroup Task
     *
     * @apiParam {Object} [object] Options object.
     * @apiParam {Number} [object.project] Project identifier. (```required``` solely when looking for tasks in 1 project)
     * @apiParam {Number} [object.workspace] Workspace identifier. (```assignee``` is then required)
     * @apiParam {Number} [object.assignee] User identifier that is assigned to the task. (```workspace``` is then required)
     * @apiParam {Number} [object.completed_since] Completion date like 2012-02-22T02:06:58.158Z .
     * @apiParam {Number} [object.modified_since] Modified date like 2012-02-22T02:06:58.158Z .
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.list().on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Streaming project example:
     *  api.task.list({project:1234567890}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.list(,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TasksSuccess
     */
    list : function list(){
        if(arguments.length > 0 && arguments[0].project){
            return validate(arguments,{method:'get',path:'/projects/@0/tasks',id:'project',name:'task.list',allowedFields:this._fields,allowedOptions:this._listProjectFields,optionsType:'params',key:this._key()});
        }else{
            return validate(arguments,{method:'get',path:'/tasks',name:'task.list',allowedFields:this._fields,allowedOptions:this._listFields,optionsType:'params',key:this._key()});
        }
    },
    attachments: function attachments(){
        return require('./attachment').list.apply(this._parent.attachment,arguments);
    },
    /**
     * @apiVersion 0.6.0
     * @api {get} api.task.subtasks(); {}.subtasks
     * @apiName subtasks
     * @apiDescription Retrieve a list of subtasks of a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.subtasks(5678901234).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.subtasks(5678901234,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TasksSuccess
     */
    subtasks: function subtasks(){
        return validate(arguments,{method:'get',path:'/tasks/@0/subtasks',name:'task.substask',allowedFields:this._fields,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.addParentTask(); {}.addParentTask
     * @apiName addParentTask
     * @apiDescription Add a parent task to a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {Number} object.parent Task identifier that will become the parent task.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.addParentTask(4567890123,{parent:6789012345}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.addParentTask(4567890123,{parent:6789012345},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TaskSuccess
     */
    addParentTask: function addParentTask(){
        return validate(arguments,{method:'post',path:'/tasks/@0/setParent',name:'task.addParentTask',allowedFields:this._fields,allowedOptions:['parent'],optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.removeParentTask(); {}.removeParentTask
     * @apiName removeParentTask
     * @apiDescription Remove a parent task from a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.removeParentTask(4567890123).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.removeParentTask(4567890123,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TaskSuccess
     */
    removeParentTask: function removeParentTask(){
        return validate(arguments,{method:'post',path:'/tasks/@0/setParent',name:'task.removeParentTask',allowedFields:[],body:{parent:'null'},responseType:1,key:this._key()});
    },
    stories: function stories(){
        return require('./story').list.apply(this._parent.story,arguments);
    },
    addStory: function addStory(){
        return require('./story').create.apply(this._parent.story,arguments);
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.projects(); {}.projects
     * @apiName projects
     * @apiDescription Retrieve a list of projects connected to a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.projects(4567890123).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.projects(4567890123,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure ProjectsSuccess
     */
    projects: function projects(){
        return validate(arguments,{method:'get',path:'/tasks/@0/projects',name:'task.projects',allowedFields:this._projects,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.addProject(); {}.addProject
     * @apiName addProject
     * @apiDescription Add a project to a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {Number} object.project Project identifier to connect task to.
     * @apiParam {Number} [object.insert_before] Project identifier to insert project property identifier before.
     * @apiParam {Number} [object.insert_after] Project identifier to insert project property identifier after.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.addProject(4567890123,{project:8901234567}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.addProject(4567890123,{project:8901234567},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure EmptySuccess
     */
    addProject: function addProject(){
        return validate(arguments,{method:'post',path:'/tasks/@0/addProject',name:'task.addProject',allowedFields:[],allowedOptions:this._projectBody,optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.removeProject(); {}.removeProject
     * @apiName removeProject
     * @apiDescription Remove a project from a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {Number} object.project Project identifier to remove from the task.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.removeProject(4567890123,{project:8901234567}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.removeProject(4567890123,{project:8901234567},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure EmptySuccess
     */
    removeProject: function removeProject(){
        return validate(arguments,{method:'post',path:'/tasks/@0/removeProject',name:'task.removeProject',allowedFields:[],allowedOptions:['project'],optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.tags(); {}.tags
     * @apiName tags
     * @apiDescription Retrieve a list of tags connected to a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.tags(4567890123).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.tags(4567890123,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TagsSuccess
     */
    tags: function tags(){
        return validate(arguments,{method:'get',path:'/tasks/@0/tags',name:'task.tags',allowedFields:this._tags,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.addTag(); {}.addTag
     * @apiName addTag
     * @apiDescription Add a tag to a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {Number} object.tag Tag identifier to connect to the task.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.addTag(4567890123,{tag:8901234567}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.addTag(4567890123,{tag:8901234567},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure EmptySuccess
     */
    addTag: function addTag(){
        return validate(arguments,{method:'post',path:'/tasks/@0/addTag',name:'task.addTag',allowedFields:[],allowedOptions:this._tagBody,optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.removeTag(); {}.removeTag
     * @apiName removeTag
     * @apiDescription Remove a tag from a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {Number} object.tag Tag identifier to remove from the task.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.removeTag(4567890123,{tag:8901234567}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.removeTag(4567890123,{tag:8901234567},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure EmptySuccess
     */
    removeTag: function removeTag(){
        return validate(arguments,{method:'post',path:'/tasks/@0/removeTag',name:'task.removeTag',allowedFields:[],allowedOptions:this._tagBody,optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.addFollower(); {}.addFollower
     * @apiName addFollower
     * @apiDescription Add a follower to a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {Number[]} object.followers User identifier to follow the task.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.addFollower(4567890123,{followers:[8901234567]}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.addFollower(4567890123,{followers:[8901234567]},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TaskSuccess
     */
    addFollower: function addFollower(){
        return validate(arguments,{method:'post',path:'/tasks/@0/addFollowers',name:'task.addFollower',allowedFields:[],allowedOptions:this._followerBody,optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.removeFollower(); {}.removeFollower
     * @apiName removeFollower
     * @apiDescription Remove a follower from a task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {Number[]} object.followers User identifier to remove from the task.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.removeFollower(4567890123,{followers:[8901234567]}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.removeFollower(4567890123,{followers:[8901234567]},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TaskSuccess
     */
    removeFollower: function removeFollower(){
        return validate(arguments,{method:'post',path:'/tasks/@0/removeFollowers',name:'task.removeFollower',allowedFields:[],allowedOptions:this._followerBody,optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.task.create(); {}.create
     * @apiName create
     * @apiDescription Create a (sub)task.
     * @apiGroup Task
     *
     * @apiParam {Object} object Options object.
     * @apiParam {Number/String} [object.assignee] User identifier or {String} 'me'.
     * @apiParam {String} [object.assignee_status] Scheduling status of this task for the user it is assigned to like ```inbox```, ```later```, ```today```,```upcoming```.
     * @apiParam {Boolean} [object.completed] If task is completed or not.
     * @apiParam {Date} [object.due_on] Due date for the task like '2012-03-26'.
     * @apiParam {Boolean} [object.hearted] If you want to give a heart to the task or not.
     * @apiParam {String} [object.name] Task name.
     * @apiParam {String} [object.notes] Task description.
     * @apiParam {String[]} [object.projects] Project identifiers where this task belongs to.
     * @apiParam {Number} object.workspace Workspace identifier to connect task with.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.create({name:'Task1',workspace:912345678}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.create({name:'Task1',workspace:912345678}},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TaskSuccess
     */
    create: function create(){
        if(arguments.length > 0 && arguments[0].parent){
            //subtask
            return validate(arguments,{method:'post',path:'/tasks/@0/subtasks',id:'parent',name:'task.create',allowedFields:this._fields,allowedOptions:this._createBody,optionsType:'body',responseType:1,key:this._key()});
        }else{
            return validate(arguments,{method:'post',path:'/tasks/',name:'task.create',allowedFields:this._fields,allowedOptions:this._createBody,optionsType:'body',responseType:1,key:this._key()});
        }
    },
    /**
     * @apiVersion 0.6.0
     * @api {put} api.task.update(); {}.update
     * @apiName update
     * @apiDescription Update a (sub)task.
     * @apiGroup Task
     *
     * @apiParam {Object} object Options object.
     * @apiParam {Number/String} [object.assignee] User identifier or {String} 'me'.
     * @apiParam {String} [object.assignee_status] Scheduling status of this task for the user it is assigned to like ```inbox```, ```later```, ```today```,```upcoming```.
     * @apiParam {Boolean} [object.completed] If task is completed or not.
     * @apiParam {Date} [object.due_on] Due date for the task like '2012-03-26'.
     * @apiParam {Boolean} [object.hearted] If you want to give a heart to the task or not.
     * @apiParam {String} [object.name] Task name.
     * @apiParam {String} [object.notes] Task description.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.update(4567890123,{name:'Task2'}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.update(4567890123,{name:'Task2'},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TaskSuccess
     */
    update: function update(){
        return validate(arguments,{method:'put',path:'/tasks/@0',name:'task.update',allowedFields:this._fields,allowedOptions:this._updateBody,optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {put} api.task.remove(); {}.remove
     * @apiName remove
     * @apiDescription Remove a (sub)task.
     * @apiGroup Task
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.task.remove(5678901234).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.task.remove(5678901234,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TaskSuccess
     */
    remove: function remove(){
        return validate(arguments,{method:'delete',path:'/tasks/@0',name:'task.remove',allowedFields:this._fields,responseType:1,key:this._key()});
    }
};
module.exports = call;