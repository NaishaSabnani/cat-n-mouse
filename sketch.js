var cat, catImg, catImg2, catImg3
var mouse,mouseImg, mouseImg2, mouseImg3
var bg, bgImg

function preload() {
    //load the images here
    bgImg=loadImage("garden.png")
    catImg=loadImage("cat1.png")
    catImg2=loadAnimation("cat2.png", "cat3,png")
    catImg3=loadImage("cat4.png")
    mouseImg=loadImage("mouse1.png")
    mouseImg2=loadAnimation("mouse2.png", "mouse4.png")
    mouseImg3=loadImage("mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    
     //create tom and jerry sprites here
    cat=createSprite(400, 300, 200,100)
    cat.addImage(catImg)
    mouse=createSprite(600,300,100,50)
    mouse.addimage(mousImg)

   
}

function draw() {

    background(bgImg);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(mous.width+cat.width)/2)
    {
       cat.velocityX=0
       cat.addImage("catHappy", catImg3)
       cat.changeImage("catHappy")

       mouse.addImage("mouseHappy", mouseImg3)
       mouse.changeImage("mouseHappy")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW)
  {
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25

    cat.addAnimation("catMoving", catImg2)
    cat.changeAnimation("catimg2")
    cat.x=cat.x+3

  }


}
