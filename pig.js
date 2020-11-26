class Pig {
    constructor(x, y) {
        var g = {
            density: 1,
            friction: 0.3,
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x, y, 50, 50, g);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }

    display() {
        var p = this.body.position;
        push();
        rectMode(CENTER);
        translate(p.x, p.y);
        rotate(this.body.angle);
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}