class LinksDrawer {
    constructor(app, nodes) {
        this.links = new PIXI.Container();
        this.linkThickness = 2;
        this.nodes = nodes;
        app.stage.addChild(this.links);
        this.draw();
    }
    draw() {
        for (var i = 0, l = this.nodes.length; i < l; i++) {
            var node = this.nodes[i];
            for (var j = 0; j < node.pinRows.length; j++) {
                if (node.pinRows[j].output) {
                    var color = VAR_COLORS[node.pinRows[j].output.type.name];
                    for (var k = 0; k < node.pinRows[j].output.links.length; k++) {
                        this.drawPath(node, node.pinRows[j].output, node.pinRows[j].output.links[k], color)
                    }
                }
            }

        }
    }
    drawPath(node, pin, link, color) {
        var line = new PIXI.Graphics();
        var minOffset = 16;
        var startX = node.x + pin.sprite.x;
        console.log(node);
        var startY = node.y + pin.sprite.y;

        var endX = link.parentX + link.sprite.x;
        ;
        var endY = link.parentY + link.sprite.y;

        console.log(startX, startY, endX, endY);

        line.lineStyle(this.linkThickness, 0xFFFFFF)
                .moveTo(startX, startY)
                .lineTo(endX, endY);

        this.links.addChild(line);

        /* var deltaX = Math.abs(link.center.x + link.parent.x - pin.center.x - node.x);
         
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
         return line;*/
    }
}