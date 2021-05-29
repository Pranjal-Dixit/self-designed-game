const Bodies = Matter.Bodies;

var rect;
var dBox1,dBox2,dBox3,dBox4;
var dBox1_img,Box2_img,Box3_img,Box4_img;
var monaBox1,monaBox2,monaBox3,monaBox4,monaBox5,monaBox6,monaBox7,monaBox8,monaBox9;
var monaBox1_img,monaBox2_img,monaBox3_img,monaBox4_img,monaBox5_img,monaBox6_img,monaBox7_img,monaBox8_img,monaBox9_img;

function preload(){
  
  dBox2_img = loadImage("sprites/dianaTr.png");
  dBox3_img = loadImage("sprites/dianaBr.png");
  dBox4_img = loadImage("sprites/dianaBl.png");

  monaBox1_img = loadImage("sprites/monaTl.png");
  monaBox2_img = loadImage("sprites/monaTm.png");
  monaBox3_img = loadImage("sprites/monaTr.png");
  monaBox4_img = loadImage("sprites/monaMl.png");
  monaBox5_img = loadImage("sprites/monaMm.png");
  monaBox6_img = loadImage("sprites/monaMr.png");
  monaBox7_img = loadImage("sprites/monaBl.png");
  monaBox8_img = loadImage("sprites/monaBm.png");
  monaBox9_img = loadImage("sprites/monaBr.png");
}


function setup(){

 createCanvas(600,400);

  dBox1 = new box(50,50);
  dBox1 = loadImage("sprites/dianaTl.png");
  
  dBox2 = new box(50,100);
  dBox2 = loadImage("sprites/dianaTr.png");

  dBox3 = new box(50,150);
  dBox3 = loadImage("sprites/dianaBl.png");

  dBox4 = new box(50,200);
  dBox4 = loadImage("sprites/dianaBr.png");

  monaBox1 = new box(150,50);
  monaBox1 = loadImage("sprites/monaTl.png");

  monaBox2 = new box(150,100);
  monaBox2 = loadImage("sprites/monaTm.png");

  monaBox3 = new box(150,150);
  monaBox3 = loadImage("sprites/monaTr.png");

  monaBox4 = new box(150,200);
  monaBox4 = loadImage("sprites/monaMl.png");

  monaBox5 = new box(150,250);
  monaBox5 = loadImage("sprites/monaMm.png");

  monaBox6 = new box(150,300);
  monaBox6 = loadImage("sprites/monaMr.png");

  monaBox7 = new box(150,350);
  monaBox7 = loadImage("sprites/monaBl.png");

  monaBox8 = new box(150,400);
  monaBox8 = loadImage("sprites/monaBm.png");

  monaBox9 = new box(150,450);
  monaBox9 = loadImage("sprites/monaBr.png");

}


function draw(){
 background("#4288eb");

 

}