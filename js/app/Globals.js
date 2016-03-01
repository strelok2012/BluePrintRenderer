
var CanvasStack = Class({
	stack: [],
	constructor: function () {
	},
	resizeAll: function () {
		for (var i = 0; i < this.stack.length; i++) {
			this.stack[i].resize();
		}
	},
	addCanvas: function (canvas) {
		this.stack.push(canvas);
	}

});

var globalStack = new CanvasStack();


(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
				|| window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () {
				callback(currTime + timeToCall);
			},
					timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
}());


var VAR_TYPES = {
	bool: {code: 0, name: "bool"},
	byte: {code: 1, name: "byte"},
	int: {code: 2, name: "int"},
	float: {code: 3, name: "float"},
	name: {code: 4, name: "name"},
	string: {code: 5, name: "string"},
	text: {code: 6, name: "text"},
	vector: {code: 7, name: "vector"},
	rotator: {code: 8, name: "rotator"},
	transform: {code: 9, name: "transform"},
	actor: {code: 10, name: "actor"},
	event: {code: 11, name: "delegateOut"},
	object: {code: 12, name: "object"},
	class: {code: 13, name: "class"},
	struct: {code: 14, name: "struct"},
	exec: {code: 15, name: "exec"},
	interface: {code: 16, name: "interface"},
	macro: {code: 17, name: "macro"},
	delegate: {code: 18, name: "delegate"}
};

var VAR_COLORS = {
	bool: "#8c0202",
	byte: "#026960",
	int: "#1ed6a4",
	float: "#97ef42",
	name: "#c07bef",
	string: "#ef02c8",
	text: "#d975a0",
	vector: "#efbd22",
	rotator: "#97a9ef",
	transform: "#eb6b02",
	actor: "#02a2e9",
	execFunction: "#5b8fb1",
	execFunctionF: "#79c9ff",
	pureFunction: "#83b47c",
	pureFunctionF: "#aaeea0",
	event: "#8d1313",
	delegate: "#ff3838",
	object: "#0481b7",
	class: "#5501b3",
	struct: "#024bab",
	exec: "#fff",
	interface: "#c9d58f",
	macro: "#b7b4aa"
};


var createBezierPathT = function (startX, startY, control1X, control1Y, control2X, control2Y, endX, endY) {
	return 'C ' + control1X + ',' + control1Y + ', ' + control2X + ',' + control2Y + ', ' + endX + ',' + endY;
};


var fSymbol = "m 0,0 q -0.63477,0 -1.06201,-0.15259 l 0,-1.47705 q 0.37231,0.12818 0.7019,0.12818 0.83008,0 1.04981,-1.0376 l 1.13525,-5.3772 -1.02539,0 0.177,-0.90942 1.15357,-0.48828 0.10986,-0.5127 q 0.25024,-1.15967 0.84228,-1.69067 0.59815,-0.53711 1.67237,-0.53711 0.79956,0 1.43432,0.29907 l -0.48828,1.36719 q -0.42114,-0.18921 -0.81176,-0.18921 -0.34791,0 -0.56153,0.24414 -0.21362,0.24414 -0.28686,0.64087 l -0.0732,0.37842 1.33667,0 -0.29907,1.3977 -1.34277,0 -1.19629,5.65186 q -0.46997,2.2644 -2.46582,2.2644 z"


String.prototype.format = function () {
	var formatted = this;
	for (var i = 0; i < arguments.length; i++) {
		var regexp = new RegExp('\\{' + i + '\\}', 'gi');
		formatted = formatted.replace(regexp, arguments[i]);
	}
	return formatted;
};

String.prototype.fromCamelCase = function () {
	var newString = '';
	for (var i = 0; i < this.length; i++) {
		newString += this[i];
		if (isLetter(this[i]) && this[i + 1] && isLetter(this[i + 1])) {
			if (this[i].toLowerCase() === this[i] && this[i + 1].toUpperCase() === this[i + 1]) {
				newString += " ";
			}
		}
	}
	return newString.trim();
}

function assert(condition, message) {
	if (!condition) {
		message = message || "Assertion failed";
		if (typeof Error !== "undefined") {
			throw new Error(message);
		}
		throw message; // Fallback
	}
}


function isLetter(c) {
	return c.toLowerCase() !== c.toUpperCase();
}


var createBezierPath = function (startX, startY, control1X, control1Y, control2X, control2Y, endX, endY) {
	return 'M ' + startX + ',' + startY + ' C ' + control1X + ',' + control1Y + ', ' + control2X + ',' + control2Y + ', ' + endX + ',' + endY;
};

var createSmoothPath = function (startX, startY, endX, endY) {
	return 'M ' + startX + ',' + startY + ' S ' + startX + ',' + startY + ' ' + endX + ',' + endY;
};

