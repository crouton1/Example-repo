var database;
var form,game,player;
var gameState=0;
var playerCount;

/* 
.ref();
.set();
.on();
*/

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  
  
}
