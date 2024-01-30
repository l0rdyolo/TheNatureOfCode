let gridCellCount = 0;
let grid = [];
let r , c;

function setup() 
{
	createCanvas(globals.width, globals.height);
	// row and colm count 
	r = globals.width / globals.cellWidth;
	c = r;
	
	for (let i = 0; i < r; i++) {
		let row = [];
		for (let j = 0; j < c; j++) {
			row[j] = new Cell(i,j);
		}	
		grid.push(row);	
	}
	console.log(grid);
	
}
let clickedCells = [];
function draw()
{
	frameRate(60)
	background(0)
	
	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			grid[i][j].show();
		}	
	}
	if(clickedCells.length >0){		
		clickedCells.forEach(item=>{
			grid[item.i][item.j + 1].clicked = true;
			grid[item.i][item.j].clicked = false;
			clickedCells.splice(0,1,grid[item.i][item.j + 1])
		})
	}
}

function mouseClicked(e){
	checkCellCliked(e);
	return false;
}

function checkCellCliked(e){
	grid.forEach(row => {
		row.forEach(item =>{
			item.isClicked(e);
		})
	});
}
