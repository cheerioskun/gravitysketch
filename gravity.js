var G = 1;
function calcAttraction(a, b){ //Takes two particle objects a, b. returns force from a to b
    var displacement = p5.Vector.sub(b.pos, a.pos);
    var dist = displacement.mag();
    var force  = G * a.mass * b.mass / (dist * dist) ;
    displacement.setMag(constrain(force, 5, 25));
    return displacement;
}