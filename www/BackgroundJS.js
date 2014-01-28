 var BackgroundJS = function(){};

 BackgroundJS.prototype.PInvoke = function(method, data, callbackOK, callbackError){
   if(data == null || data === undefined) 
       data = [];
   else if(!Array.isArray(data))
       data = [data];

  if (device.platform == "iOS")
   cordova.exec(callbackOK, callbackError, 'BackgroundJS', method, data);
};

BackgroundJS.prototype.SetBackgroundSeconds = function(seconds, callbackOK, callbackError){
    window.plugins.BackgroundJS.PInvoke("setBackgroundSeconds", seconds, callbackOK, callbackError);
};

BackgroundJS.prototype.LockBackgroundTime = function(callbackOK, callbackError){
    window.plugins.BackgroundJS.PInvoke("lockBackgroundTime", null, callbackOK, callbackError);
};

BackgroundJS.prototype.UnlockBackgroundTime = function(callbackOK, callbackError){
   window.plugins.BackgroundJS.PInvoke("unlockBackgroundTime", null, callbackOK, callbackError);
};

cordova.addConstructor(function() {
    console.log('constractor');
    if (!window.Cordova) {
        window.Cordova = cordova;
    };


    if(!window.plugins) window.plugins = {};
    window.plugins.BackgroundJS = new BackgroundJS();
});