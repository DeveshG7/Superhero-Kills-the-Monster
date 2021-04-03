class Hero {
    constructor(x, y, r) {
      var options = {
        
        'frictionAir':0.001,
        'density':1.4
          
      }
     
      this.x=x;
      this.y=y;
      this.r=r;

      this.image=loadImage("images/Superhero-02.png")

      this.body = Bodies.circle(this.x ,this.y, (this.r)/2, options);
      World.add(world, this.body);
    }
    display(){
     
     var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0,0, this.r, this.r);
      pop();
   
    }
  };
  