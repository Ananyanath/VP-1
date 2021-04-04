var dog , happyDog ;
var dogImg, happyDogImg;
var database;
var foodStock , foodS



function preload()
{
dogImg = loadImage("images/dogImg.png");
happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {

  database = firebase.database();
	createCanvas(500, 500);
   dog = createSprite(250,350,25,25);
   dog.addImage(dogImg);
   dog.scale = 0.25;

   foodStock = database.ref('Food');
   foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDogImg);
}
  drawSprites();

  strokeWeight()
  stroke("white");
  fill("white");
  textSize(20);
  text("Food Remaining:" + foodS, 190,250);
  text("Note: Press the UP_ARROW key to feed Drago !" , 50,50);
  fill("white");
  textSize(10);
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })
}
