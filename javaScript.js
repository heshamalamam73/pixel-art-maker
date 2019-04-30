// $(document).ready(function () {
// 	$('#size-pick').submit(function makeGrid(e) {
// 		var rows = $("#sit-height").val();
// 		var cols = $("#sit-width").val();
// 		for (var m = 1; m <= rows; m++) {
// 			$("table").append("<tr> </tr>");
// 			for (var n = 1; n <= cols; n++) {
// 				$("tr:last").append("<td> </td> ");
// 				$("td").attr("class", "cells");
//
// 			}
// 		}
// 		e.preventDefault();
//
// 		changeColor();
//
// 	})
// })
// function changeColor() {
// 	$('.cells').click(function (event) {
// 		var color = $("#color-picker").val();
// 		$(event.target).css("background-color", color)
// 	})
// }
// $("#rest").click(function () {
// 	$('.cells').css("background-color", "white")
//
// })
//
//
// // var sizePicker = document.getElementById('size-pick');
//
// // var table = document.getElementById('pixel-table');
//
// // sizePicker.addEventListener('submit', function (e) {
// // 	e.preventDefault();
// // 	var rows = document.getElementById('sit-height');
// // 	var cols = document.getElementById('sit-width');
// // 	for (var i = 1; i <= rows.value; i++) {
// // 		var tr = document.createElement(tr)
// // 		table.
// // 		// for (var m = 1; m <= cols.value; m++) {
// // 		// 	let tr = document.getElementsByTagName('tr').last();
// // 		// 	tr.append("<td></td>")
//
// // 		// 	// document.getElementsByTagName('tr').appendChild("<td></td>")
//
// // 		// }
//
// // 	}
//
// // Select color input
// var myColor = document.getElementById("colorPicker");
// var table = document.getElementById("pixelCanvas");
// var setSize = document.getElementById("sizePicker");
//  var myColor = document.getElementById('colorPicker').value;
//
//
// setSize.addEventListener("submit" , function (e){
//   e.preventDefault();
// makeGrid()
//
//
// })


// Select size input

// When size is submitted by the user, call makeGrid()
// var submitinput = document.getElementById("size-pick");
// var table = document.getElementById('pixel-table')

// submitinput.addEventListener('submit', makeGrid);

// function makeGrid(e) {
// 	e.preventDefault();
// 	// Your code goes here!
// 	var setHeight = document.getElementById('inputHeight')
// 	var setWidth = document.getElementById('inputWidth')
// 	for (var m = 0; m <= setHeight.value; m++) {
// 		var tr = document.createElement("tr");
// 		table.append(tr);
// 		for (var n = 0; n <= setWidth.value; n++) {
// 			let td = document.createElement("td")
// 			td.setAttribute('class', 'cells')
// 			var rowArray = document.querySelectorAll("tr")
// 			var lastchild = rowArray[rowArray.length - 1];
// 			lastchild.append(td);



// 		}



// 	}
// 	let elements = document.querySelectorAll('td');
// 	for (const element of elements) {
// 		element.addEventListener('click', function (event) {
// 			let currentElement = event.target;
// 			let myColor = document.getElementById('color-picker').value;
// 			currentElement.style.backgroundColor = myColor;
// 		})
// 	}

// }


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
