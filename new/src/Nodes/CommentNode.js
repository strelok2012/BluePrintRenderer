class CommentNode {
    constructor(node, x, y, texturesHandler) {
        this.x = parseInt(x);
        this.y = parseInt(y);

        this.body = new PIXI.Sprite.from(texturesHandler.commentNodeBody);
        this.shadowSelected = new PIXI.mesh.NineSlicePlane(texturesHandler.shadowSelectedTexture, 21, 21, 21, 21);

        this.pinRows = [];

        this.width = node.width;
        this.height = node.height;

        this.titleHeight = CONFIG.CELL_SIZE * 2.5;

        this.node = node;

        this.container = new PIXI.Container();

        this.container.x = this.x;
        this.container.y = this.y;

    }
    onDragStart(e) {
        this.dragging = true;
        this.eventData = e.data;
        this.oldPosition = this.container.position;

        this.shadowSelected.visible = true;
        this.selected = true;

        var bounds = this.gloss.getBounds();
        var posGlobal = e.data.global;

        var onNodeX = posGlobal.x - bounds.x;
        var onNodeY = posGlobal.y - bounds.y;

        this.pointOnNode = {
            x: onNodeX,
            y: onNodeY
        };
    }
    onDragMove(e) {
        if (this.dragging) {
            var pos = e.data.getLocalPosition(this.nodesContainer);

            pos.x += -this.pointOnNode.x;
            pos.y += -this.pointOnNode.y;

            var deltaX = this.container.x - this.nearestCellWidth(pos.x) * CONFIG.CELL_SIZE;
            var deltaY = this.container.y - this.nearestCellWidth(pos.y) * CONFIG.CELL_SIZE;

            for (var i = 0; i < allNodes.length; i++) {
                if (!(allNodes[i] instanceof CommentNode)) {
                    var bounds = allNodes[i].container.getBounds();
                    //console.log(bounds, this.container.x, this.container.y);
                    if (bounds.x >= this.container.x && bounds.x <= this.container.x + this.container.width) {
                        if (bounds.y >= this.container.y && bounds.y <= this.container.y + this.container.height) {
                            console.log("AFFECTED");
                            allNodes[i].container.x -= deltaX;
                            allNodes[i].container.y -= deltaY;
                            allNodes[i].x -= deltaX;
                            allNodes[i].y -= deltaY;
                            allNodes[i].redrawLinks();
                        }

                    }
                }

            }



            this.container.x = this.nearestCellWidth(pos.x) * CONFIG.CELL_SIZE;
            this.container.y = this.nearestCellWidth(pos.y) * CONFIG.CELL_SIZE;



            this.x = this.container.x;
            this.y = this.container.y;






        }
    }
    onDragEnd(e) {
        this.dragging = false;
        this.eventData = null;
        this.oldPosition = null;
    }
    onNodeClick(e) {
        this.shadowSelected.visible = true;
        this.selected = true;
    }
    dropSelection() {
        this.shadowSelected.visible = false;
        this.selected = false;
    }
    inNode(e) {
        var bounds = this.gloss.getBounds();
        if (e.x >= bounds.x && e.x <= bounds.x + bounds.width) {
            if (e.y >= bounds.y && e.y <= bounds.y + bounds.height) {
                return true;
            }
        }
        return false;
    }
    init() {

    }
    draw(nodesContainer) {


        this.nodesContainer = nodesContainer;

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

        this.shadowSelected.width = this.body.width + 26;
        this.shadowSelected.height = this.body.height + 26;

        this.container.addChild(this.shadowSelected);

        this.shadowSelected.x = -13;
        this.shadowSelected.y = -13;

        this.shadowSelected.visible = false;

        this.container.addChild(this.body);

        this.gloss = new PIXI.mesh.NineSlicePlane(texturesHandler.glossTexture, 7, 7, 7, 7);
        this.gloss.blendMode = PIXI.BLEND_MODES.SCREEN;

        this.gloss.aplha = opacity;
        this.gloss.width = this.width;
        this.gloss.height = this.titleHeight;

        this.gloss.tint = parseInt(headerColor.replace(/^#/, ''), 16);
        this.gloss.interactive = true;
        this.gloss.buttonMode = true;

        var self = this;

        this.gloss.on('click', function (e) {
            self.onNodeClick(e);
        });

        this.gloss.on('mousedown', function (e) {
            self.onDragStart(e);
        });

        this.gloss.on('mouseup', function (e) {
            self.onDragEnd(e);
        });
        this.gloss.on('mouseupoutside', function (e) {
            self.onDragEnd(e);
        })
        this.gloss.on('mousemove', function (e) {
            self.onDragMove(e);
        });

        this.container.addChild(this.gloss);

        this.headerText = new PIXI.Text(this.node.name, commentTextStyle);
        this.headerText.anchor.set(0, 0.5);

        this.headerText.x = CONFIG.CELL_SIZE * 0.5;
        this.headerText.y = this.gloss.height / 2;


        this.container.addChild(this.headerText);
        nodesContainer.addChild(this.container);
    }
    nearestCellWidth(width) {
        return Math.ceil(width / CONFIG.CELL_SIZE);
    }
}