var validate = require('./../validate');

var call = {
    _fields: ['id','name'],
    _params: ['type@required','query@required','count'],
    _key: function(){},
    /**
     * @apiVersion 0.6.0
     * @api {get} api.typeahead.search(); {}.search
     * @apiName search
     * @apiDescription Typeahead functionality with focus on speed and not features (pagination) in a single workspace.
     * @apiGroup Typeahead
     * @apiGroupDescription The typeahead search API allows you to query for objects from a single workspace and retrieves read only information that can be used for creating auto-completion/typeahead search.
     *
     * @apiParam {Number} id Workspace identifier.
     * @apiParam {Object} object Options object.
     * @apiParam {String} object.type Possible values are: ```project```, ```user```, ```task```, or ```tag```.
     * @apiParam {String} object.query Value to search for.
     * @apiParam {Number} [object.count] Number of items to return. No pagination available. (1 - 100)
     *
     * @apiExample Streaming example:
     *  api.typeahead.search(123456789,{type:'user',query:'John',count:10}).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.typeahead.search(123456789,{type:'user',query:'John',count:10},function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessTitle (response) Success response objects ~ Array/Event
     * @apiSuccess (response) {Object} object Match information.
     * @apiSuccess (response) {String} object.id Match identifier.
     * @apiSuccess (response) {String} object.name Title field.
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     [{
     *       "id": 1234567890,
     *       "name": "John Doe"
     *     }]
     */
    search : function search(){
        return validate(arguments,{method:'get',path:'/workspaces/@0/typeahead',name:'typeahead.search',allowedOptions:this._params,optionsType:'params',key:this._key()});
    }
};
module.exports = call;