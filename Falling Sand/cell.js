class Cell{
    constructor(i,j){
       this.i = i;
       this.j = j;

       this.position = {
        x:this.i 
       }
       this.color = 150;

       this.clicked = false;
    }

    show(){
       fill(this.clicked ? 255 : 0)
       rect(
            this.i * globals.cellWidth,
            this.j * globals.cellWidth,
            globals.cellWidth
        )
    }

    isClicked(clickEvent){
        if(this.clicked) return;
        if(
            clickEvent.x > this.i * globals.cellWidth &&
            clickEvent.y > this.j * globals.cellWidth 

            &&

            clickEvent.x < (this.i * globals.cellWidth) + globals.cellWidth &&
            clickEvent.y < (this.j * globals.cellWidth) + globals.cellWidth 

        )
        {
            clickedCells.push({i:this.i , j:this.j});
            this.clicked = true;
        }
    }



    update(){
        if(this.clicked){
            if(!grid[this.i][this.j + 1].clicked){
                grid[this.i][this.j + 1].clicked=true;
                this.clicked = false;
            }            
        }
    }
}