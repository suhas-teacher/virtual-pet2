var dog,happyDog,database,foodS,foodStock,database,nameTag ;
var feedMilkButton, restartButton ;
var bottle1,bottle2,bottle3,bottle4,bottle5,bottle6,bottle7,bottle8,bottle9,bottle10 ;
var bottle11,bottle12,bottle13,bottle14,bottle15,bottle16,bottle17,bottle18,bottle19,bottle20 ;
var bottleImg ;
var FedTime ;
var run = false ;
var hour1 ;
var foodS,lastFed;
function preload()
{
  happyDogImg = loadAnimation("Images/happy dog.png");
  dogImg = loadImage("Images/Dog.png");
  //nameTag = loadImage("Images/nameTag.png");
  bottleImg = loadImage("Images/Milk.png");

}

function setup() {
  createCanvas(800, 700);
  database= firebase.database();

  foodStock = database.ref('Food');
  foodStock.on('value',readStock);
  
  dog = createSprite(600,270,50,50);
  dog.addImage("dog" ,dogImg);
  dog.addAnimation("happy dog",happyDogImg);
  dog.scale = 0.3;

  bottle1 = createSprite(50,150,50,50);
  bottle1.addImage("bottle1", bottleImg);
  bottle1.scale = 0.15 ;

  bottle2 = createSprite(90,150,50,50);
  bottle2.addImage("bottle2", bottleImg);
  bottle2.scale = 0.15 ;
  
  bottle3 = createSprite(130,150,50,50);
  bottle3.addImage("bottle3", bottleImg);
  bottle3.scale = 0.15 ;

  bottle4 = createSprite(170,150,50,50);
  bottle4.addImage("bottle4", bottleImg);
  bottle4.scale = 0.15 ;

  bottle5 = createSprite(210,150,50,50);
  bottle5.addImage("bottle5", bottleImg);
  bottle5.scale = 0.15 ;

  bottle6 = createSprite(50,250,50,50);
  bottle6.addImage("bottle6", bottleImg);
  bottle6.scale = 0.15 ;

  bottle7 = createSprite(90,250,50,50);
  bottle7.addImage("bottle7", bottleImg);
  bottle7.scale = 0.15 ;

  bottle8 = createSprite(130,250,50,50);
  bottle8.addImage("bottle8", bottleImg);
  bottle8.scale = 0.15 ;

  bottle9 = createSprite(170,250,50,50);
  bottle9.addImage("bottle9", bottleImg);
  bottle9.scale = 0.15 ;

  bottle10 = createSprite(210,250,50,50);
  bottle10.addImage("bottle10", bottleImg);
  bottle10.scale = 0.15 ;

  bottle11 = createSprite(50,350,50,50);
  bottle11.addImage("bottle11", bottleImg);
  bottle11.scale = 0.15 ;

  bottle12 = createSprite(90,350,50,50);
  bottle12.addImage("bottle12", bottleImg);
  bottle12.scale = 0.15 ;
  
  bottle13 = createSprite(130,350,50,50);
  bottle13.addImage("bottle13", bottleImg);
  bottle13.scale = 0.15 ;

  bottle14 = createSprite(170,350,50,50);
  bottle14.addImage("bottle14", bottleImg);
  bottle14.scale = 0.15 ;

  bottle15 = createSprite(210,350,50,50);
  bottle15.addImage("bottle15", bottleImg);
  bottle15.scale = 0.15 ;

  bottle16 = createSprite(50,450,50,50);
  bottle16.addImage("bottle16", bottleImg);
  bottle16.scale = 0.15 ;

  bottle17 = createSprite(90,450,50,50);
  bottle17.addImage("bottle17", bottleImg);
  bottle17.scale = 0.15 ;

  bottle18 = createSprite(130,450,50,50);
  bottle18.addImage("bottle18", bottleImg);
  bottle18.scale = 0.15 ;

  bottle19 = createSprite(170,450,50,50);
  bottle19.addImage("bottle19", bottleImg);
  bottle19.scale = 0.15 ;

  bottle20 = createSprite(210,450,50,50);
  bottle20.addImage("bottle20", bottleImg);
  bottle20.scale = 0.15 ;
  
  feedMilkButton = createButton('Feed Milk');
  feedMilkButton.position(900,40);
  feedMilkButton.mousePressed(feedMilk);
  feedMilkButton.size(200);

  AddMilkButton = createButton('Add Food');
  AddMilkButton.position(850,40);
  AddMilkButton.mousePressed(AddFood);
  AddMilkButton.size(100);

  restartButton = createButton('Restart');
  restartButton.position(750,40);
  restartButton.mousePressed(restart);
  restartButton.size(100);
  
 

}


