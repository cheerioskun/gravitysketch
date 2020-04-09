function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}


function setup() {
    createCanvas(1920, 1080);
    background(51);
    noStroke();
    movers = [];
}

function keyPressed(){
    if(key == 'a'){
        p = new Particle(random(2, 10), mouseX, mouseY);
        movers.push(p);
    }
    else{
        movers.splice(0, 1);
    }
}

function draw() {
    background(51);
    for(var i = 0; i < movers.length; ++i){
        for(var j = i + 1; j < movers.length; ++j){
            force = calcAttraction(movers[i], movers[j]);
            movers[i].applyForce(force);
            force.mult(-1);
            movers[j].applyForce(force);
        }
    }
    for(var i = 0;i < movers.length; ++i){
        movers[i].update();
        movers[i].edges();
    }
    for(var i = 0; i < movers.length; ++i){
        movers[i].display();
        stroke(255);
        line(movers[i].pos.x, movers[i].pos.y, movers[(i+1)%movers.length].pos.x, movers[(i+1)%movers.length].pos.y);
        noStroke();
    }
}
