class Building{
    
    constructor(x,y){
        var option={
            friction:1,
            restitution:0.8,
            density:0.04
        }

        this.body=Bodies.rectangle(x,y,70,70,option);
        this.width=70;
        this.breadth=70;
        World.add(world,this.body);


    }

    display(){

        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.breadth);

    }




}