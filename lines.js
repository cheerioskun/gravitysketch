function line(x, y, z, w, sw){
    this.x1 = x;
    this.y1 = y;
    this.x2 = z;
    this.y2 = w;
    this.sWeight = sw;

    this.display = function(){
        stroke(255);
        strokeWeight(this.sWeight);
        line(this.x1, this.y1, this.x2, this.y2);
        noStroke();
    }
}