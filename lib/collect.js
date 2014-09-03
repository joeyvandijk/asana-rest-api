module.exports = function(result,cb){
    var list = [];
    result.on('readable',function(){
        list.push(this.read());
    });
    result.on('end',function(){
        cb(null,list);
    });
    result.on('error',function(err){
        cb(new Error('Could not retrieve data from your request: '+err.toString()));
    });
}