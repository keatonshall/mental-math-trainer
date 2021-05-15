function TextBox(){
  this.text = ''
  this.width = 130
  this.length = 50

  this.x = width/2;
  this.y = (3/4)*(height)

  this.show = function(mode){
    rectMode(CENTER)
    //Styling for box

    fill(255);
    stroke(0);
    strokeWeight(3);

    rect(this.x, this.y, this.width, this.length);


        if(mode == 'countdown'){

let x = this.x - this.width/2
let y = this.y - this.length/2
rectMode(CORNER);
      fill(115);
      rect(x, y, map((frameCount - st), 0, 180, 0, this.width), this.length)
      fill(0);

    }else if(mode == 'enter'){

    //Styling for text

    noStroke();
    fill(0);
    textSize(this.length - 10);

    text(this.text, this.x, this.y);

    }
  }
}
