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
        var cellsWidth = parseInt(window.innerWidth / CONFIG.CELL_SIZE);
        var cellsHeight = parseInt(window.innerHeight / CONFIG.CELL_SIZE);
        
        for (var i = 0; i < cellsWidth; i++) {
            if (i !== 0 || i % 8 !== 0) {
                this.grid.lineStyle(gridThickness, 0x353535)
                        .moveTo(i * CONFIG.CELL_SIZE - this.origin.x, 0)
                        .lineTo(i * CONFIG.CELL_SIZE - this.origin.x, window.innerHeight);
            }
        }


        for (var i = 0; i < cellsHeight; i++) {
            if (i !== 0 || i % 8 !== 0) {
                this.grid.lineStyle(gridThickness, 0x353535)
                        .moveTo(0, i * CONFIG.CELL_SIZE - this.origin.y)
                        .lineTo(window.innerWidth, i * CONFIG.CELL_SIZE - this.origin.y);
            }
        }

        for (var i = 0; i < cellsWidth; i += 8) {
            this.grid.lineStyle(gridThickness, 0x1c1c1c)
                    .moveTo(i * CONFIG.CELL_SIZE - this.origin.x, 0)
                    .lineTo(i * CONFIG.CELL_SIZE - this.origin.x, window.innerHeight);
        }

        for (var i = 0; i < cellsHeight; i += 8) {
            this.grid.lineStyle(gridThickness, 0x1c1c1c)
                    .moveTo(0, i * CONFIG.CELL_SIZE - this.origin.y)
                    .lineTo(window.innerWidth, i * CONFIG.CELL_SIZE - this.origin.y);
        }
    }
    redraw(x, y) {
        this.grid.x += x;
        this.grid.y += y;
        // this.draw();
    }
}