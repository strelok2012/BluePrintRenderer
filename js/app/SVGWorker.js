self.onmessage = function (event) {
	var svgString = event.data;
	var img = new Image();
	var now = new Date().getTime();
	var src = 'data:image/svg+xml;base64,' + window.btoa(svgString);
	console.log('To base64 time', new Date().getTime() - now);
	var promise = new Promise(function (resolve, reject) {
		img.onload = function () {
			resolve();
		};
		img.onerror = function (e) {
			reject();
		};
	});
	promise.then(function () {
		self.postMessage('Hi im ready');
	}, function () {
		self.postMessage('Hi im ready');
	});
	img.src = src;

};