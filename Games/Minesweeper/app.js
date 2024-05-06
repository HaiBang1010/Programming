const gird = document.getElementById("gird");
let lockGame = false;
//set testMode true if you want to see mines
const testMode = false;
generateGird();

function generateGird() {
    lockGame = false;
    gird.innerHTML = "";
    for (var i = 0; i < 10; i++) {
        row = gird.insertRow(i);
        for (var j = 0; j < 10; j++) {
            cell = gird.insertCell(j);
            cell.onclick = function () {
                init(this);
            };
            var mine = document.createAttribute("mine");
            mine.value = "false";
            cell.setAttributeMode(mine);
        }
    }
    generateMine();
}

function generateMine() {
    //add 20 mines to game
    for (let i = 0; i < 20; i++) {
        var row = Math.floor(Math.random() * 10);
        var col = Math.floor(Math.random() * 10);
        var cell = gird.rows[row].cells[col];

        cell.setAttribute("mine", "true");
        if (testMode) {
            cell.innerHTML = "X";
        }
    }
}

//highlight all mines red
function revealMines() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var cell = gird.rows[i].cells[j];
            if (cell.getAttribute("mine") == "true") {
                cell.className = "mine";
            }
        }
    }
}

function checkGameComplete() {
    var gameComplete = true;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (
                gird.rows[i].cells[j].getAttribute("mine") == "false" &&
                gird.rows[i].cells[j].innerHTML == ""
            ) {
                gameComplete = false;
            }
        }
    }

    if (gameComplete) {
        alert("You win");
        revealMines();
    }
}

function init(cell) {
    //check game completed or no
    if (lockGame) {
        return;
    } else {
        //check user clicked on mine
        if (cell.getAttribute("mine") == true) {
            revealMines();
            lockGame = true;
        } else {
            cell.className = "active";
            //display number of mines around cell
            var mineCount = 0;
            var cellRow = cell.parentNode.rowIndex;
            var cellCol = cell.cellIndex;
            for (
                var i = Math.max(cellRow - 1, 0);
                i <= Math.min(cellRow + 1, 9);
                i++
            ) {
                for (
                    var j = Math.max(cellCol - 1, 0);
                    j <= Math.min(cellCol + 1, 9);
                    j++
                ) {
                    if (gird.rows[i].cells[j].getAttribute("mine") == "true") {
                        mineCount++;
                    }
                }
            }
            cell.innerHTML = mineCount;
            if (mineCount == 0) {
                for (
                    var i = Math.max(cellRow - 1, 0);
                    i <= Math.min(cellRow + 1, 9);
                    i++
                ) {
                    for (
                        var j = Math.max(cellCol - 1, 0);
                        j <= Math.min(cellCol + 1, 9);
                        j++
                    ) {
                        if (gird.rows[i].cells[j].innerHTML == "") {
                            init(gird.rows[i].cells[j]);
                        }
                    }
                }
            }
            checkGameComplete();
        }
    }
}
