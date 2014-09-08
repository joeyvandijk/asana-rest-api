var Readable = require('stream').Readable,
    util = require('util');

//ensure streams2 is used
function Read(){
    Readable.call(this,{objectMode:true});
}
util.inherits(Read, Readable);
Read.prototype._read = function(chunk){
    //keep open
};

module.exports = Read;