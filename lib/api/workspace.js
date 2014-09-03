var validate = require('./../validate');

var call = {
    _fields: ['name@required','is_organization'],
    _key: function(){},
    /**
     * @apiVersion 0.6.0
     * @api {get} api.workspace.list(); {}.list / api.workspaces
     * @apiName list
     * @apiDescription Retrieve a list of (filtered) workspaces.
     * @apiGroup Workspace
     * @apiGroupDescription A workspace is the most basic organizational unit in Asana. All projects and tasks have an associated workspace.
     *
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['name','is_organization']*
     *
     * @apiExample Streaming example:
     *  api.workspace.list().on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.workspace.list(function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessTitle (response) Success response objects ~ Array/Event
     * @apiSuccess (response) {Object} workspace Workspace information.
     * @apiSuccess (response) {String} workspace.id Workspace identifier.
     * @apiSuccess (response) {String} workspace.name Title field.
     * @apiSuccess (response) {Boolean} workspace.is_organization If the workspace is an Organization (a workspace with extra functionality).
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     [{
     *       "id": 1234567890,
     *       "name": "John Doe",
     *       "is_organization": false
     *     }]
     */
    list : function list(){
        return validate(arguments,{method:'get',path:'/workspaces',name:'workspace.list',allowedFields:this._fields,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {put} api.workspace.update(); {}.update
     * @apiName update
     * @apiDescription Update a workspace title.
     * @apiGroup Workspace
     *
     * @apiParam {Number} id Workspace identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {String} object.name The new title of the workspace.
     * @apiParam {String[]} [object.fields] Override default return fields : *['name','is_organization']*
     *
     * @apiExample Streaming example:
     *  api.workspace.update(1234567890,{name:'new title'}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.workspace.update(1234567890,{name:'new title'},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccess {Object} workspace Workspace information.
     * @apiSuccess {Number} workspace.id Workspace identifier.
     * @apiSuccess {String} workspace.name Title field.
     * @apiSuccess {Boolean} workspace.is_organization If the workspace is an Organization (a workspace with extra functionality).
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": 1234567890,
     *       "name": "New Title"
     *       "is_organization": false
     *     }
     */
    update: function update(){
        return validate(arguments,{method:'put',path:'/workspaces/@0',name:'workspace.update',allowedFields:this._fields,allowedOptions:['name'],responseType:1,optionsType:'body',key:this._key()});
    }
};
module.exports = call;