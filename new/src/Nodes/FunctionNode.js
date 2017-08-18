class FunctionNode extends RegularNode {
    constructor(node, x, y, texturesHanlder) {
        super(node, x, y, texturesHanlder);
        if (!node.isPure) {
            this.colorTint = VAR_COLORS["execFunction"];
        } else {
            this.colorTint = VAR_COLORS["pureFunction"];
        }

        if (node.isParent) {
            this.colorTint = VAR_COLORS["parent"];
        }

        if (node.color) {
            this.colorTint = this.function.color;
        }


        this.isPure = node.isPure;
        this.functionName = node.name;

        if (this.functionName === "Make Rotator") {
            console.log("Creating makerot");
        }


        this.headerTextOffset = CONFIG.CELL_SIZE * 2;
    }
    draw(app) {

        this.headerText = new PIXI.Text(this.functionName/* + "(" + this.x + "," + this.y + ")"*/, defaultTextStyle);
        this.fIcon = PIXI.Sprite.fromImage('assets/icons/function.png')
        this.calculateWidth();
        super.draw(app);



        this.headerText.x = -this.body.width / 2;
        this.headerText.y = -this.body.height / 2;

        this.headerText.y += this.gloss.height / 2;
        this.headerText.x += this.headerTextOffset;

        this.headerText.anchor.set(0, 0.5);


        this.fIcon.anchor.set(0.5, 0.5);
        this.fIcon.x = -this.body.width / 2;
        this.fIcon.y = -this.body.height / 2;

        this.fIcon.y += this.gloss.height / 2;
        this.fIcon.x += CONFIG.CELL_SIZE;

        if (!this.isPure) {
            this.fIcon.tint = VAR_COLORS["execFunction"];
        } else {
            this.fIcon.tint = VAR_COLORS["pureFunction"];
        }

        this.container.addChild(this.headerText);
        this.container.addChild(this.fIcon);


    }
    calculateWidth() {
        var headerFullWidth = this.headerText.width + 2 * this.headerTextOffset;
        if (headerFullWidth > this.width) {
            this.width = super.nearestCellWidth(headerFullWidth) * CONFIG.CELL_SIZE;
        }
    }
}

