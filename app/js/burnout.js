var burnout = (function(){
    //defaul settings
    var _settings_ = {
        bedtime:{h:22,m:59,s:59},
        sleepDuration:8    
    };
    var _init = function(options){

        _settings = options.user.getAll() || _settings; 

        //bind html.
        //subscribe to messages.
        //attach callbacks.
    }

    var _updateCounter = function(){
        var _now = new Date();
        if(typeof burnout.settings !== 'undefined'){
            if(_now.getHours() > burnout.settings.bedtimeH ){
                burnout.bedtime();
            }
            //burnout.updateState();

            var _hour = burnout.settings.bedtime.h -_now.getHours();
            _hour = ("0"+_hour).slice(-2);
            var _minutes = burnout.settings.bedtime.m -_now.getMinutes();
            _minutes = ("0"+_minutes).slice(-2);
            var _seconds = burnout.settings.bedtime.s -_now.getSeconds();
            _seconds = ("0"+_seconds).slice(-2);
            counter_handle.hours_div.innerHTML = _hour; 
            counter_handle.min_div.innerHTML = _minutes;
            counter_handle.sec_div.innerHTML = _seconds; 

            //subscribe to model change
        }
    }


    return{
        settings:_settings_,
        init:_init,
        updateCounter:_updateCounter
    }



})();
