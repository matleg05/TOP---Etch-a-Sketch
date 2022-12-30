// make a grid

const gridContainer = document.getElementById("gridContainer");

function makeGrid(rows, columns) {
    for (i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
        for (j = 0; j < columns; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
            column.addEventListener("mouseover", e => 
            e.target.classList.add("myColor"))
        }
    }
}

makeGrid(16, 16);

