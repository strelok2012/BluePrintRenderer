window.addEventListener("load", onLoad, false);

var objects = [];
var nodes = [];
var dragNode = null;
var interfaceDrawer = null;
var rightButtonDown = false;
var clickPoint = null;
var uberGroup = null;
var nodeMouseDownPoint;
var grid = null;
var linksSvg = null;
var origin = new Vector(0, 0);
var currentScale = 1;
var scaleStep = 0;
var gridStep = 16;
var selectedNodes = [];
var gridCoeff = 3;
var drawerWidth, drawHeight;
var mainDrawer;
var linksDrawer;
var pointOnNode = null;
var dragStart = false;
var nodeClicked = false;
var movingNodes = [];
var nodesDrawer;
var currentCursorPos;
var linksLayer, nodesLayer;



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



document.addEventListener('paste', function (e) {

    var pastedText = undefined;
    if (window.clipboardData && window.clipboardData.getData) { // IE
        pastedText = window.clipboardData.getData('Text');
    } else if (e.clipboardData && e.clipboardData.getData) {
        pastedText = e.clipboardData.getData('text/plain');
    }

    var parser = new BPParser(pastedText);
    var newObjects = parser.parseText();
    if (newObjects) {
        var newNodes = BPToNodes(newObjects, currentCursorPos);
        nodes = nodes.concat(newNodes);
        nodesLayer.add(drawNodes(newNodes));
        var links = linksDrawer.renderNodes(newNodes)
        linksLayer.add(links);
    } else {
        console.log('Parse error');
    }
    return false; // Prevent the default handler from running.
});


document.addEventListener('copy', function (e) {
    return false;
});


document.onkeydown = function (evt) {
    evt = evt || window.event;
    console.log(evt.keyCode);
    if (evt.ctrlKey && evt.keyCode === 65) {
        selectAllNodes();
        evt.preventDefault();
    } else if (evt.ctrlKey && evt.keyCode === 67) {
        document.getElementById('copyContainer').innerHTML = '';
        selectedNodes.forEach(function (item) {
            document.getElementById('copyContainer').innerHTML += item.x + ",";
        });
        var doc = document
                , text = doc.getElementById('copyContainer')
                , range, selection
                ;
        if (doc.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(text);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
        document.getElementById('copyContainer').innerHTML = '';
    }
};


function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}
