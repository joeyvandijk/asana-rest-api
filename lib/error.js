var read = require('./read');

//TODO prevent override of values
var error = {
    _list:[],
    available: function(){
        if(this._list.length > 0){
            return true;
        }else{
            return false;
        }
    },
    store: function(type, value){
        console.log('## ERROR ##',type,value);
        this._list.push({type:type,value:value});
    },
    response: function(options){
        console.log('## ERRORS ##',this._list)
        if(options.streaming){
            var self = this;
            var p = new read();
            //timeout needed for using the streams2 setup with an error message
            setTimeout(function(){
                var i = 0;
                var il = self._list.length;
                while(i<il){
                    var item = self._list[i];
                    p.emit('error',new Error(item.type+' : '+item.value));
                    i++;
                }
            },10);
            return p;
        }else{
            return options.callback(this._list);
        }
    }
};

module.exports = error;