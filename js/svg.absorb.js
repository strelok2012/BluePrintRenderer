// svg.absorb.js 0.1.2 - Copyright (c) 2014 Wout Fierens - Licensed under the MIT license
;
(function () {
	SVG.Absorbee = SVG.invent({create: function (e) {
			this.node = e;
			this.type = e.localName;
			this.node.instance = this
		}, inherit: SVG.Element, construct: {absorb: function (e) {
				if (typeof e === "string") {
					var t, n = document.createElement("div");
					e = e.replace(/\n/, "").replace(/<(\w+)([^<]+?)\/>/g, "<$1$2></$1>");
					n.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + e + "</svg>";
					for (t = n.firstChild.childNodes.length - 1; t >= 0; t--)
						if (n.firstChild.childNodes[t].nodeType == 1)
							this.add(new SVG.Absorbee(n.firstChild.childNodes[t]), 0);
					n = null
				} else {
					this.add(new SVG.Absorbee(e))
				}
				return this
			}}})
}).call(this);