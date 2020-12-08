# right-click
>A JavaScript library for creating custom right click menus.  
![GitHub repo size](https://img.shields.io/github/repo-size/dluxy/right-click?color=blue&label=size)
![Finished](https://img.shields.io/badge/finished-no-green)
![GitHub top language](https://img.shields.io/github/languages/top/dluxy/right-click?color=red)
---
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
>To switch back, use `menu.enable()` or `menu.enabled = "custom"`.  
>To disable all context menus, use `menu.disable()` or `menu.enabled = "none"`.