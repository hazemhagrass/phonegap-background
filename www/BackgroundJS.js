/**
 * @constructor
 */
var BackgroundJS = function(){};

// Plug in to Cordova
cordova.addConstructor(function() {

    if (!window.Cordova) {
        window.Cordova = cordova;
    };


    if(!window.plugins) window.plugins = {};
    window.plugins.BackgroundJS = new BackgroundJS();
});

BackgroundJS.prototype.PInvoke = function(method, data, callbackOK, callbackError){
    if(data == null || data === undefined){ // `false` and `0` are valid values!
            data = [];
        }
        else if(!Array.isArray(data)){
            data = [data];
        }
        cordova.exec(callbackOK, callbackError, this.PluginName, method, data);
};

BackgroundJS.prototype.SetBackgroundSeconds = function(method, data, callbackOK, callbackError){
    BackgroundJS.PInvoke("setBackgroundSeconds", seconds, callbackOK, callbackError);
};

BackgroundJS.prototype.LockBackgroundTime = function(callbackOK, callbackError){
    BackgroundJS.PInvoke("lockBackgroundTime", null, callbackOK, callbackError);
};

BackgroundJS.prototype.UnlockBackgroundTime = function(callbackOK, callbackError){
    BackgroundJS.PInvoke("unlockBackgroundTime", null, callbackOK, callbackError);
};
