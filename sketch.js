//Create variables here
var dog,happyDog,database,foodS,foodStock,dog_img
function preload()
{
	//load images here
  dog_img=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,250)
dog.addImage(dog_img)
  dog.scale=0.5
  foodStock=database.ref('Food')
  foodStock.on('value',readStock)
  
}


function draw() {  
  background(46,138,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val()
}
function writeStock(x){
if(x<=0){
  x=0
}
else{
  x=x-1
}
database.ref('/').update({
  Food:x
})
}

