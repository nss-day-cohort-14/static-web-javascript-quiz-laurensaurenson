var details = {};
var symbol = null;
var height = null;
var branches = " ";
var button = document.getElementById("growTree");
button.addEventListener("click", fillObject);

function fillObject () {
  details.height = document.getElementById("height").value;
  details.symbol = document.getElementById("symbol").value;
  if (details.height === "" || details.symbol === "") {
    alert("Both Fields Must Have a Value.");
    return null
  }
  console.log("details: ", details );
  tree(details);
}

function tree (info) { 
  branches = " ";
  for ( var i = 0; i < parseInt(info.height); i ++) {
    var x = parseInt(info.height) - i;
    var air = " ";
    var leaves = i * 2;
    leaves += 1;
    branches = air.repeat(x);
    branches += info.symbol.repeat(leaves);
    branches += air.repeat(x);
    console.log(branches);
  }
}

window.addEventListener("keyup", submitOnEnter);
function submitOnEnter (event) {
  if (event.keyCode === 13) {
    fillObject();
  }
}