class Paper {

    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(50, 650, 10, options);
        this.radius = 20;
        World.add(world, this.body);
    }

    display(){
        ellipse(this.body.position.x, this.body.position.y, 20, 20);
        var angle = this.body.angle;
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        pop();
    }
}