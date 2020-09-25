class Bob {
    constructor(x,y) {
        var options = {
           isStatic : false,
           restitution:1,
           friction : 0,
           density : 0.8, 
        }
        this.body = Bodies.circle(x,y,30,options);
        this.radius=30;
        
        World.add(world,this.body);
    }
    display() {
  
    push ();
    translate(this.body.position.x, this.body.position.y);
    

    fill ("purple");
    ellipseMode(RADIUS)
    ellipse(0, 0, this.radius);
    
    pop();
    }
    
    }