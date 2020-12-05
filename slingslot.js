class SlingSlot{

    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            stiffness:2,
            length:300
        }
        this.body=Constraint.create(options);
        this.width=b;
        World.add(world,this.body);



    }

    display(){
        push();
        line(this.width.x,this.width.y,this.body.bodyA.position.x,this.body.bodyA.position.y,);
        pop();

    }


}