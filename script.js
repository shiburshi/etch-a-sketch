function createGrid(size) {
    for (let i = 0; i < size; i++) {
        row = document.createElement("div");
        row.classList.add("row");
        container.append(row);
        for (let j = 0; j < size; j++) {
            cell = document.createElement("div");
            cell.classList.add("cell");
            row.append(cell);
        };
    };
};

function removeGrid() {
    container.innerHTML = '';
}

container = document.querySelector(".container");
newBtn = document.querySelector("#new");
transparentBtn = document.querySelector("#transparent");

document.addEventListener("click", (e) => {
    if (e.target === newBtn) {
        let gridSize = prompt("size of the grid (max 100):", 10);
        if (gridSize > 100) gridSize = 100;
        removeGrid();
        createGrid(gridSize);
    }
    if (e.target === transparentBtn){
        transparentBtn.classList.toggle("pressed");
    }
})

document.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cell")) {
        e.target.classList.add("colored");
        if (transparentBtn.classList.contains("pressed")) {
            e.target.style.opacity = +window.getComputedStyle(e.target).getPropertyValue("opacity") + 0.1;
        } else {
            e.target.style.opacity = 1;
        }
    }
});

createGrid(10);