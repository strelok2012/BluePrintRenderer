# Blue Print Renderer

Current features:

 * Blueprints rendering like UE4 Blueprint Editor
 * Saving result as SVG
 * Pasting blueprints with Ctrl+V

This is a very early version, not for production.

Usage:
* Include library - `<script src="/dist/blueprint-renderer.js"></script>`
* Add some css:
```html
* { margin:0; padding:0; }
html, body { width:100%; height:100%;}
body {overflow: hidden;}
#svgContainer {
	-webkit-user-select:none;
	-khtml-user-select:none;
	-moz-user-select:none;
	-ms-user-select:none;
	-o-user-select:none;
	user-select:none;
}
```
* Add to `body` section:
```html
	<div id="bluePrintRenderer"></div>
```
* Add code:

```javascript
window.addEventListener("load", function () {
	var render = new BlueprintRenderer('bluePrintRenderer');
	render.renderFromFile("tests/file_big.txt")
}, false);
```
* Result:
![alt tag](https://raw.githubusercontent.com/strelok2012/BluePrintRenderer/master/demo/screen.png)

* Online demo:
[http://jsfiddle.net/strelok2012/zfjqjozq/embedded/result/](http://jsfiddle.net/strelok2012/zfjqjozq/embedded/result/)

### Based on:

 * [svg.js](https://github.com/wout/svg.js)
 * [jsface](https://github.com/tnhu/jsface)
