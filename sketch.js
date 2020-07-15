const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var table;
var player1image, player1;
var sky;
var player2, computerimage;
var ball;
var form, player, game;

function preload(){
  player1image = loadImage("racket.png");
  tableImage = loadImage("table2.png");
  skyimage = loadImage("background.jpg");
  computerimage = loadImage("computer2.png");
  ballimage = loadImage("ball.png");
}

function setup() {
  createCanvas(800,800);
  game = new Game();
  game.getState();
  game.start();
  sky = createSprite(400,250,800,50)
  sky.addImage("skyImage", skyimage);
  sky.scale = 2;
  
  player2 = createSprite(400,160);
  player2.addImage("player2Image", computerimage);
  player2.scale = 1.2;

  table = createSprite(400,500);
  table.addImage("table1Image", tableImage);
  table.scale = 1.2;

  ball = createSprite(400,300);
  ball.addImage("ballImage", ballimage);
  ball.scale = 0.07;
  //ball.velocityY = 1;

  player1 = createSprite(300,600);
  player1.addImage("playerImage", player1image);
  player1.scale = 0.4;
  ball.velocityY = 1;
  
 
 
}

function draw() {
  background("white"); 
  player1.position.x = mouseX;
  player1.position.y = mouseY; 
  if(keyDown === 32){
    ball.velocityY = 1;;
    }
    isTouching();
drawSprites();
}

function isTouching(object1,object2){
  if(ball.x && ball.y === player1.x && player1.y ){
     
  }
}
