module.exports = function(){
    return require('./user').list.apply(this.user,arguments);
};