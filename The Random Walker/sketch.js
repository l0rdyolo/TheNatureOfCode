let walkers = [];
function setup() 
{
	createCanvas(400, 400);
	background(40)
	
	for (let i = 0; i < 15; i++) {
		let walker = new Walker((width/2) , (height/2));
		walkers.push(walker);
	}
	
}

function draw()
{

	for (let i = 0; i < 15; i++) {

		walkers[i].show()
		walkers[i].step()

	}
	
}
