module.exports = function(){
    return require('./team').list.apply(this.team,arguments);
};