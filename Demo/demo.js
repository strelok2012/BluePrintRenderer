window.addEventListener("load", function () {
	var render = new BlueprintRenderer('bluePrintRenderer');
	render.renderFromFile("https://raw.githubusercontent.com/strelok2012/BluePrintRenderer/master/tests/file_big.txt");
}, false);
