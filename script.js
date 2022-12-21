// make a grid

const gridContainer = document.getElementById("gridContainer");

function makeCell() {
    const cell = document.createElement("div");
    cell.className = "cell";
    gridContainer.appendChild(cell);
}

function makeGrid(rows, columns) {
    for (i = 0; i < columns; i++) {
        if ( rows <= 1) {
            for (let j = 0; j < rows; j++) {
                makeCell();
            }
        } else if (rows > 1) {
            const newColumn = document.createElement("div");
            gridContainer.appendChild(newColumn);
            newColumn.className = "newColumn";
            for (let j = 0; j < rows; j++) {
                const cell = document.createElement("div");
                cell.className = "cell";
                newColumn.appendChild(cell);
            }
        }
    }
}

makeGrid(16, 16);