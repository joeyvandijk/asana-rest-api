module.exports = function(){
    return require('./story').list.apply(this.story,arguments);
};