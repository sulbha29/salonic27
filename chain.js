class Chain {

    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
      
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    display() {
    var A = this.sling.bodyA.position;
    var B = this.sling.bodyB.position;

    var Anchor1X = A.x;
    var Anchor1Y = A.y;

    var Anchor2X = B.x + this.offsetX;
    var Anchor2Y = B.y + this.offsetY;

    push ();
    strokeWeight(3);
    stroke("blue");
    line (Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    pop ();
    
    }
    }