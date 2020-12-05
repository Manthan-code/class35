const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,line1;

function setup(){
 
    createCanvas(800,500);
    engine=Engine.create();
    world=engine.world;
    var option={
        isStatic:true
    }
    ground=Bodies.rectangle(400,485,800,30,option);
    World.add(world,ground);

   ball1=new Ball(300,200);
    line1=new SlingSlot(ball1.body,{x:300,y:50});

    
    building1=new Building(700,100);
    building2=new Building(700,100);
    building3=new Building(700,100);
    building4=new Building(700,100);
    building5=new Building(700,100);

    building6=new Building(600,100);
    building7=new Building(600,100);
    building8=new Building(600,100);
    building9=new Building(600,100);
    building10=new Building(600,100);

    building11=new Building(500,100);
    building12=new Building(500,100);
    building13=new Building(500,100);
    building14=new Building(500,100);
    building15=new Building(500,100);



}
function draw(){

    background("yellow");
    Engine.update(engine);
    push();
    rectMode(CENTER);
    fill("black");
    rect(ground.position.x,ground.position.y,800,25);
    pop(); 
  

    building1.display();
    building2.display();
    building3.display();
    building4.display();
    building5.display();

    building6.display();
    building7.display();
    building8.display();
    building9.display();
    building10.display();

    building11.display();
    building12.display();
    building13.display();
    building14.display();
    building15.display();

    ball1.display();

    line1.display();


}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

}














