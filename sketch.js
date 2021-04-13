const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var monster1,monster2, bg, superhero;

function preload() {
 
 bg=loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(1600, 700);
  engine = Engine.create();
  world = engine.world;
  
  superhero=new Hero(125, 300, 300)

  ground1=new Ground(600,600,1200,20)

  rope1=new Rope(superhero.body, {x:280, y:70})

  box1=new Block(650, 100, 60, 60)
  box2=new Block(650, 100, 60, 60)
  box3=new Block(650, 100, 60, 60)
  box4=new Block(650, 100, 60, 60)
  box5=new Block(650, 100, 60, 60)
  box6=new Block(650, 100, 60, 60)
  box7=new Block(650, 100, 60, 60)
  box8=new Block(650, 100, 60, 60)
  box9=new Block(650, 100, 60, 60)
  box10=new Block(740, 100, 60, 60)
  box11=new Block(740, 100, 60, 60)
  box12=new Block(740, 100, 60, 60)
  box13=new Block(740, 100, 60, 60)
  box14=new Block(740, 100, 60, 60)
  box15=new Block(740, 100, 60, 60)
  box16=new Block(740, 100, 60, 60)
  box17=new Block(740, 100, 60, 60)
  box18=new Block(740, 100, 60, 60)
  box19=new Block(740, 100, 60, 60)
  box20=new Block(820, 100, 60, 60)
  box21=new Block(820, 100, 60, 60)
 // box22=new Block(820, 95, 60, 40)
  box23=new Block(820, 100, 60, 60)
  box24=new Block(820, 100, 60, 60)
  box25=new Block(820, 100, 60, 60)
  box26=new Block(820, 100, 60, 60)
  box27=new Block(820, 100, 60, 60)
  box28=new Block(900, 100, 60, 60)
  box29=new Block(900, 100, 60, 60)
  box30=new Block(900, 100, 60, 60)
  box31=new Block(900, 100, 60, 60)
  box32=new Block(900, 100, 60, 60)
  box33=new Block(900, 100, 60, 60)
 box34=new Block(900, 100, 60, 60)
 box35=new Block(900, 100, 60, 60)
 box36=new Block(900, 100, 60, 60)
 box37=new Block(970, 100, 60, 60)
 box38=new Block(970, 100, 60, 60)
 box39=new Block(970, 100, 60, 60)
 box40=new Block(970, 100, 60, 60)
 box41=new Block(970, 100, 60, 60)
 box42=new Block(970, 100, 60, 60)
 box43=new Block(970, 100, 60, 60)
 box44=new Block(970, 100, 60, 60)
 box45=new Block(970, 100, 60, 60)
 box46=new Block  (970, 100, 60, 60)

 monster1=new Monster(1120, 500, 200)

 monster2= new Monster2(830,80, 55)
 monster45= new Monster2(650,80, 55)
 monster117= new Monster(900,70,70)
}

function draw() {
  background(bg);
  Engine.update(engine);
 
 strokeWeight(1)
  ground1.display();

  strokeWeight(1.5)
 //rope1.display();

 superhero.display();

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();
 box21.display();
 //box22.display();
 box23.display();
 box24.display();
 box25.display();
 box26.display();
 box27.display();
 box28.display();
 box29.display();
 box30.display();
 box31.display();
 box32.display();
 box33.display();
 box34.display();
 box35.display();
 box36.display();
 box37.display();
 box38.display();
 box39.display();
 box40.display();
 box41.display();
 box42.display();
 box43.display();
 box44.display();
 box45.display();
 box46.display();

 monster1.display();
 monster2.display();
 monster45.display();
 monster117.display();
}

function mouseDragged(){

Matter.Body.setPosition(superhero.body, {x:mouseX, y:mouseY})

}

function keyPressed(){
 
  if (keyCode===UP_ARROW){

 Matter.Body.applyForce(superhero.body, superhero.body.position, {x:-7000, y:-7000})
  }



}
