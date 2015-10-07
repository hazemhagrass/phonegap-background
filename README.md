#  phonegap-background plugin for Cordova / PhoneGap

This Plugin is inspired from [phonegap-backgroundjs](https://github.com/jocull/phonegap-backgroundjs) plugin

Now you can background JavaScript operations on iOS with PhoneGap!

## Usage

Example Usage: 

1. **Run in the background infinitely:**

```js
var timerCount = 0;
window.plugins.BackgroundJS.LockBackgroundTime(function(){}, function(msg){console.log(msg);});
setInterval(function() {
$('body').html(timerCount++);
},1000);
```

2. **Run in the background for specific amount of time(seconds):**

```js
var seconds = 10;
window.plugins.BackgroundJS.SetBackgroundSeconds(seconds, function(){}, function(msg){console.log(msg);});
```

3. **Stop running background tasks immediately:**

```js
window.plugins.BackgroundJS.UnlockBackgroundTime(function(){}, function(msg){console.log(msg);});
```

## Installation 

for Cordova >= 3.0.0

phonegap local plugin add https://github.com/hazemhagrass/phonegap-background.git

cordova plugin add https://github.com/hazemhagrass/phonegap-background.git

for Cordova >= 5.0.0

cordova plugin add com-badrit-backgroundjs


This has been successfully tested on Cordova 3.0 to 3.1.


## Notes:
Be careful when using this, as Apple specifications are picky. If you're not using background audio or tracking location, your app may be rejected for background tasking guidelines. Read up, and write some code!

ALSO... Please don't kill my battery life just because you backgrounded more than you had to. You're not a special snowflake (yet) so play by the rules. Code smart, and make your app work right!

## MIT Licence

Copyright 2013 Monday Consulting GmbH

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
