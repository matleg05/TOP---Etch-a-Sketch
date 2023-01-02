const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");

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

function generateNewGrid() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(rows => {
        rows.remove();
    });

    let rowsInput = document.getElementById("rowsInput").value;
    let columnsInput = document.getElementById("columnsInput").value;

    if (rowsInput < 1 || rowsInput > 99) {
        alert("please choose a number between 1 and 99");
    } else {
        for (i = 0; i < rowsInput; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            gridContainer.appendChild(row);
            for (j = 0; j < columnsInput; j++) {
                let column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
                column.addEventListener("mouseover", e => 
                e.target.classList.add("myColor"))
            }
        }
    }

}