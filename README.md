# BackgroundJS plugin for Cordova / PhoneGap

This Plugin is inspired from phonegap-backgroundjs plugin

[here](https://github.com/jocull/phonegap-backgroundjs)

Now you can background JavaScript operations on iOS with PhoneGap!

## Usage

Example Usage: 

1. **Run in the background indefinitely:**

```js
window.plugins.BackgroundJS.LockBackgroundTime(function(){}, function(msg){alert(msg);});
```

2. **Get a block of seconds:**

```js
window.plugins.BackgroundJS.SetBackgroundSeconds(10);
```

3. **Stop running background tasks immediately:**

```js
window.plugins.BackgroundJS.UnlockBackgroundTime();
```

## Installation for Cordova 3.0.0

phonegap local plugin add https://github.com/hazemhagrass/BackgroundJS


## Notes:
Be careful when using this, as Apple specifications are picky. If you're not using background audio or tracking location, your app may be rejected for background tasking guidelines. Read up, and write some code!

ALSO... Please don't kill my battery life just because you backgrounded more than you had to. You're not a special snowflake (yet) so play by the rules. Code smart, and make your app work right!