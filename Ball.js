class Ball{
 constructor(){
    var options = {
        'restitution':0.5,
        'friction':0.5,
        'density':0.5
    }
    this.body = Bodies.circle(200,200);
    World.add(world, this.body);
 }

 display(){
 
 }
}