export default class Link {
    constructor(node, pin, link, color) {
        this.line = new PIXI.Graphics();
        this.linkThickness = 1;
        this.pin = pin;
        this.link = link;
        this.color = color;
        this.minOffset = 16;
        this.node = node;
    }
    draw() {
        var startX = this.node.x + this.pin.sprite.x;
        //console.log(node);
        var startY = this.node.y + this.pin.sprite.y;

        var endX = this.link.parent.x + this.link.sprite.x;
        ;
        var endY = this.link.parent.y + this.link.sprite.y;

        //console.log(startX, startY, endX, endY);


        var deltaX = Math.abs(this.link.sprite.x + this.link.parent.x - this.pin.sprite.x - this.node.x);

        var cOffset = (deltaX > this.controlOffset) && this.controlOffset || Math.max(deltaX, this.minOffset);

        var control1X = this.pin.sprite.x + cOffset + this.node.x;
        var control1Y = this.pin.sprite.y + this.node.y;

        var control2X = this.link.sprite.x - cOffset + this.link.parent.x;
        var control2Y = this.link.sprite.y + this.link.parent.y;


        this.line.lineStyle(this.linkThickness, this.color)
                .moveTo(startX, startY)
                .bezierCurveTo(control1X, control1Y, control2X, control2Y, endX, endY)
    }
    redraw() {
        this.line.clear();
        this.draw();
    }
}