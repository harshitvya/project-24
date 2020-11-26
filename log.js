class Log {
    constructor(x, y, h, a) {
        var g = {
            density: 1,
            friction: 2,
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x, y, 20, h, g);
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.body, a);
        World.add(world, this.body);
    }

    display() {
        var p = this.body.position;
        push();
        rectMode(CENTER);
        translate(p.x, p.y);
        rotate(this.body.angle);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
    }
}