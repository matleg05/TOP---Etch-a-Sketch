// make one cell

function makeCell() {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerHtml = "<p>this is a test</p>"
    document.getElementById("gridContainer").appendChild(cell);
}