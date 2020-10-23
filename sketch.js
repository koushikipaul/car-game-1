var hypnoticBall, database;
var position;
var backgroundImg;
var gameState = 0;
var playerCount = 0;
var database,game,form,player;

function setup(){
  database = firebase.database();
  console.log(database);
   var canvas = createCanvas(500,500);

 game = new Game();
 game.getState();
 game.start();

}

function draw(){
  background("white");
  
  
}

