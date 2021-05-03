//Create variables here
var dog, dogImg, happydogImg, happydog 
var database
var foodS, foodStock

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(200,400,150,150);
  dog.addImage("dogImg.png");

  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImg1)
  }
  drawSprites();
  //add styles here
  

}

function readStock(data){
foodS = data.val()

}

function WriteStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food: x
  })
}

