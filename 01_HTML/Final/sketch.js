var king, cake, cake1;
var cakes = [];
var drawcake;
var cakeindex = 0;
var drawking;

function preload() {
  fontQuicksand = loadFont("Quicksand-Regular.otf");
  king = loadImage("img/king.svg");
  kingopen = loadImage("img/king1.svg");
  cakes[0] = loadImage("img/cake.svg");
  cakes[1] = loadImage("img/cake1.svg");
  cakes[2] = loadImage("img/cake2.svg");
  cakes[3] = loadImage("img/cake3.svg");
  cakes[4] = loadImage("img/cake4.svg");
  cakes[5] = loadImage("img/cake5.svg");
  cakes[6] = loadImage("img/cake6.svg");
}

function setup() {
  createCanvas(870, 500);
  canvas.parent('sketch-holder');
  }

function draw() {
  background('#FFDC6B')//light yellow
  //text settings
  textAlign(CENTER);
  textSize(40);
  textFont(fontQuicksand);
  text("king duck is hungry", 435, 50);
  textSize(32);
  text("let him eat cake!", 435, 260);
  fill('#2E3192');//blue
  //cake settings
  drawcake = cakes[cakeindex];
  image(drawcake, 430, 50);

  //king settings
  //mouse is pressed goes by how long you hold down the click
  if (mouseIsPressed) {
     drawking = kingopen;
     image(drawking, mouseX-50, mouseY-50);
	 }

   else{
     drawking = king;
     image(drawking, mouseX-50, mouseY-50);
   }
  }

  //mouse clicked can only be a function and based off the # of clicks not how
  //long the clicks are like mouse is pressed
  function mouseClicked() {
    //determines the space where the event will happen
    var d = dist(mouseX, mouseY, 435, 100);
    if (d < 100) {
      //if the number for cakeindex is greater it will loop again
      cakeindex++;
        if (cakeindex > 6){
          cakeindex = 0;
        }
      image(kingopen, mouseX-50, mouseY-50);
      }
    }
