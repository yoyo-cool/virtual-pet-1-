//Create variables here
var dog, happyDog, database, foodStock, foodS
function preload()
{
	//load images here
  dog1=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,250,30,30)
  dog.addImage(dog1)
  dog.scale=0.3

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDog)
    foodS=foodS-1
  }
    

  drawSprites();
  //add styles here
  text("Food Remaing:"+foodS,50,50)

}

function writeStock(x){

  database.ref('/').update({
    Food:x
  })
  if(x<=0){
    x=0
  } else{
    x=x-1
  }
}
function readStock(data){
  foodS=data.val()
}


