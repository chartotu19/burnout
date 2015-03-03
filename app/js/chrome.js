var chromeActions = (function(){

    var _updateTabStats = function(){
    
        console.log(chrome.tabs.getAllinWindow());
    }
    
    var _init = function(){
    
        _updateTabStats();
    }
    
    return{
   
        init:_init,
        updateTabStats:_updateTabStats
    
    }

})();
