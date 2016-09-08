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

document.addEventListener('dragstart', function (e) {
    e.preventDefault();
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



function draw() {
    nodes = nodes.concat(BPToNodes(objects));
    //console.log('nodes', nodes);
    drawerWidth = window.innerWidth;
    drawerHeight = window.innerHeight;

    mainDrawer = SVG('svgContainer').size(drawerWidth, drawerHeight).spof();
    linksDrawer = new LinksDrawer(mainDrawer);


    nodesDrawer = new NodesDrawer(mainDrawer);
    var nodesDraw = drawNodes(nodes);

    var links = linksDrawer.renderNodes(nodes);

    interfaceDrawer = new InterfaceDrawer(nodes, mainDrawer);




    links.back();




    //	interface.front();


    uberGroup = mainDrawer.group();
    linksLayer = uberGroup.group();
    nodesLayer = uberGroup.group();




    drawGrid(gridCoeff);
    linksLayer.back();
    linksLayer.add(links);
    nodesLayer.add(nodesDraw);

    uberGroup.add(linksLayer);
    uberGroup.add(nodesLayer);


    var interface = interfaceDrawer.render();

    interfaceDrawer.setSaveCallback(function (e) {
        //var elem = document.body; // Make the body go full screen.
        //requestFullScreen(elem);
        /*grid.width(7552);
         grid.height(4272);
         console.log(grid);
         var xmlns = "http://www.w3.org/2000/xmlns/";
         var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
         svg.innerHTML = mainDrawer.svg();
         svg.setAttribute("version", "1.1");
         if (!svg.getAttribute('xmlns')) {
         svg.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
         }
         if (!svg.getAttribute('xmlns:xlink')) {
         svg.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
         }
         svgAsDataUri(svg, {}, function (uri) {
         var a = document.createElement('a');
         a.download = "KUBLA.svg";
         a.href = uri;
         document.body.appendChild(a);
         a.addEventListener("click", function (e) {
         a.parentNode.removeChild(a);
         });
         a.click();
         });*/
    });


    //grid.back();


    mainDrawer.mousemove(function (e) {

        currentCursorPos = getCoords(e).subtract(origin).divide(currentScale);

        if (rightButtonDown) {
            var delta = getCoords(e).subtract(clickPoint);
            updatePattern(origin.x + delta.x, origin.y + delta.y);
            uberGroup.move(origin.x + delta.x, origin.y + delta.y);
        }



        if (dragNode !== null && (e.button === 0)) {

            var delta = getCoords(e);
            if (!isNodeSelected(dragNode)) {
                selectNode(dragNode, e);
            }

            var newPos = new Vector(delta.x - pointOnNode.x - origin.x, delta.y - pointOnNode.y - origin.y).divide(currentScale);
            newPos = getNearestCell(newPos.x, newPos.y)
            var deltaPos = new Vector(newPos.x - dragNode.allNode.x(), newPos.y - dragNode.allNode.y());
            dragNode.allNode.move(newPos.x, newPos.y);



            if (!dragStart) {
                if (dragNode instanceof CommentNode) {
                    //console.log('is instance');
                    nodes.forEach(function (nodeItem) {
                        if (inNode(dragNode, nodeItem) && nodeItem !== dragNode && selectedNodes.indexOf(nodeItem) === -1) {
                            console.log('push to moving in foreach', nodeItem);
                            movingNodes.push(nodeItem);
                        }
                    });
                }


                selectedNodes.forEach(function (node) {
                    if (node instanceof CommentNode && node !== dragNode) {
                        nodes.forEach(function (nodeItem) {
                            if (inNode(node, nodeItem) && nodeItem !== node && selectedNodes.indexOf(nodeItem) === -1) {
                                movingNodes.push(nodeItem);
                            }
                        });
                    }
                });
                dragStart = true;
            }



            selectedNodes.forEach(function (node) {
                if (node !== dragNode) {
                    node.allNode.dmove(deltaPos.x, deltaPos.y);
                    node.x = node.allNode.x();
                    node.y = node.allNode.y();
                }
            });



            movingNodes.forEach(function (node) {
                if (node !== dragNode) {
                    node.allNode.dmove(deltaPos.x, deltaPos.y);
                    node.x = node.allNode.x();
                    node.y = node.allNode.y();
                }
            });


            dragNode.x = dragNode.allNode.x();
            dragNode.y = dragNode.allNode.y();

            var affectedNodes = selectedNodes.concat(movingNodes);
            linksDrawer.redrawNodes(affectedNodes);

            /*linksLayer.each(function (i, children) {
             this.remove();
             });
             links = linksDrawer.renderNodes(nodes);
             links.back();*/

            linksLayer.add(links);
            //	console.log('delta', delta);
        }

        if (!dragNode && clickPoint && !rightButtonDown) {
            var endPoint = getCoords(e);
            interfaceDrawer.drawSelectRect(clickPoint, getCoords(e));
            var rect = {};
            rect.x = (clickPoint.x < endPoint.x) && clickPoint.x || endPoint.x;
            rect.y = (clickPoint.y < endPoint.y) && clickPoint.y || endPoint.y;

            rect.width = Math.abs(endPoint.x - clickPoint.x);
            rect.height = Math.abs(endPoint.y - clickPoint.y);


            rect.x -= origin.x;
            rect.y -= origin.y;

            var group = [];
            nodes.forEach(function (nodeItem) {
                if (nodeItem instanceof CommentNode) {
                    if (intersectNodeSelectable(rect, nodeItem, currentScale, interfaceDrawer, origin)) {
                        group.push(nodeItem);
                    }
                } else {
                    if (intersectNode(rect, nodeItem, currentScale, interfaceDrawer, origin)) {
                        group.push(nodeItem);
                    }
                }
            })
            //console.log(group);
            if (!e.shiftKey)
                selectNodeGroup(group);
            else {
                //console.log('add group');
                addNodeGroupToSelect(group);
            }

        }

    });

    mainDrawer.mousedown(function (e) {
        //console.log(e.button);
        if (e.button === 2) {
            interfaceDrawer.removeSelectRect();
            rightButtonDown = true;
        } else if (e.button === 0 && !e.shiftKey) {
            unselectAllNodes();
        }
        clickPoint = getCoords(e);
    });

    mainDrawer.mouseup(function (e) {
        rightButtonDown = false;
        origin.x = uberGroup.x();
        origin.y = uberGroup.y();
        dragStart = false;
        clickPoint = null;
        interfaceDrawer.removeSelectRect();
    });


    //var elem = document.body; // Make the body go full screen.
    //requestFullScreen(elem);

}

function getNearestCell(x, y) {
    return new Vector(Math.floor(x / gridStep) * gridStep, Math.floor(y / gridStep) * gridStep);
}

var gridPattern;

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
