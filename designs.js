/*eslint-env jquery*/

/**
* @name design.js
* @description Pixel Art Maker - Main application code file
* @author Andrey Lavrov
* @version 1.0.3
* @license MIT
* @tutorial tutorial.md
*/

let numColor=$("#colorPicker").val(); // Color number
let numGridHeight=1;                  // Desired height of a grid canvas
let numGridWidth=1;                   // Desired width of a grid canvas

// Select color input

/**
* @function getColor
* @event colorPicker#change
* @description Get color from a color picker
* @param {object} this - Element object from colorPicker DOM element
* @returns {number} numColor - Set global variable to desired color for pen
*/
$("#colorPicker").on("change",function getColor(){
	numColor=$(this).val();	
	console.log("getColor: ["+numColor+"]");
});

// Select size input

/**
* @function getSize
* @event sizePicker#submit
* @description Getting user desired width and height then resizing pixelCanvas grid accordingly
* @param {object} event - Standard Event object for sizePicker click event listener
* @returns {number} numGridHeight - Set global variable to desired height of pixelCanvas
* @returns {number} numGridWidth - Set global variable to desired witdh of pixelCanvas
*/
$("#sizePicker").on("submit",function getSize(event){
	event.preventDefault();
	console.log("getSize with default submit suppression");
	numGridHeight=$("#inputHeight").val();
	console.log("numGridHeight: ["+numGridHeight+"]");
	numGridWidth=$("#inputWidth").val();
	console.log("numGridWidth: ["+numGridWidth+"]");
	makeGrid(numGridHeight,numGridWidth);
});

// When size is submitted by the user, call makeGrid()

/**
* @description Getting user desired width and height then resizing pixelCanvas grid accordingly
* @param {number} numGridHeight - Desired height of pixelCanvas grid
* @param {number} numGridWidth - Desired width of pixelCanvas grid
*/
function makeGrid(numGridHeight,numGridWidth) {
	let objTable={};
	let objRow={};

	objTable=$("#pixelCanvas").first();

	// Clear table
	objTable.html("");
	
	// Create table
	for (let row=1;row<=numGridHeight;row++){
		objTable.append("<tr></tr>");
		objRow=objTable.children("tr").last();
		for (let col=1;col<=numGridWidth;col++){
			objRow.append("<td></td>");
		}
	}

	// Create Pen functionality
	
	/**
	* @function setColor
	* @event td#click
	* @description Set user desired color to a current cell backgroud color
	* @param {object} this - Element object from current cell "td" DOM element
	*/	
	$("td").on("click", function setColor(){
		$(this).css("background-color",numColor);
	});	
}