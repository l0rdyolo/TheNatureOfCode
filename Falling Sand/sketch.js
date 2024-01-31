function make2DArray(cols, rows) {
	return Array.from({ length: cols }, () => new Array(rows).fill(''));
}

let grid;
let w = 5;
let cols, rows;
let colors = [
	'#e1aa72',
	'#ffe29c',
	'#eabf7d',
	'#db9a59',
	'#fddda0',

]
let colorIndex = 0;
let colorChanger = 0;
function withinCols(i) {
	return i >= 0 && i <= cols - 1;
}

function withinRows(j) {
	return j >= 0 && j <= rows - 1;
}

function setup() {
	createCanvas(700, 500);
	// colorMode(HSB, 360, 255, 255);
	cols = width / w;
	rows = height / w;
	console.log(cols, rows);

	grid = make2DArray(cols, rows);
}

function mouseDragged() {
	let mouseCol = floor(mouseX / w);
	let mouseRow = floor(mouseY / w);
	if (!(withinCols(mouseCol) && withinRows(mouseRow))) return;
	if(grid[mouseCol][mouseRow] != '') return;

	let matrix = 5;
	let extent = floor(matrix / 2);
	for (let i = -extent; i <= extent; i++) {
		for (let j = -extent; j <= extent; j++) {
			if (random(1) < 0.75) {
				let col = mouseCol + i;
				let row = mouseRow + j;
				if (withinCols(col) && withinRows(row)) {
					grid[col][row] = colors[colorIndex];
				}
			}
		}
	}
	colorChanger++;
	if(colorChanger % 250 === 0){
		colorIndex++;		
		if (colorIndex >= colors.length) {
			colorIndex = 0;
		}
	}
}

function draw() {
	background(0);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			noStroke();
			if (grid[i][j] != '') {
				fill(grid[i][j]);
				let x = i * w;
				let y = j * w;
				square(x, y, w);
			}
		}
	}

	let nextGrid = make2DArray(cols, rows);

	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < rows; j++) {
			let state = grid[i][j];

			if (state != '') {
				let below = grid[i][j + 1];

				let dir = 1;
				if (random(1) < 0.5) {
					dir *= -1;
				}

				let belowA = -1;
				let belowB = -1;
				if (withinCols(i + dir)) {
					belowA = grid[i + dir][j + 1];
				}
				if (withinCols(i - dir)) {
					belowB = grid[i - dir][j + 1];
				}


				if (below === '') {
					nextGrid[i][j + 1] = state;
				} else if (belowA === '') {
					nextGrid[i + dir][j + 1] = state;
				} else if (belowB === 0) {
					nextGrid[i - dir][j + 1] = state;
				} else {
					nextGrid[i][j] = state;
				}
			}
		}
	}
	grid = nextGrid;
}
