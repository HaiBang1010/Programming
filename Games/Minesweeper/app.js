const gird = document.getElementById("gird");
let lockGame = false;
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
            mine.value = false;
            cell.setAttributeMode(mine);
        }
    }
    generateMine();
}

function generateMine() {}
