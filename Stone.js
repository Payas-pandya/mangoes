class Stone {
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.body = loadImage("Images/stone.png");
        World.add(World, this.body);
    }
}