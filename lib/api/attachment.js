var validate = require('./../validate');

var call = {
    _fields: ['created_at','download_url','host','name','parent','view_url'],
    _createBody: ['file','name'],
    _key: function(){},
    /**
     * @apiVersion 0.6.0
     * @api {get} api.attachment.id(); {}.id
     * @apiName id
     * @apiDescription Retrieve a single attachment.
     * @apiGroup Attachment
     * @apiGroupDescription An attachment object represents any file attached to a task in Asana.
     *
     * @apiParam {Number} id Attachment identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['created_at','download_url','host','name','parent','view_url']*
     *
     * @apiExample Streaming example:
     *  api.attachment.id(1234567890).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.attachment.id(1234567890,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure AttachmentSuccess
     */
    id : function get(){
        //retrieve single story at a task
        return validate(arguments,{method:'get',path:'/attachments/@0',name:'attachment.id',allowedFields:this._fields,responseType:1,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {get} api.attachment.list(); {}.list / api.attachments / api.task.attachments
     * @apiName list
     * @apiDescription Retrieve a list of (filtered) attachments with a single task.
     * @apiGroup Attachment
     *
     * @apiParam {Number} id Task identifier to see all connected attachments.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['created_at','download_url','host','name','parent','view_url']*
     *
     * @apiExample Streaming example:
     *  api.attachment.list(1234567890).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.attachment.list(1234567890,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessStructure AttachmentsSuccess
     */
    list : function list(){
        return validate(arguments,{method:'get',path:'/tasks/@0/attachments',name:'attachment.list',allowedFields:this._fields,key:this._key()});
    },
    /**
     * @apiVersion 0.6.0
     * @api {post} api.attachment.create(); {}.create
     * @apiName create
     * @apiDescription Upload a file as an attachment to a task.
     * @apiGroup Attachment
     *
     * @apiParam {Number} id Task identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {String} object.file File path to upload.
     * @apiParam {String[]} [object.fields] Override default return fields : *['name']*
     *
     * @apiExample Streaming example:
     *  api.attachment.create(1234567890,{file:'./file1.png'}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.attachment.create(1234567890,{file:'./file1.png'},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccess {Object} attachment Attachment information.
     * @apiSuccess {Number} attachment.id Attachment identifier.
     * @apiSuccess {String} attachment.name Name of the file.
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "id": 2345678901,
     *       "name": "file1.png"
     *     }
     */
    create: function(){
        return validate(arguments,{method:'post',path:'/tasks/@0/attachments',name:'attachment.create',allowedFields:this._createBody,allowedOptions:['file'],optionsType:'body',upload:true,responseType:1,key:this._key()});
    }
};
module.exports = call;