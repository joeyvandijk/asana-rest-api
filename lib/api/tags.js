module.exports = function(){
    return require('./tag').list.apply(this.tag,arguments);
};