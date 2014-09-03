var validate = require('./../validate');

var call = {
    _fields: ['archived','created_at','followers','modified_at','name','color','notes','workspace','team'],
    _listFields: ['archived','workspace'],
    _taskFields: ['assignee','assignee_status','created_at','completed','completed_at','due_on','followers','hearted','hearts','modified_at','name','notes','num_hearts','projects','parent','workspace'],
    _createBody: ['archived','name','color','notes','workspace@required','team'],
    _updateBody: ['archived','name','color','notes'],
    _key: function(){},
    /**
     * @apiVersion 0.6.0
     * @api {get} api.project.id(); {}.id
     * @apiName id
     * @apiDescription Retrieve a single project.
     * @apiGroup Project
     * @apiGroupDescription A project represents a prioritized list of tasks in Asana. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization depending on its permissions.
     *
     * @apiParam {Number} id Project identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['archived','created_at','followers','modified_at','name','color','notes','workspace','team']*
     *
     * @apiExample Streaming example:
     *  api.project.id(1234567890).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.project.id(1234567890,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure ProjectSuccess
     */
    id : function get(){
        return validate(arguments,{method:'get',path:'/projects/@0',name:'project.id',allowedFields:this._fields,responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {get} api.project.list(); {}.list / api.projects
     * @apiName list
     * @apiDescription Retrieve a list of (filtered) projects.
     * @apiGroup Project
     *
     * @apiParam {Object} [object] Options object.
     * @apiParam {Number} [object.workspace] Workspace identifier.
     * @apiParam {Number} [object.archived] If project is archived or not.
     * @apiParam {String[]} [object.fields] Override default return fields : *['archived','created_at','followers','modified_at','name','color','notes','workspace','team']*
     *
     * @apiExample Streaming example:
     *  api.project.list().on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Streaming workspace example:
     *  api.project.list({workspace:1234567890}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.project.list(,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure ProjectsSuccess
     */
    list : function list(){
        if(arguments.length > 0 && arguments[0].workspace){
            return validate(arguments,{method:'get',path:'/workspaces/@0/projects',id:'workspace',name:'project.list',allowedFields:this._fields,allowedOptions:this._listFields,key:this._key()});
        }else{
            return validate(arguments,{method:'get',path:'/projects',name:'project.list',allowedFields:this._fields,allowedOptions:this._listFields,key:this._key()});
        }
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.project.create(); {}.create
     * @apiName create
     * @apiDescription Create a project.
     * @apiGroup Project
     *
     * @apiParam {Object} object Options object.
     * @apiParam {Boolean} [object.archived] Project is archived or not.
     * @apiParam {String} [object.name] Title of the project.
     * @apiParam {String} [object.color] Color code the project with *dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray*.
     * @apiParam {String} [object.notes] Description of the project field.
     * @apiParam {Number} object.workspace Workspace identifier to connect project with.
     * @apiParam {Number} [object.team] If workspace is an organization provide the team identifier which is connected to this project.
     * @apiParam {String[]} [object.fields] Override default return fields : *['archived','created_at','followers','modified_at','name','color','notes','workspace','team']*
     *
     * @apiExample Streaming example:
     *  api.project.create({archived:false,name:'Project2',color:'light-orange',notes:'some information about this project',workspace:912345678}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.project.create({archived:false,name:'Project2',color:'light-orange',notes:'some information about this project',workspace:912345678},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure ProjectSuccess
     */
    create: function(){
        //TODO team is needed when workspace is an organization!
        //TODO you will be assigned as follower!
        return validate(arguments,{method:'post',path:'/projects',name:'project.create',allowedFields:this._fields,allowedOptions:this._createBody,optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {put} api.project.update(); {}.update
     * @apiName update
     * @apiDescription Update a project.
     * @apiGroup Project
     *
     * @apiParam {Number} id Project identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {Boolean} [object.archived] Project is archived or not.
     * @apiParam {String} [object.name] Title of the project.
     * @apiParam {String} [object.color] Color code the project with *dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray*.
     * @apiParam {String} [object.notes] Description of the project field.
     * @apiParam {String[]} [object.fields] Override default return fields : *['archived','created_at','followers','modified_at','name','color','notes','workspace','team']*
     *
     * @apiExample Streaming example:
     *  api.project.update(889012345679,{name:'Project4',color:'dark-blue',notes:'some other information about this project'}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.project.update(889012345679,{name:'Project4',color:'dark-blue',notes:'some other information about this project'},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure ProjectSuccess
     */
    update: function(){
        return validate(arguments,{method:'put',path:'/projects/@0',name:'project.update',allowedFields:this._fields,allowedOptions:this._updateBody,optionsType:'body',responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {delete} api.project.remove(); {}.remove
     * @apiName remove
     * @apiDescription Remove a project.
     * @apiGroup Project
     *
     * @apiParam {Number} id Project identifier.
     *
     * @apiExample Streaming example:
     *  api.project.remove(889012345679).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.project.remove(889012345679,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure EmptySuccess
     */
    remove: function(){
        return validate(arguments,{method:'delete',path:'/projects/@0',name:'project.remove',allowedFields:[],responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {get} api.project.tasks(); {}.tasks
     * @apiName tasks
     * @apiDescription Retrieve a list of task which is connected with a specific project.
     * @apiGroup Project
     *
     * @apiParam {Number} id Project identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.project.tasks(1234567890).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.project.tasks(1234567890,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TasksSuccess
     */
    tasks: function(){
        return validate(arguments,{method:'get',path:'/projects/@0/tasks',name:'project.tasks',allowedFields:this._taskFields,key:this._key()});
    }
};
module.exports = call;