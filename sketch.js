var obj1,obj2,obj3,obj4;
var music;

function preload(){
  music = loadSound("music.mp3");
}


function setup(){
  music.loop();
    createCanvas(800,600);
    obj1=createSprite(100,580,50,10);
    obj2=createSprite(300,580,50,10);
    obj3=createSprite(500,580,50,10);
    obj4=createSprite(700,580,50,10);

    obj1.shapeColor="red";
    obj2.shapeColor="blue";
    obj3.shapeColor="green";
    obj4.shapeColor="yellow";
    //create 4 different surfaces



    //create box sprite and give velocity
    box=createSprite(random(20,750), 20,20,20);
    box.shapeColor="white";
    box.velocityX=12;
    box.velocityY=10;
    
    createEdgeSprites();
}


function draw() {
    background(169,169,169);
    //create edgeSprite
   edges= createEdgeSprites();
box.bounceOff(edges);
if (isTouching(obj1,box))
{box.shapeColor=obj1.shapeColor;
//music.stop();
  box.velocityX=0;
  box.velocityY=0;
//bounceOff(obj1,box);
}
if (isTouching(obj2,box))
{box.shapeColor=obj2.shapeColor;
  bounceOff(obj2,box);}
if (isTouching(obj3,box))
{box.shapeColor=obj3.shapeColor;
  bounceOff(obj3,box);}
if (isTouching(obj4,box))
{box.shapeColor=obj4.shapeColor;
  bounceOff(obj4,box);}
    //add condition to check if box touching surface and make it box
    drawSprites();
}
function isTouching(a,b)
{ if (a.x-b.x <a.width/2 +b.width/2 &&
  b.x-a.x <a.width/2 +b.width/2 &&
  a.y-b.y <a.height/2 +b.height/2 &&
  b.y-a.y <a.height/2 +b.height/2 )
  {
    return true;
  }
  else{
    return false;
  }

}
function bounceOff(a,b)
{   box.velocityX=box.velocityX*(-1);
    box.velocityY=box.velocityY*(-1);
 
}