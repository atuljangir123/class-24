class Cannon{
    constructor(x,y,width,height,angle){
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.image=loadImage("assets/cannon_base.png");
        this.angle=angle;
    }
    display(){
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        image(this.image,-10,-20,this.width,this.height)
        pop();
        arc(this.x-40,this.y+80,180,230,PI,TWO_PI)
    }
}