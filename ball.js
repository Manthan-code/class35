class Ball{
    
    constructor(x,y){
        var option={
            friction:1,
            restitution:0.8,
            density:0.04
        }

        this.body=Bodies.circle(x,y,30,option);
        this.radius=30;
    
        World.add(world,this.body);


    }

    display(){
        push();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }




}