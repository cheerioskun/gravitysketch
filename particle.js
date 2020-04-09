function Particle(m, x, y){
  this.mass = m;
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.r = sqrt(this.mass) * 25;
  this.applyForce = function(force){
    this.acc.add(p5.Vector.div(force, this.mass));
  }
  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc = createVector(0 ,0);
  }
  this.edges = function(){
    if(this.pos.x > width || this.pos.x < 0){
      this.vel.x = -this.vel.x * 0.5;
    }
    if(this.pos.y > height || this.pos.y < 0){
      this.vel.y = -this.vel.y * 0.5;
    }
  }
  this.display = function(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
}
