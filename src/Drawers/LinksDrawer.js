import {VAR_COLORS} from '../config.js';
import Link from './Link.js';

export default class LinksDrawer {
    constructor(container, nodes) {
        this.links = new PIXI.Container();
        this.nodes = nodes;
        container.addChild(this.links);
        this.draw();
    }
    draw() {
        for (var i = 0, l = this.nodes.length; i < l; i++) {
            var node = this.nodes[i];
            for (var j = 0; j < node.pinRows.length; j++) {
                if (node.pinRows[j].output) {
                    var color = VAR_COLORS[node.pinRows[j].output.type.name];
                    for (var k = 0; k < node.pinRows[j].output.links.length; k++) {
                        var linkObj = new Link(node, node.pinRows[j].output, node.pinRows[j].output.links[k], color);
                        linkObj.draw();
                        this.links.addChild(linkObj.line);
                        if (!node.pinRows[j].output.lines) {
                            node.pinRows[j].output.lines = [];
                        }
                        node.pinRows[j].output.lines.push(linkObj);
                    }
                }
            }

        }
    }
    drawPath(node, pin, link, color) {
        var line = new PIXI.Graphics();
        var minOffset = 16;
        var startX = node.x + pin.sprite.x;
        //console.log(node);
        var startY = node.y + pin.sprite.y;

        var endX = link.parentX + link.sprite.x;
        ;
        var endY = link.parentY + link.sprite.y;

        //console.log(startX, startY, endX, endY);

        this.links.addChild(line);

        var deltaX = Math.abs(link.sprite.x + link.parentX - pin.sprite.x - node.x);

        var cOffset = (deltaX > this.controlOffset) && this.controlOffset || Math.max(deltaX, minOffset);

        var control1X = pin.sprite.x + cOffset + node.x;
        var control1Y = pin.sprite.y + node.y;

        var control2X = link.sprite.x - cOffset + link.parentX;
        var control2Y = link.sprite.y + link.parentY;


        line.lineStyle(this.linkThickness, color)
                .moveTo(startX, startY)
                .bezierCurveTo(control1X, control1Y, control2X, control2Y, endX, endY)
        return line;
    }
}