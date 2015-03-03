var user = (function(){

    var _settings = {};

    var that = this;

    var _init = function(){
        //check localstorage for settings
        var _user_id = localStorage.getItem('burnout-user-id');
        //If user exists, populate the settings
        if(_user_id){
            this.set('user_id',_user_id);
        } else {
            //generate a random user id
            _user_id=Math.round(Math.random(0,13)*1000000).toString(16);
            this.set('user_id',_user_id);
            //localstorage should subscribe to settings change. @TODO
            localStorage.setItem('burnout-user-id',_user_id);
        }
    }
    var _get = function(key){
             return typeof _settings[key] !== 'undefined' ? _settings[key]:false;
        }
    

    var _set = function(key,val){
             if(val){
                 _settings[key] = val; 
                 this.pushSettings();
             }
         }

    // method to update user settings at any point of time from localstorage
    var _updateSettings = function(){
        var _settings = localStorage.getItem(this.get('user_id'));

        _settings = JSON.parse(_settings);

        $.each(_settings,function(i,v){
            //update and override current user settings
            this.set(i,v);
        });
    }

    var _pushSettings = function(){
        if(_settings['user_id'])
            localStorage.setItem(_settings['user_id'],JSON.stringify(_settings));
        else
            return false;
    }

    var _resetSettings = function(){}
    return{
        init:_init,
        get: _get,
        set: _set,
        updateSettings:_updateSettings,
        resetSettings: _resetSettings,
        pushSettings:_pushSettings
    }

})();
