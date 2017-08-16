function drawGrid(app) {
    var myGraph = new PIXI.Graphics();
    app.stage.addChild(myGraph);

// Move it to the beginning of the line
    myGraph.position.set(0, 0);

// Draw the line (endPoint should be relative to myGraph's position)
    var gridThickness = 1;
    for (var i = 0; i < parseInt(window.innerWidth / CONFIG.CELL_SIZE); i++) {
        if (i !== 0 || i % 8 !== 0) {
            myGraph.lineStyle(gridThickness, 0x353535)
                    .moveTo(i * CONFIG.CELL_SIZE, 0)
                    .lineTo(i * CONFIG.CELL_SIZE, window.innerHeight);
        }
    }


    for (var i = 0; i < parseInt(window.innerHeight / CONFIG.CELL_SIZE); i++) {
        if (i !== 0 || i % 8 !== 0) {
            myGraph.lineStyle(gridThickness, 0x353535)
                    .moveTo(0, i * CONFIG.CELL_SIZE)
                    .lineTo(window.innerWidth, i * CONFIG.CELL_SIZE);
        }
    }

    for (var i = 0; i < parseInt(window.innerWidth / CONFIG.CELL_SIZE); i += 8) {
        myGraph.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(i * CONFIG.CELL_SIZE, 0)
                .lineTo(i * CONFIG.CELL_SIZE, window.innerHeight);
    }

    for (var i = 0; i < parseInt(window.innerHeight / CONFIG.CELL_SIZE); i += 8) {
        myGraph.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(0, i * CONFIG.CELL_SIZE)
                .lineTo(window.innerWidth, i * CONFIG.CELL_SIZE);
    }

}