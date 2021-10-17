var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //database = firebase.database();
  game = new Game();
  //game.start();
  form=new Form();
}

function draw() {
  background(backgroundImage);

form.display();





}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
