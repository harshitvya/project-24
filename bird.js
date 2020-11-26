class Bird {
    constructor(x, y) {
        var g = {
            density: 1.5,
            friction: 1,
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x, y, 50, 50, g);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }

    display() {
        var p = this.body.position;
        p.x = mouseX;
        p.y = mouseY;
        push();
        rectMode(CENTER);
        translate(p.x, p.y);
        rotate(this.body.angle);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}