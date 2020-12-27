class Plinko{
    constructor(x, y, r){
        var options = {
            isStatic: true
        }
        this.r = r;
        
        this.body = Bodies.circle(x, y, this.r, options);
        //this.body = Bodies.rectangle(x, y, w, h, RADIUS, options);
        //RADIUS = 10;
        World.add(world, this.body);
    
    }
    display()   {
        
        
        push();
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
        
        
        
       
    }
};