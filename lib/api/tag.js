var validate = require('./../validate');

var call = {
    _fields: ['created_at','followers','name','color','notes','workspace'],
    _taskFields: ['assignee','assignee_status','created_at','completed','completed_at','due_on','followers','hearted','hearts','modified_at','name','notes','num_hearts','projects','parent','workspace'],
    _createBody: ['name','color','notes','workspace@required'],
    _updateBody: ['name','color','notes'],
    _key: function(){},
    /**
     * @apiVersion 0.6.0
     * @api {get} api.tag.id(); {}.id
     * @apiName id
     * @apiDescription Retrieve a single tag.
     * @apiGroup Tag
     * @apiGroupDescription A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
     *
     * @apiParam {Number} id Tag identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['created_at','followers','name','color','notes','workspace']*
     *
     * @apiExample Streaming example:
     *  api.tag.id(1234567890).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.tag.id(1234567890,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TagSuccess
     */
    id : function get(){
        return validate(arguments,{method:'get',path:'/tags/@0',name:'tag.id',allowedFields:this._fields,responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {get} api.tag.list(); {}.list / api.tags
     * @apiName list
     * @apiDescription Retrieve a list of (filtered) tags.
     * @apiGroup Tag
     *
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['created_at','followers','name','color','notes','workspace']*
     *
     * @apiExample Streaming example:
     *  api.tag.list().on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Streaming workspace example:
     *  api.tag.list({workspace:1234567890}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.tag.list(function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TagsSuccess
     */
    list : function list(){
        if(arguments.length > 0 && arguments[0].workspace){
            return validate(arguments,{method:'get',path:'/workspaces/@0/tags',id:'workspace',name:'tag.list',allowedFields:this._fields,key:this._key()});
        }else{
            return validate(arguments,{method:'get',path:'/tags',name:'tag.list',allowedFields:this._fields,key:this._key()});
        }
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.tag.create(); {}.create
     * @apiName create
     * @apiDescription Create a tag.
     * @apiGroup Tag
     *
     * @apiParam {Object} object Options object.
     * @apiParam {String} [object.name] Title of the tag.
     * @apiParam {String} [object.color] Color code the tag with *dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray*.
     * @apiParam {String} [object.notes] Description of the tag field.
     * @apiParam {Number} object.workspace Workspace identifier to connect tag with.
     * @apiParam {String[]} [object.fields] Override default return fields : *['created_at','followers','name','color','notes','workspace']*
     *
     * @apiExample Streaming example:
     *  api.tag.create({name:'Tag1',color:'light-orange',notes:'some information about this project',workspace:912345678}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.tag.create({name:'Tag1',color:'light-orange',notes:'some information about this project',workspace:912345678},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TagSuccess
     */
    create: function(){
        return validate(arguments,{method:'post',path:'/tags',name:'tag.create',allowedFields:this._fields,responseType:1,optionsType:'body',allowedOptions:this._createBody,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {put} api.tag.update(); {}.update
     * @apiName update
     * @apiDescription Update a tag.
     * @apiGroup Tag
     *
     * @apiParam {Number} id Tag identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {String} [object.name] Title of the tag.
     * @apiParam {String} [object.color] Color code the tag with *dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray*.
     * @apiParam {String} [object.notes] Description of the tag field.
     * @apiParam {String[]} [object.fields] Override default return fields : *['created_at','followers','name','color','notes','workspace']*.
     *
     * @apiExample Streaming example:
     *  api.tag.update(1234567890,{name:'Tag1',color:'light-orange',notes:'some information about this project',workspace:912345678}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.tag.update(1234567890,{name:'Tag1',color:'light-orange',notes:'some information about this project',workspace:912345678},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TagSuccess
     */
    update: function(){
        return validate(arguments,{method:'put',path:'/tags/@0',name:'tag.update',allowedFields:this._fields,responseType:1,optionsType:'body',allowedOptions:this._updateBody,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {get} api.tag.tasks(); {}.tasks
     * @apiName tasks
     * @apiDescription Retrieve a list of tasks where a tag is used.
     * @apiGroup Tag
     *
     * @apiParam {Number} id Tag identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['assignee', 'assignee_status', 'created_at', 'completed', 'completed_at', 'due_on', 'followers', 'hearted', 'hearts', 'modified_at', 'name', 'notes', 'num_hearts', 'projects', 'parent', 'workspace']*
     *
     * @apiExample Streaming example:
     *  api.tag.tasks(1234567890).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.tag.tasks(1234567890,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure TasksSuccess
     */
    tasks : function(){
        return validate(arguments,{method:'get',path:'/tags/@0/tasks',name:'tag.tasks',allowedFields:this._taskFields,key:this._key()});
    }
};
module.exports = call;