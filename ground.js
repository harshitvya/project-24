class Ground {
    constructor() {
        var g = {
            isStatic: true
        }
        this.body = Bodies.rectangle(600, 390, 1200, 20, g);
        this.width = 1200;
        this.height = 20;
        World.add(world, this.body);
    }

    display() {
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}