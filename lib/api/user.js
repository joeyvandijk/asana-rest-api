var validate = require('./../validate');

var call = {
    _fields: ['name','email','workspaces','photo'],
    _key: function(){},
    /**
     * @apiVersion 0.6.0
     * @api {get} api.user.id(); {}.id
     * @apiName id
     * @apiDescription Retrieve a single user.
     * @apiGroup User
     * @apiGroupDescription A user object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
     *
     * @apiParam {Number} id User identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['name','email','photo','workspaces']*
     *
     * @apiExample Streaming example:
     *  api.user.id(1234567890).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.user.id(1234567890,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure UserSuccess
     */
    id : function get(){
        return validate(arguments,{method:'get',path:'/users/@0',name:'user.id',allowedFields:this._fields,responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.0.1
     * @api {get} api.user.list(); {}.list
     * @apiName list
     * @apiDescription Retrieve a list of (filtered) users.
     * @apiGroup User
     *
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['name','email','photo','workspaces']*
     * @apiParam {Number} [object.workspace] Workspace identifier to search users in a particular workspace.
     *
     * @apiExample Streaming example:
     *  api.user.list().on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Streaming workspace example:
     *  api.user.list({workspace:0123456789}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.user.list(function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure UsersSuccess
     */
    list : function list(){
        if(arguments.length > 0 && arguments[0].workspace){
            return validate(arguments,{method:'get',path:'/workspaces/@0/users',id:'workspace',name:'user.list',allowedFields:this._fields,key:this._key()});
        }else{
            return validate(arguments,{method:'get',path:'/users',name:'user.list',allowedFields:this._fields,key:this._key()});
        }
    },
    /**
     * @apiVersion 0.6.0
     * @api {get} api.user.me(); {}.me
     * @apiName me
     * @apiDescription Retrieve myself.
     * @apiGroup User
     *
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['name','email','photo','workspaces']*
     *
     * @apiExample Streaming example:
     *  api.user.me().on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.user.me(function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure UserSuccess
     */
    me: function me(){
        return validate(arguments,{method:'get',path:'/users/me',name:'user.me',allowedFields:this._fields,responseType:1,key:this._key()});
    }
};
module.exports = call;