let cellSize = 0;

class Cell{
	 constructor(i,j){
		this.i = i;
		this.j = j;
	 }

	 show(){
		rect(this.i * cellSize, this.j * cellSize, cellSize )
	 }
}
let cells = [];

function setup() 
{
	createCanvas(400, 400);
	cellSize = width / 10;
	console.log(cellSize);
	
	cell = new Cell(9,9);	
}

function draw()
{
	background(0)
	cell.show();

	
}

