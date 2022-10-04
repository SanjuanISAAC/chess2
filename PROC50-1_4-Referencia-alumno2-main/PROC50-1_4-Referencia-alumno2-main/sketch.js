
var background,backgroundImage;
var reina1;
var reina2;
var rei1;
var rei2;
var alfil1A, alfil2A;
var alfil1B, alfil2B;
var caballo1A, caballo2A;
var caballo1B, caballo2B;
var torre1A, torre2A;
var torre1B, reyna2B;
var peon1A, peon2A, peon3A, peon4A, peon5A, peon6A, peon7A, peon8A; 
var peon1B, peon2B, peon3B, peon4B, peon5B, peon6B, peon7B, peon8B; 
var posiciones=[[66,528]]

function preload(){
 piezas =loadImage("assets/piezas.jpg");
 background =loadImage("assets/background.jpg"); 
 rei1 =loadImage("assets/ReyNegro.jpg");
 reina1 =loadImage("assets/rnb.png");
 rei2 =loadImage("assets/ryn.png");
 teina2 =loadImage("assets/rnb.png");
 alfil1A =loadImage("assets")
 alfil1B =loadImage
 alfil2A =loadImage
 alfil2B =loadImage

}

function setup() {
canvas = createCanvas(windowWidth, windowHeigth);


  torre1A=createSprite(70,528,20,20);
  caballo1A=createSprite(135,528.20,20);
  alfil1A=createSprite(200,528,20,20);
  rei1=createSprite(265,528,20,20);
  reina1=createSprite(330,520,20,20);
  reina1.scale=0.17
  alfil2A=createSprite(395,528,20,20);
  caballo2A=createSprite(460,528,20,20);
  torre2A=createSprite(525,528,20,20);
  peon1A=createSprite(70,463,20,20);
  peon2A=createSprite(135,463.20,20);
  peon3A=createSprite(200,463,20,20);
  peon4A=createSprite(265,463,20,20);
  peon5A=createSprite(330,463,20,20);
  peon6A=createSprite(525,463,20,20);
  torre1B=createSprite(70,73,20,20);
  caballo1B=createSprite(135,73.20,20);
  alfil1B=createSprite(200,73,20,20);
  rei2=createSprite(265,73,20,20);
  reina2=createSprite(330,73,20,20);
  alfil2B=createSprite(395,73,20,20);
  caballo2B=createSprite(460,73,20,20);
  torre2B=createSprite(525,73,20,20);
  peon1B=createSprite(70,138,20,20);
  peon2B=createSprite(135,138.20,20);
  peon3B=createSprite(200,138,20,20);
  peon4B=createSprite(265,138,20,20);
  peon5B=createSprite(330,138,20,20);
  peon6B=createSprite(525,138,20,20);
 
 

}

function draw(){
  background(backgroundImage);
  drawSprites();
}