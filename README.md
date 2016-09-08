# Blue Print Renderer

Current features:

 * Blueprints rendering like UE4 Blueprint Editor
 * Saving result as SVG
 * Pasting blueprints with Ctrl+V

This is a very early version, not for production.

Usage:
* Include dependencies - [jsface](https://github.com/tnhu/jsface) and [svg.js](https://github.com/wout/svg.js)
* Connect library - now it splitten to several files, but i concat it soon
* Add to your HTML (will generates programmatically soon):
```html
<div id="contenteditable" contenteditable></div>
<div id="svgContainer"></div>
<div id="tmpSvgContainer"></div>
<div id="copyContainer"></div>
```
* Add code:

```javascript
window.addEventListener("load", function () {
	var render = new BlueprintRenderer('svgContainer');
	render.renderFromFile("PATH_TO_BLUEPRINT_IN_TXT")
    //OR
    render.renderFromText("BLUEPRINT_TEXT")
}, false);
```
* Result:
![alt tag](https://raw.githubusercontent.com/strelok2012/BluePrintRenderer/master/demo/screen.png)


### Based on:

 * [svg.js](https://github.com/wout/svg.js)
 * [jsface](https://github.com/tnhu/jsface)
