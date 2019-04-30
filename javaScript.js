
var canvas = document.getElementById("pixel-table");
var size = document.querySelector("#size-pick");

size.addEventListener("submit", function (event) {
	event.preventDefault();
	canvas.innerHTML = '';
	makeGrid();


});

function makeGrid() {
	var heightt = document.getElementById('inputHeight');
	var widthh = document.getElementById('inputWidth');
	for (var r = 1; r <= heightt.value; r++) {
		var row = canvas.insertRow();
		for (var c = 1; c <= widthh.value; c++) {
			var cell = row.insertCell();
			cell.addEventListener("click", function (e) {
				var colorr = document.getElementById('color-picker').value;
				e.target.style.backgroundColor = colorr;
			})
		}
	}
}
