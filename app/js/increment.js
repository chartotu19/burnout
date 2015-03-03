(function(){
    
    var counter_handle = {
        
        hours_div:document.querySelector('.b-hours'),
        min_div:document.querySelector('.b-minutes'),
        sec_div:document.querySelector('.b-seconds')
    
    }
    
    
    var updateCounter = function(){
        var _now = new Date();
        if(typeof burnout.settings !== 'undefined'){
            if(_now.getHours() > burnout.settings.bedtimeH ){
                burnout.bedtime();
            }
            //burnout.updateState();

            var _hour = burnout.settings.bedtimeH -_now.getHours();
            _hour = ("0"+_hour).slice(-2);
            var _minutes = burnout.settings.bedtimeM -_now.getMinutes();
            _minutes = ("0"+_minutes).slice(-2);
            var _seconds = burnout.settings.bedtimeS -_now.getSeconds();
            _seconds = ("0"+_seconds).slice(-2);
            counter_handle.hours_div.innerHTML = _hour; 
            counter_handle.min_div.innerHTML = _minutes;
            counter_handle.sec_div.innerHTML = _seconds; 
        }
    }
    updateCounter();
    setInterval(updateCounter,1000);
})();

