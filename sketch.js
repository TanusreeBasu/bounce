const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
var bounce, bounceImg, bgImg;

var engine, world;

function preload() {

  bgImg = loadImage("bg.gif");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;


  //  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255, 255, 255);
  Engine.update(engine)
  image(bgImg, 0, 0, width, height)
  drawSprites();
}