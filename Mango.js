class Mango {
    constructor(x, y, r) {
        var options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        this.body = Bodies.circle(x, y, r);
        this.body = loadImage("Images/mango.png");
        World.add(World, this.body);
    }
}