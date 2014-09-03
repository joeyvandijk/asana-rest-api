var validate = require('./../validate');

var call = {
    _fields: ['name'],
    _key: function(){},
    /**
     * @apiVersion 0.6.0
     * @api {get} api.team.list(); {}.list / api.teams
     * @apiName list
     * @apiDescription Retrieve a list of (filtered) teams.
     * @apiGroup Team
     * @apiGroupDescription A team is used to group related projects and people together within an organization.
     *
     * @apiParam {Number} id Organization identifier.
     * @apiParam {Object} [object] Options object.
     * @apiParam {String[]} [object.fields] Override default return fields : *['name']*
     *
     * @apiExample Streaming example:
     *  api.team.list(1234567890).on('readable',function(){
     *    console.log('Data:',this.read());
     *  }).on('end',function(){
     *    console.log('Response received.');
     *  }).on('error',function(err){
     *    console.log('An error occurred: ',err);
     *  });
     * @apiExample Callback example:
     *  api.team.list(1234567890,function(err,data){
     *      if(err){
     *          console.log('An error occurred:',err);
     *      }else{
     *          console.log('Data:',data);
     *      }
     *  });
     *
     * @apiSuccessTitle (response) Success response objects ~ Array/Event
     * @apiSuccess (response) {Object} team Team information.
     * @apiSuccess (response) {Number} team.id Team identifier.
     * @apiSuccess (response) {String} team.name Title field.
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     [{
     *       "id": 2345678901,
     *       "name": "Team1"
     *     },
     *     {
     *       "id": 2345678091,
     *       "name": "Team2"
     *     }]
     */
    list : function list(){
        //retrieve all teams in a certain organization
        return validate(arguments,{method:'get',path:'/organizations/@0/teams',name:'team.list',allowedFields:this._fields,key:this._key()});
    }
};
module.exports = call;