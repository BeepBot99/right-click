# right-click
>A JavaScript library for creating custom right click menus.  
>This is curently under development. Check back later!
## Create a new menu
```js
var menu = new rightClickMenu(elem);
// elem = Element to detect right click. Leave blank for body.
```
## Edit the options
```js
menu.contextMenu = [
      {
        type:"url",
        value:"https://example.com",
        text:"URL"
      },
      {
        type:"javascript",
        value:"alert('Hello, World!')",
        text:"Javascript"
      },
      {
        type:"hr"
      }
    ];
```
>If not specified, will be set to the default (Shown above)   
## Debuging with the console
>By default, all progress will be sent to the console. This is useful for debuging. To turn this off, use `menu.consoleDebug = "false"`.   
## Disactivation
>By default, your custom menu is enabled. To use the default, use `menu.default()` or `menu.enabled = "default"`.  
>To switch back, use `menu.activate()` or `menu.enabled = "custom"`.  
>To disable all context menus, use `menu.disactivate()` or `menu.enabled = "none"`.
