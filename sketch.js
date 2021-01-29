const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, starBody;
var bg, bgImg, star, starImg, fairies, fairiesImg, bgMusic;

function preload() {
    //preload the images here
    starImg = loadImage("star.png");
    fairiesImg = loadAnimation("fairy1.png", "fairy2.png");
    bgImg = loadImage("starnight.png");
    bgMusic = loadSound("JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);
    bg = createSprite(400, 375, 30, 30);
    bg.addImage(bgImg);
    bg.scale = 0.5;

    fairies = createSprite(200, 550, 30, 30);
    fairies.addAnimation("fairy", fairiesImg);
    fairies.scale = 0.3;
    // fairies.debug = true;
    fairies.setCollider("rectangle", 100, 200, 800, 500);

    engine = Engine.create();

    world = engine.world;

    var prop = {
        isStatic: true
    };

    star = createSprite(750, 30, 30, 30, prop);
    star.addImage(starImg);
    star.scale = 0.3;

    starBody = Bodies.circle(750, 30, 5, { restitution: 0.4, isStatic: true });
    World.add(world, starBody);

}


function draw() {
    background("grey");

    bgMusic.play();

    Engine.update(engine);

    rectMode(CENTER);
    star.x = starBody.position.x;
    star.y = starBody.position.y;

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
        Matter.Body.setStatic(starBody, false);
    }

    if (star.isTouching(fairies)) {
        Matter.Body.setStatic(starBody, true);
    }


}
