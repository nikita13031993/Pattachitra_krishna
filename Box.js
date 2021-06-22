class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/matki1.png");
  }
 display(){
    super.display();
   //console.log(this.body.speed);
   if(this.body.speed < 3){
 
    
    World.remove(world, this.body);
  //  super.display();
   }
  // else{
    // World.remove(world, this.body);
 //  }
  }
};
