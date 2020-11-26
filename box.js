class Box {
    constructor(x, y, w, h) {
        var b = {
            density: 1,
            friction: 1,
            restitution: 0.8

        }
        this.body = Bodies.rectangle(x, y, w, h, b);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
    }
}