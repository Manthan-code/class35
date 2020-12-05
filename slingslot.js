class Slingslot{

    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            stiffness:1,
            length:100
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