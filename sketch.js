var car ,wall;
var speed,weight;




function setup() {
  createCanvas(1500,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1300,200,60,1500/2);
  car.velocityX=speed;
}

function draw() {
  background(25);
  drawSprites();
  deformation();
 // collision(car,wall);
}
function deformation(car,wall ){                      
  if(wall.X-car.X<(car.width +wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/speed22509;
    if(deformation>180)
    {car.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100)
    {car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {car.shapeColor=color(0,255,0);
    }
  }
  }
  function collision(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = 0;
    object2.velocityX = 0;
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = 0;
    object2.velocityY = 0;
  }
  }







