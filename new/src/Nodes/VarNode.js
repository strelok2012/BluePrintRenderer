class VarNode extends RegularNode {
    constructor(node, x, y, texturesHandler) {
        super(node, x, y, texturesHandler);
        this.showPinText = true;
        this.inputOffset = this.cellSize * 0.2;

        this.pinRows = [];


        this.titleHeight = 0;

        this.node = node;

        this.body = new PIXI.mesh.NineSlicePlane(texturesHandler.varNodeBodyTexture, 11, 11, 11, 11);
        this.gloss = new PIXI.mesh.NineSlicePlane(texturesHandler.varNodeGlossTexture, 11, 11, 11, 11);
        this.shadow = new PIXI.mesh.NineSlicePlane(texturesHandler.varNodeShadowTexture, 25, 25, 25, 25);
        this.shadowSelected = new PIXI.mesh.NineSlicePlane(texturesHandler.varNodeShadowSelectedTexture, 21, 21, 21, 21);
        this.colorSpill = new PIXI.Sprite.from(texturesHandler.varNodeColorSpillTexture);
        this.config = {
            body: true,
            gloss: true,
            shadow: true,
            titleHighlight: false,
            colorSpill: true
        };
    }
    draw(nodesContainer) {
        super.draw(nodesContainer);
        this.gloss.height = this.height;
    }
    initColorSpill() {
        super.initColorSpill();
        this.colorSpill.height = CONFIG.CELL_SIZE*1.75;
    }
}

