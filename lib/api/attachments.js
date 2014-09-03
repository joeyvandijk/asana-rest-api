module.exports = function(){
    return require('./attachment').list.apply(this.attachment,arguments);
};