const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, star;
var bg, bgImg, starImg, fairies, fairiesImg;

function preload() {
    //preload the images here
    starImg = loadImage("star.png");
    fairiesImg = loadAnimation("fairy1.png", "fairy2.png");
    bgImg = loadImage("starnight.png");
}

function setup() {
    createCanvas(800, 750);
    bg = createSprite(400, 375, 30, 30);
    bg.addImage(bgImg);
    bg.scale = 0.5;

    fairies = createSprite(200, 550, 30, 30);
    fairies.addAnimation("fairy", fairiesImg);
    fairies.scale = 0.3;

    engine = Engine.create();

    world = engine.world;

    var prop = {
        isStatic: true
    };

    star = createSprite(600, 100, 30, 30, prop);
    star.addImage(starImg);
    star.scale = 0.3;

    World.add(world, star);



}


function draw() {
    background("grey");

    Engine.update(engine);

    rectMode(CENTER);
    star.x = star.position.x;
    star.y = star.position.y;

    rect(star.position.x, star.position.y, 30, 30);
    drawSprites();

    if (keyDown(LEFT_ARROW) || keyDown(RIGHT_ARROW)) {
        if (keyDown(LEFT_ARROW)) {
            fairies.x -= 3;
        }
        if (keyDown(RIGHT_ARROW)) {
            fairies.x += 3;
        }
    }

    if (keyDown(DOWN_ARROW)) {
        star.isStactic = false;
    }

}