class GetterNode extends AbstractNode {
    constructor(getterNode, x, y, drawer) {
        super(x, y, drawer);
        this.outputs = getterNode.outputs;
        this.minCellWidth = 8;
        this.cellHeight = 2;
        this.width = this.cellSize * this.minCellWidth;
    }
    setSVG(drawer) {
        var mainColor = VAR_COLORS[this.outputs[0].type.name];

        var draw = drawer.group();
        var radGradient = draw.gradient('radial', function (stop) {
            stop.at({offset: 0, color: mainColor, opacity: 0.74226803});
            stop.at({offset: 1, color: mainColor, opacity: 0.01});
        });

        radGradient.attr('gradientTransform', 'matrix(1,0,0,1,0,-0.5)');

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);

        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill(radGradient);
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        this.drawPins(draw, 1);

        return draw;
    }
}