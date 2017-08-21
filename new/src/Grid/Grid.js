class Grid {
    constructor(app, x, y) {
        this.grid = new PIXI.Graphics();
        this.gridThickness = 1;
        this.origin = {x: x, y: y};
        app.stage.addChild(this.grid);
        this.grid.position.set(0, 0);
        this.draw();

    }
    draw() {
        var gridThickness = this.gridThickness;
        this.grid.clear();

        var fullCellSize = 8 * CONFIG.CELL_SIZE;

        for (var i = -fullCellSize; i < window.innerWidth + fullCellSize; i += CONFIG.CELL_SIZE) {
            this.grid.lineStyle(gridThickness, 0x353535)
                    .moveTo(i - this.origin.x, 0)
                    .lineTo(i - this.origin.x, window.innerHeight);
        }

        for (var i = -fullCellSize; i < window.innerHeight + fullCellSize; i += CONFIG.CELL_SIZE) {
            this.grid.lineStyle(gridThickness, 0x353535)
                    .moveTo(0, i - this.origin.y)
                    .lineTo(window.innerWidth, i - this.origin.y);
        }

        for (var i = -fullCellSize; i < window.innerWidth + fullCellSize; i += fullCellSize) {
            this.grid.lineStyle(gridThickness, 0x1c1c1c)
                    .moveTo(i - this.origin.x, 0)
                    .lineTo(i - this.origin.x, window.innerHeight);
        }


        for (var i = -fullCellSize; i < window.innerHeight + fullCellSize; i += fullCellSize) {
            this.grid.lineStyle(gridThickness, 0x1c1c1c)
                    .moveTo(0, i - this.origin.y)
                    .lineTo(window.innerWidth, i - this.origin.y);
        }
    }

    redraw(x, y) {
        this.origin.x -= x;
        this.origin.y -= y;

        if (this.origin.x > 8 * CONFIG.CELL_SIZE) {
            this.origin.x = this.origin.x - 8 * CONFIG.CELL_SIZE;
        } else if (this.origin.x < -8 * CONFIG.CELL_SIZE) {
            this.origin.x = this.origin.x + 8 * CONFIG.CELL_SIZE;
        }

        if (this.origin.y > 8 * CONFIG.CELL_SIZE) {
            this.origin.y = this.origin.y - 8 * CONFIG.CELL_SIZE;
        } else if (this.origin.y < -8 * CONFIG.CELL_SIZE) {
            this.origin.y = this.origin.y + 8 * CONFIG.CELL_SIZE;
        }
        this.draw();
    }
}