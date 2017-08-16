class RegularNode {
    constructor(x, y, texturesHandler) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.height = 0;
        this.inputs = [];
        this.outputs = [];
        this.fontSize = 14;
        this.pins = [];
        this.showPinText = true;
        this.minCellWidth = 8;
        this.minCellHeight = 4;
        this.width = CONFIG.CELL_SIZE * this.minCellWidth;
        this.height = CONFIG.CELL_SIZE * this.minCellWidth;
        this.inputOffset = this.cellSize * 0.2;

        this.colorTint = VAR_COLORS.bool;

        this.body = new PIXI.mesh.NineSlicePlane(texturesHandler.bodyTexture, 14, 14, 14, 14);
        this.gloss = new PIXI.mesh.NineSlicePlane(texturesHandler.glossTexture, 7, 7, 7, 7);
        this.shadow = new PIXI.mesh.NineSlicePlane(texturesHandler.shadowTexture, 21, 21, 21, 21);
        this.titleHighlight = new PIXI.mesh.NineSlicePlane(texturesHandler.titleHighlightTexture, 7, 7, 7, 7);
        this.colorSpill = new PIXI.mesh.NineSlicePlane(texturesHandler.colorSpillTexture, 6, 6, 1, 1);

        this.container = new PIXI.Container();

    }
    draw(app) {
        this.container.x = this.x;
        this.container.y = this.y;

        this.container.pivot.x = this.container.width / 2;
        this.container.pivot.y = this.container.height / 2;


        this.colorSpill.tint = this.colorTint;
        var coeffX = this.width / (this.width - 20);
        var coeffY = this.height / (this.height - 20);

        this.shadow.width = this.width * coeffX;
        this.shadow.height = this.height * coeffY;

        this.body.width = this.width;
        this.body.height = this.height;

        this.gloss.width = this.width;
        this.gloss.height = 24;

        this.titleHighlight.width = this.width;
        this.titleHighlight.height = 24;

        this.colorSpill.width = this.width;
        this.colorSpill.height = 24;


        this.shadow.x = -this.shadow.width / 2;
        this.shadow.y = -this.shadow.height / 2;

        this.body.x = -this.body.width / 2;
        this.body.y = -this.body.height / 2;

        this.gloss.x = -this.gloss.width / 2;
        this.gloss.y = -this.body.height / 2;

        this.titleHighlight.x = -this.titleHighlight.width / 2;
        this.titleHighlight.y = -this.body.height / 2;

        this.colorSpill.x = -this.colorSpill.width / 2;
        this.colorSpill.y = -this.body.height / 2;



        this.container.addChild(this.shadow);
        this.container.addChild(this.body);

        this.container.addChild(this.colorSpill);
        this.container.addChild(this.gloss);
        this.container.addChild(this.titleHighlight);


        app.stage.addChild(this.container);
    }
    nearestCellWidth(width) {
        return Math.ceil(width / CONFIG.CELL_SIZE);
    }
}

