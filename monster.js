class Monster{

    constructor(x, y, r) {
        var options = {
          
          'frictionAir':0.2,
          'density':1.4,
          'restitution':0.4
        }
       
        this.x=x;
        this.y=y;
        this.r=r;
  
        this.image=loadImage("images/Monster-01.png")
  
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







    class Monster2{

        constructor(x, y, r) {
            var options = {
              
              'frictionAir':0.01,
              'density':0.3,
              'restitution':0.4
            }
           
            this.x=x;
            this.y=y;
            this.r=r;
      
            this.image=loadImage("images/Monster-02.png")
      
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
    
    
    
    
    
    
    
