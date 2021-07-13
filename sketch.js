var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,260,250,3);
var wall3 = createSprite(67,145,3,50);
var wall4 = createSprite(67,235,3,50);
var wall5 = createSprite(313,145,3,50);
var wall6 = createSprite(313,235,3,50);
var wall7 = createSprite(41,170,50,3);
var wall8 = createSprite(41,210,50,3);
var wall9 = createSprite(337,210,50,3);
var wall10 = createSprite(337,170,50,3);
var wall11 = createSprite(18,190,3,40);
var wall12 = createSprite(361,190,3,40);

var player = createSprite(40, 190, 15, 15);
player.shapeColor = "green";

var obstacle1 = createSprite(100, 130, 10,10);
obstacle1.shapeColor = "red";
var obstacle2 = createSprite(215, 130, 10, 10);
obstacle2.shapeColor = "red";
var obstacle3 = createSprite(165, 250, 10, 10);
obstacle3.shapeColor = "red";
var obstacle4 = createSprite(270, 250, 10, 10);
obstacle4.shapeColor = "red";

var count = 0;


obstacle1.velocityY = 8
obstacle2.velocityY = 8
obstacle3.velocityY = -8
obstacle4.velocityY = -8
 
playSound("sound://category_loops/show_me_a_hero_middle_loop.mp3", true)  












function draw() {
background("white")
textSize(20);
text("Deaths: " + count, 200, 100);



obstacle1.bounceOff(wall1);
obstacle1.bounceOff(wall2);
obstacle2.bounceOff(wall1);
obstacle2.bounceOff(wall2);
obstacle3.bounceOff(wall1);
obstacle3.bounceOff(wall2);
obstacle4.bounceOff(wall1);
obstacle4.bounceOff(wall2);

if (keyDown("right")) {
 player.x = player.x + 5
}

if (keyDown("left")) {
 player.x = player.x - 5
}

if (player.isTouching(obstacle1) || 
player.isTouching(obstacle2)  || 
player.isTouching(obstacle3)  || 
player.isTouching(obstacle4)  || 
player.isTouching(wall11) || 
player.isTouching(wall12))

{
  player.x = 40;
  player.y = 190;
  count = count + 1
}

drawSprites()

}