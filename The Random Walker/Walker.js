class Walker{
    constructor(x,y){
        this.x = x;
        this.y = y;
        console.log(this.x,this.y);
        this.choice = 0;
        this.r = random(255)
        this.g = random(255)
        this.b = random(255)

    }

    show(){
        stroke(this.r ,this.g,this.b)
        point(this.x, this.y)
    }

    step(){
        this.choice = floor(random(4));
        if (this.choice === 0) {
            this.x++;
        } else if (this.choice === 1) {
            this.x--;
        } else if (this.choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
    }
}