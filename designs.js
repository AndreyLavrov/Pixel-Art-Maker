// Select color input
/*eslint-env jquery */

var numColor=$("#colorPicker").val();
var numGridHeight=1;
var numGridWidth=1;

$("#colorPicker").on("change",function getColor(){
	numColor=$(this).val();	
	console.log("getColor: ["+numColor+"]");
});

// Select size input

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

function makeGrid(numGridHeight,numGridWidth) {
	var objTable={};
	var objRow={};

	objTable=$("#pixelCanvas").first();

	// Clear table
	objTable.html("");
	
	// Create table
	for (var row=1;row<=numGridHeight;row++){
		objTable.append("<tr></tr>");
		objRow=objTable.children("tr").last();
		for (var col=1;col<=numGridWidth;col++){
			objRow.append("<td></td>");
		}
	}

	// Create Pen functionality
	$("td").on("click", function setColor(){
		$(this).css("background-color",numColor);
	});	
}
