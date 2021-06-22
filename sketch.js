const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var ball, slingshot;

var gameState = "onSling";
//var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/fabric.jpg");
   // getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(windowWidth-50,windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,windowWidth,20);
    
    ground = new Ground(windowWidth-20,0,20,windowHeight);
    ground = new Ground(windowWidth-20,windowHeight/2,20,windowHeight);
   // platform = new Ground(30,600 , windowWidth, 30);

    box1 = new Box(700,320,100,170);
    box2 = new Box(1110,420,100,170);
  
    box3 = new Box(700,240,100,170);
    box4 = new Box(960,240,100,170);
 

    log3 =  new Log(810,180,300, 150);

    box5 = new Box(810,160,100,170);
 
    ball = new Ball(490,250);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:490, y:250});
   
}

function draw(){

        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
 
   box2.display();



    box3.display();
    box4.display();

    box5.display();
 
    ball.display();
 
    slingshot.display();
  
    ground.display(); 

 //   Matter.SAT.collides(playerObject, groundObject).collided
    var vCollision = Matter.Detector.canCollide(ball, box5) ;

   
 
    if (vCollision === false ){
     
        score++;
    }
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && ball.body.speed < 1){
       ball.trajectory = [];
       Matter.Body.setPosition(ball.body,{x:500, y:250});
       slingshot.attach(ball.body);
    }
    function detectollision(ball,box5){
        
        score++;
    }
}
