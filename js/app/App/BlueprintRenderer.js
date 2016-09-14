document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});
var BlueprintRenderer = Class({
    drawerHeight: 0,
    drawerWidth: 0,
    svgContainer: null,
    currentScaleStep: 0,
    grid: null,
    currentScale: 1,
    blueprintObjects: [],
    nodesObjects: [],
    mainDrawer: null,
    linksDrawer: null,
    nodesDrawer: null,
    interfaceDrawer: null,
    origin: null,
    config: null,
    layersContainer: null,
    linksLayer: null,
    nodesLayer: null,
    current: null,
    constructor: function (domNodeId) {
        this.svgContainerId = domNodeId;
        this.svgCointainerNode = document.getElementById(domNodeId);
        this.origin = new Vector(0, 0);
        this.config = {
        }
    },
    renderFromText: function (bpText) {
        this.parse(bpText);
    },
    renderFromFile: function (bpFileName) {
        var client = new XMLHttpRequest();
        var self = this;
        client.open('GET', bpFileName);
        client.onreadystatechange = function () {
            if (client.readyState === 4 && client.status === 200)
            {
                if (client.responseText)
                    self.parse(client.responseText);
            }
        }
        client.send();
    },
    parse: function (bpText) {
        var parser = new BPParser(bpText);
        this.blueprintObjects = parser.parseText();
        this.draw();
    },
    getCoords: function (e) {
        var can = this.svgCointainerNode;
        var x, y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        x -= can.offsetLeft;
        y -= can.offsetTop;
        return new Vector(x, y);
    },
    draw: function () {
        this.drawerWidth = window.innerWidth;
        this.drawerHeight = window.innerHeight;
        this.mainDrawer = SVG(this.svgContainerId).size(this.drawerWidth, this.drawerHeight).spof();
        this.linksDrawer = new LinksDrawer(this.mainDrawer);
        this.nodesDrawer = new NodesDrawer(this.mainDrawer, this);
        this.interfaceDrawer = new InterfaceDrawer(this.mainDrawer);

        this.nodesObjects = this.nodesObjects.concat(BPToNodes(this.blueprintObjects));
        this.layersContainer = this.mainDrawer.group();
        this.linksLayer = this.layersContainer.group();
        var nodesDraw = this.drawNodes(this.nodesObjects);
        var links = this.linksDrawer.renderNodes(this.nodesObjects);
        links.back();
        this.layersContainer = this.mainDrawer.group();
        this.linksLayer = this.layersContainer.group();
        this.nodesLayer = this.layersContainer.group();
        this.drawGrid();
        this.linksLayer.back();
        this.linksLayer.add(links);
        this.nodesLayer.add(nodesDraw);
        this.interfaceDrawer.render();
        var self = this;
        this.interfaceDrawer.setSaveCallback(function (e) {
            //var elem = document.body; // Make the body go full screen.
            //requestFullScreen(elem);
            // this.grid.width(7552);
            //this.grid.height(4272);
            var xmlns = "http://www.w3.org/2000/xmlns/";
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.innerHTML = self.mainDrawer.svg();

            svg.setAttribute("version", "1.1");
            if (!svg.getAttribute('xmlns')) {
                svg.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
            }
            if (!svg.getAttribute('xmlns:xlink')) {
                svg.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
            }
            svgAsDataUri(svg, {}, function (uri) {
                var a = document.createElement('a');
                a.download = "blueprint.svg";
                a.href = uri;
                document.body.appendChild(a);
                a.addEventListener("click", function (e) {
                    a.parentNode.removeChild(a);
                });
                a.click();
            });
        });

        this.interfaceDrawer.setFullScreenCallback(function (e) {
            var elem = document.body; // Make the body go full screen.
            self.requestFullScreen(elem);
        });

        var self = this;
        this.svgCointainerNode.addEventListener('wheel', function (e) {
            self.wheelHandler(e);
        }, false);
        this.svgCointainerNode.addEventListener('contextmenu', function (ev) {
            ev.preventDefault();
            return false;
        }, false);
        this.subscribeMainDrawer();
        this.subscribeDocument();
    },
    subscribeDocument: function () {
        var self = this;
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
                var newNodes = BPToNodes(newObjects, self.currentCursorPos);
                self.nodesObjects = self.nodesObjects.concat(newNodes);

                var links = self.linksDrawer.renderNodes(newNodes)
                self.linksLayer.add(links);

                self.nodesLayer.add(self.drawNodes(newNodes));
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
                self.nodesDrawer.selectAllNodes();
                evt.preventDefault();
            } else if (evt.ctrlKey && evt.keyCode === 67) {
                document.getElementById('copyContainer').innerHTML = '';
                self.nodesDrawer.selectedNodes.forEach(function (item) {
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
    },
    subscribeMainDrawer: function () {
        var self = this;
        this.mainDrawer.mousedown(function (e) {
            if (e.button === 2) {
                self.interfaceDrawer.removeSelectRect();
                self.rightButtonDown = true;
            } else if (e.button === 0 && !e.shiftKey) {
                self.nodesDrawer.unselectAllNodes();
            } else if (e.button === 1) {
                e.preventDefault();
                return;
            }
            self.clickPoint = self.getCoords(e);
        });
        this.mainDrawer.mouseup(function (e) {
            if (e.button === 1) {
                e.preventDefault();
                return;
            }
            self.rightButtonDown = false;
            self.origin.x = self.layersContainer.x();
            self.origin.y = self.layersContainer.y();
            self.dragStart = false;
            self.clickPoint = null;
            self.interfaceDrawer.removeSelectRect();
        });
        this.mainDrawer.mousemove(function (e) {

            self.currentCursorPos = self.getCoords(e).subtract(self.origin).divide(self.currentScale);
            if (self.rightButtonDown) {
                var delta = self.getCoords(e).subtract(self.clickPoint);
                self.grid.updatePattern(self.origin.x + delta.x, self.origin.y + delta.y, self.currentScale);
                self.layersContainer.move(self.origin.x + delta.x, self.origin.y + delta.y);
            }



            if (self.nodesDrawer.dragNode !== null && (e.button === 0)) {

                var delta = self.getCoords(e);
                if (!self.nodesDrawer.isNodeSelected(self.nodesDrawer.dragNode)) {
                    self.nodesDrawer.selectNode(self.nodesDrawer.dragNode, e);
                }

                var newPos = new Vector(delta.x - self.nodesDrawer.pointOnNode.x - self.origin.x, delta.y - self.nodesDrawer.pointOnNode.y - self.origin.y).divide(self.currentScale);
                newPos = self.getNearestCell(newPos.x, newPos.y)
                var deltaPos = new Vector(newPos.x - self.nodesDrawer.dragNode.allNode.x(), newPos.y - self.nodesDrawer.dragNode.allNode.y());
                self.nodesDrawer.dragNode.allNode.move(newPos.x, newPos.y);
                if (!self.dragStart) {
                    if (self.nodesDrawer.dragNode instanceof CommentNode) {
                        //console.log('is instance');
                        self.nodesObjects.forEach(function (nodeItem) {
                            if (inNode(self.nodesDrawer.dragNode, nodeItem) && nodeItem !== self.nodesDrawer.dragNode && self.nodesDrawer.selectedNodes.indexOf(nodeItem) === -1) {
                                self.nodesDrawer.movingNodes.push(nodeItem);
                            }
                        });
                    }


                    self.nodesDrawer.selectedNodes.forEach(function (node) {
                        if (node instanceof CommentNode && node !== self.nodesDrawer.dragNode) {
                            self.nodesObjects.forEach(function (nodeItem) {
                                if (inNode(node, nodeItem) && nodeItem !== node && self.nodesDrawer.selectedNodes.indexOf(nodeItem) === -1) {
                                    self.nodesDrawer.movingNodes.push(nodeItem);
                                }
                            });
                        }
                    });
                    self.dragStart = true;
                }



                self.nodesDrawer.selectedNodes.forEach(function (node) {
                    if (node !== self.nodesDrawer.dragNode) {
                        node.allNode.dmove(deltaPos.x, deltaPos.y);
                        node.x = node.allNode.x();
                        node.y = node.allNode.y();
                    }
                });
                self.nodesDrawer.movingNodes.forEach(function (node) {
                    if (node !== self.nodesDrawer.dragNode) {
                        node.allNode.dmove(deltaPos.x, deltaPos.y);
                        node.x = node.allNode.x();
                        node.y = node.allNode.y();
                    }
                });
                self.nodesDrawer.dragNode.x = self.nodesDrawer.dragNode.allNode.x();
                self.nodesDrawer.dragNode.y = self.nodesDrawer.dragNode.allNode.y();
                var affectedNodes = self.nodesDrawer.selectedNodes.concat(self.nodesDrawer.movingNodes);
                self.linksDrawer.redrawNodes(affectedNodes);
                // self.linksLayer.add(self.links);
            }
            if (!self.nodesDrawer.dragNode && self.clickPoint && !self.rightButtonDown) {
                var endPoint = self.getCoords(e);
                self.interfaceDrawer.drawSelectRect(self.clickPoint, self.getCoords(e));
                var rect = {};
                rect.x = (self.clickPoint.x < endPoint.x) && self.clickPoint.x || endPoint.x;
                rect.y = (self.clickPoint.y < endPoint.y) && self.clickPoint.y || endPoint.y;
                rect.width = Math.abs(endPoint.x - self.clickPoint.x);
                rect.height = Math.abs(endPoint.y - self.clickPoint.y);
                rect.x -= self.origin.x;
                rect.y -= self.origin.y;
                var group = [];
                self.nodesObjects.forEach(function (nodeItem) {
                    if (nodeItem instanceof CommentNode) {
                        if (intersectNodeSelectable(rect, nodeItem, self.currentScale, self.interfaceDrawer, self.origin)) {
                            group.push(nodeItem);
                        }
                    } else {
                        if (intersectNode(rect, nodeItem, self.currentScale, self.interfaceDrawer, self.origin)) {
                            group.push(nodeItem);
                        }
                    }
                })
                //console.log(group);
                if (!e.shiftKey)
                    self.nodesDrawer.selectNodeGroup(group);
                else {
                    //console.log('add group');
                    self.nodesDrawer.addNodeGroupToSelect(group);
                }

            }

        });
    },
    wheelHandler: function (e) {
        var sign = e.deltaY > 0 && -1 || 1;
        var newScaleStep = this.currentScaleStep + sign;
        if (newScaleStep >= -12 && newScaleStep <= 7) {
            var newScale = this.currentScale + sign * 0.08;
            var point = this.getCoords(e).subtract(this.origin).divide(this.currentScale);
            var deltaScale = newScale - this.currentScale;
            var offsetX = -((point.x) * deltaScale);
            var offsetY = -((point.y) * deltaScale);
            this.layersContainer.scale(newScale);
            this.layersContainer.move(this.origin.x, this.origin.y);
            this.layersContainer.dmove(offsetX, offsetY);
            this.origin.x = this.layersContainer.x();
            this.origin.y = this.layersContainer.y();
            this.currentScaleStep = newScaleStep;
            this.interfaceDrawer.setScaleLabelText(this.currentScaleStep);
            this.currentScale = newScale;
            this.grid.gridPattern.scale(this.currentScale);
            this.grid.updatePattern(this.origin.x, this.origin.y, this.currentScale);
        }
    },
    drawNodes: function (nodes) {
        var nodesDraw = this.nodesDrawer.renderNodes(nodes);
        return nodesDraw;
    },
    drawGrid: function () {
        this.grid = new Grid(this.mainDrawer, this.drawerWidth, this.drawerHeight);
    },
    setupListeners: function () {

    },
    getNearestCell: function (x, y) {
        return new Vector(Math.floor(x / CONFIG["GRID_STEP"]) * CONFIG["GRID_STEP"], Math.floor(y / CONFIG["GRID_STEP"]) * CONFIG["GRID_STEP"]);
    },
    requestFullScreen: function (element) {
        // Supports most browsers and their versions.
        if (this.isFullScreen) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            this.isFullScreen = false;
        } else {
            var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
            this.isFullScreen = true;
            if (requestMethod) { // Native full screen.
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }

    }
});