function draw() {  

  background(46,139,87);
  //image(nameTag,200,450,600,400) ;
 console.log(foodS) ;


 if(foodS<1){
  bottle1.visible = false ;
}
else{
  bottle1.visible = true  ;
}

if(foodS<2){
  bottle2.visible = false ;
}
else{
  bottle2.visible = true  ;
}

if(foodS<3){
  bottle3.visible = false ;
}
else{
  bottle3.visible = true  ;
}

if(foodS<4){
  bottle4.visible = false ;
}
else{
  bottle4.visible = true  ;
}

if(foodS<5){
  bottle5.visible = false ;
}
else{
  bottle5.visible = true  ;
}

if(foodS<6){
  bottle6.visible = false ;
}
else{
  bottle6.visible = true  ;
}

if(foodS<7){
  bottle7.visible = false ;
}
else{
  bottle7.visible = true  ;
}

if(foodS<8){
  bottle8.visible = false ;
}
else{
  bottle8.visible = true  ;
}

if(foodS<9){
  bottle9.visible = false ;
}
else{
  bottle9.visible = true  ;
}

if(foodS<10){
  bottle10.visible = false ;
}
else{
  bottle10.visible = true  ;
}

if(foodS<11){
  bottle11.visible = false ;
}
else{
  bottle11.visible = true  ;
}

if(foodS<12){
  bottle12.visible = false ;
}
else{
  bottle12.visible = true  ;
}

if(foodS<13){
  bottle13.visible = false ;
}
else{
  bottle13.visible = true  ;
}

if(foodS<14){
  bottle14.visible = false ;
}
else{
  bottle14.visible = true  ;
}

if(foodS<15){
  bottle15.visible = false ;
}
else{
  bottle15.visible = true  ;
}

if(foodS<16){
  bottle16.visible = false ;
}
else{
  bottle16.visible = true  ;
}

if(foodS<17){
  bottle17.visible = false ;
}
else{
  bottle17.visible = true  ;
}

if(foodS<18){
  bottle18.visible = false ;
}
else{
  bottle18.visible = true  ;
}

if(foodS<19){
  bottle19.visible = false ;
}
else{
  bottle19.visible = true  ;
}

if(foodS<20){
  bottle20.visible = false ;
}
else{
  bottle20.visible = true  ;
}

drawSprites();
fill(rgb(100,20,20));

fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
 
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }
  textSize(25);
  text("Food Remaining:  " + foodS ,30,40); 




}





function readStock(data){
  foodS = data.val();
  console.log("Hello I am in readStock");
  console.log("FoodS"+foodS)
}

function writeStock(x){
 
  if(x<=0){
     x=0 ;
  }
  else{
   x-=1 ;
  }
 
  database.ref('/').set({
    Food:x  
   })
 console.log("Stock updated"); 
}

function AddStock(x){

  if(x>=20){
    x=20 ;
  }
  else{
    x+=1 ;
  }

  database.ref('/').update({
    Food:x  
  })
}


function feedMilk(){
    console.log("I am in feed milk");
    
    writeStock(foodS);

    run = true ;

    FedTime = database.ref('/').update({
      FeedTime : hour(),
      Food: foodS
    });
    dog.changeAnimation("happy dog",happyDogImg); 
    
    window.setTimeout(dogImage,900);

}

function dogImage(){

  dog.changeImage("dog" ,dogImg);
}

function AddFood(){
  AddStock(foodS) ;
}

function restart(){
  foodS = 20 ;
  writeStock(foodS+1);
}



