class NodesDrawer {
    constructor(drawer, parent) {
        this.dragNode = null;
        this.selectedNodes = [];
        this.movingNodes = [];
        this.drawer = drawer;
        this.parent = parent;
        this.circleRadius = 8.5;
        this.fLetter = this.drawer.defs().path(fSymbol);
        this.eventArrow = this.drawer.defs().path(eventArrow);
        this.pinCircle = this.drawer.defs().circle(this.circleRadius);
        this.pinArrow = this.drawer.defs().polygon([
            [this.circleRadius * 1.5, this.circleRadius / 2],
            [this.circleRadius * 1.2, this.circleRadius / 2 - this.circleRadius / 4],
            [this.circleRadius * 1.2, this.circleRadius / 2 + this.circleRadius / 4],
            [this.circleRadius * 1.5, this.circleRadius / 2]
        ]);
        this.opacityLinearGradient = this.drawer.gradient('linear', function (stop) {
            stop.at({offset: 0, color: '#a0a0a0', opacity: 1});
            stop.at({offset: 0.03, color: '#5f5f5f', opacity: 0.3});
            stop.at({offset: 0.8, color: '#636363', opacity: 0.3});
            stop.at({offset: 1, color: '#ffffff', opacity: 1});
        });
        this.opacityLinearGradient.from(0, 1).to(0, 0);
    }
    renderNodes(nodes) {
        var draw = this.drawer.group();
        for (var i = 0; i < nodes.length; i++) {
            var currentNode = nodes[i];
            currentNode.calculateWidth();
            currentNode.draw(this);
            var node = currentNode.allNode;
            node.translate(currentNode.x, currentNode.y);
            draw.add(node);
            this.makeUnselectable(currentNode.allNode);
            this.subscribeNode(currentNode);
            currentNode.pins.forEach(function (pin) {
                pin.draw.style('cursor', 'default');
                pin.draw.mouseover(function (e) {
                    if (!this.dragNode)
                        pin.hover.show();
                });
                pin.draw.mouseout(function (e) {
                    pin.hover.hide();
                });
            })
        }

        return draw;
    }
    subscribeNode(el) {
        var self = this;
        if (el instanceof CommentNode) {
            //console.log(el);
            el.selectable.mousedown(function (event) {
                if (event.button === 0) {
                    //console.log('SELECTABLE');

                    self.dragNode = el;
                    var delta = self.parent.getCoords(event);
                    self.nodeMouseDownPoint = self.parent.getCoords(event);
                    var sub = delta.subtract(self.parent.origin);
                    self.pointOnNode = new Vector(sub.x - self.dragNode.x * self.parent.currentScale, sub.y - self.dragNode.y * self.parent.currentScale);
                    //console.log(pointOnNode);


                }
                if (event.button === 0) {
                    event.stopPropagation();
                }
            });
        } else {
            el.allNode.mousedown(function (event) {
                if (event.button === 0) {

                    self.dragNode = el;
                    var delta = self.parent.getCoords(event);
                    self.nodeMouseDownPoint = self.parent.getCoords(event);
                    var sub = delta.subtract(self.parent.origin);
                    self.pointOnNode = new Vector(sub.x - self.dragNode.x * self.parent.currentScale, sub.y - self.dragNode.y * self.parent.currentScale);
                    //console.log(pointOnNode);


                }
                if (event.button === 0) {
                    event.stopPropagation();
                }
            });
        }


        if (el instanceof CommentNode) {
            el.selectable.mouseup(function (event) {
                var mouseUpPoint = self.parent.getCoords(event)
                if (event.button === 0) {
                    self.movingNodes = [];
                    if (self.nodeMouseDownPoint.equals(mouseUpPoint))
                    {
                        if (!self.isNodeSelected(el) || event.ctrlKey) {
                            self.selectNode(el, event);
                        } else if (self.selectedNodes.length > 1) {
                            self.selectOneNode(el);
                        }
                    }


                    self.dragNode = null;
                }

            });
        } else {
            el.allNode.mouseup(function (event) {
                var mouseUpPoint = self.parent.getCoords(event)
                if (event.button === 0) {
                    self.movingNodes = [];
                    if (self.nodeMouseDownPoint.equals(mouseUpPoint))
                    {
                        if (!self.isNodeSelected(el) || event.ctrlKey) {
                            self.selectNode(el, event);
                        } else if (self.selectedNodes.length > 1) {
                            self.selectOneNode(el);
                        }
                    }
                    self.dragNode = null;
                }

            });
        }
    }
    makeUnselectable(node) {
        if (node.node)
            node = node.node;
        if (node.nodeType === 1) {
            if (node.tagName === "text" || node.tagName === "tspan")
                node.setAttribute("style", node.getAttribute("style") + "; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;");
        }
        var child = node.firstChild;
        while (child) {
            this.makeUnselectable(child);
            child = child.nextSibling;
        }
    }
    isNodeSelected(el) {
        return this.selectedNodes.indexOf(el) !== -1;
    }
    selectAllNodes() {
        var self = this;
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.parent.nodesObjects.forEach(function (node) {
            node.hover.show();
            self.selectedNodes.push(node);
        });
        //console.log('len', selectedNodes.length);
    }

    selectOneNode(el) {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.selectedNodes[0] = el;
        this.selectedNodes.forEach(function (node) {
            if (node.hover.visible()) {
                node.hover.hide();
            } else {
                node.hover.show();
            }
        })
    }
    selectNodeGroup(group) {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.selectedNodes = group;
        this.selectedNodes.forEach(function (node) {
            node.hover.show();
        })
    }
    addNodeGroupToSelect(group) {
        var self = this;
        group.forEach(function (node) {
            if (self.selectedNodes.indexOf(node) === -1) {
                self.selectedNodes.push(node);
                node.hover.show();
            }
        });
    }
    selectNode(el, event) {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });

        if (this.selectedNodes.indexOf(el) === -1) {
            if (event.shiftKey) {
                this.selectedNodes.push(el);
            } else if (event.ctrlKey) {
                this.selectedNodes.push(el);
            } else {
                this.selectedNodes.splice(0, this.selectedNodes.length);
                this.selectedNodes[0] = el;
            }
        } else if (event.ctrlKey) {
            this.selectedNodes.splice(this.selectedNodes.indexOf(el), 1);
        } else {
            this.selectedNodes.splice(this.selectedNodes.indexOf(el), 1);
        }



        this.selectedNodes.forEach(function (node) {
            if (node.hover.visible()) {
                node.hover.hide();
            } else {
                node.hover.show();
            }
        })
    }
    unselectAllNodes() {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });
        this.selectedNodes.splice(0, this.selectedNodes.length);
    }
}