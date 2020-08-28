class Paper {

    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(50, 650, 18, options);
        this.radius = 100;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
    }
}