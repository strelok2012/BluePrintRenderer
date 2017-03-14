class LinksDrawer {
    constructor(drawer) {
        this.allNodes = [];
        this.controlOffset = 85;
        this.drawer = drawer;
        this.linksGroup = this.drawer.group();
    }
    renderNodes(nodes) {
        var draw = this.linksGroup;
        this.allNodes = this.allNodes.concat(nodes);
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].delegateOutput && nodes[i].delegateOutput.link) {
                this.drawPath(draw, nodes[i], nodes[i].delegateOutput, nodes[i].delegateOutput.color);
            }
            for (var j = 0; j < nodes[i].outputs.length; j++) {
                if (nodes[i].outputs[j].links) {
                    var output = nodes[i].outputs[j];
                    var color = VAR_COLORS[output.type.name];
                    for (var k = 0; k < nodes[i].outputs[j].links.length; k++) {
                        if (!nodes[i].outputs[j].drawedLines)
                            nodes[i].outputs[j].drawedLines = [];
                        nodes[i].outputs[j].drawedLines.push(this.drawPath(draw, nodes[i], output, nodes[i].outputs[j].links[k], color));
                    }
                }
            }
        }

        return draw;
    }
    redrawNodes(nodes) {
        var affectedOutputs = [];
        var allOutputs = [];
        var nodesInputs = [];
        for (var i = 0; i < this.allNodes.length; i++) {

            var currentNode = this.allNodes[i];
            if (currentNode.outputs && nodes.indexOf(currentNode) === -1) {
                currentNode.outputs.forEach(function (output) {
                    if (output.links && output.links.length > 0)
                        allOutputs.push(output);
                });
            }

        }

        nodes.forEach(function (affNode) {
            if (affNode.inputs && affNode.inputs.length > 0) {
                affNode.inputs.forEach(function (input) {
                    nodesInputs.push(input);
                });
            }

            if (affNode.outputs && affNode.outputs.length > 0) {
                affNode.outputs.forEach(function (output) {
                    affectedOutputs.push(output);
                });
            }
        });

        for (var i = 0; i < allOutputs.length; i++) {
            var currentOutput = allOutputs[i];
            currentOutput.links.forEach(function (link) {
                if (nodesInputs.indexOf(link) !== -1) {
                    affectedOutputs.push(currentOutput);
                }
            });


        }

        var self = this;
        var draw = this.linksGroup;

        affectedOutputs.forEach(function (output) {
            if (output.drawedLines && output.drawedLines.length > 0) {
                output.drawedLines.forEach(function (line) {
                    line.remove();
                });
                output.drawedLines = [];
                if (output.links) {
                    var color = VAR_COLORS[output.type.name];
                    for (var k = 0; k < output.links.length; k++) {
                        output.drawedLines.push(self.drawPath(draw, output.parent, output, output.links[k], color));
                    }
                }
            }
        })
    }

    drawPath(draw, node, pin, link, color) {
        var line = draw.group();
        var minOffset = 16;
        var startX = node.x + node.width;
        var startY = pin.center.y + node.y;

        var endX = link.parent.x;
        ;
        var endY = link.center.y + link.parent.y;

        var deltaX = Math.abs(link.center.x + link.parent.x - pin.center.x - node.x);

        var cOffset = (deltaX > this.controlOffset) && this.controlOffset || Math.max(deltaX, minOffset);



        line.path(createSmoothPath(pin.center.x + node.x, pin.center.y + node.y, startX, startY)).stroke({color: color, width: 1}).style('pointer-events', 'none');

        var control1X = pin.center.x + cOffset + node.x;
        var control1Y = pin.center.y + node.y;


        var control2X = link.center.x - cOffset + link.parent.x;
        var control2Y = link.center.y + link.parent.y;





        var path = line.path(createBezierPath(startX, startY, control1X, control1Y, control2X, control2Y, endX, endY));
        path.style('pointer-events', 'none');

        path.stroke({color: color, width: 1});
        path.fill({color: '#000000', opacity: 0});

        //endX+1 - for smooth drawing!!
        line.path(createSmoothPath(endX + 1, endY, link.center.x + link.parent.x, link.center.y + link.parent.y)).stroke({color: color, width: 1}).style('pointer-events', 'none');
        return line;
    }
}