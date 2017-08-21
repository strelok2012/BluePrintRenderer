class CommentNode {
    constructor(node, x, y, texturesHandler) {
        this.x = parseInt(x);
        this.y = parseInt(y);

        console.log(node.name, x, y);

        this.body = new PIXI.Sprite.from(texturesHandler.commentNodeBody);

        this.pinRows = [];

        this.width = node.width;
        this.height = node.height;

        this.titleHeight = CONFIG.CELL_SIZE * 2.5;

        this.node = node;

        this.container = new PIXI.Container();

        this.container.x = this.x;
        this.container.y = this.y;
    }
    init() {

    }
    draw(nodesContainer) {
        this.body.width = this.width;
        this.body.height = this.height;
        this.body.blendMode = PIXI.BLEND_MODES.SCREEN;

        var headerColor, opacity;

        if (this.node.commentColor) {
            var cColor = this.node.commentColor;
            headerColor = rgbToHex(parseFloat(cColor.R) * 255, parseFloat(cColor.G) * 255, parseFloat(cColor.B) * 255);
            opacity = parseFloat(cColor.A);
        } else {
            headerColor = '#acacac';
            opacity = 1;
        }



        this.body.tint = parseInt(headerColor.replace(/^#/, ''), 16);
        this.body.alpha = 0.2;

        this.container.addChild(this.body);

        this.gloss = new PIXI.mesh.NineSlicePlane(texturesHandler.glossTexture, 7, 7, 7, 7);
        this.gloss.blendMode = PIXI.BLEND_MODES.SCREEN;

        this.gloss.aplha = opacity;
        this.gloss.width = this.width;
        this.gloss.height = this.titleHeight;

        this.gloss.tint = parseInt(headerColor.replace(/^#/, ''), 16);
        this.gloss.interactive = true;
        this.gloss.buttonMode = true;
        
        this.container.addChild(this.gloss);

        this.headerText = new PIXI.Text(this.node.name, commentTextStyle);
        this.headerText.anchor.set(0, 0.5);

        this.headerText.x = CONFIG.CELL_SIZE * 0.5;
        this.headerText.y = this.gloss.height / 2;


        this.container.addChild(this.headerText);
        nodesContainer.addChild(this.container);
    }
}