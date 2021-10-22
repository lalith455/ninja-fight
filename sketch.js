var godzillaImage,mummyImage,ninjaImage,monkeyImage,lavabackground,lavaRain





function preload(){
    godzillaImage=loadImage("godzilla.png");
    mummyImage=loadImage("mummy.png");
    ninjaImage=loadImage("ninja.png");
    monkeyImage=loadImage("monkey.png");
    lavabackground=loadImage("lava.jpg");
    lavaRain=loadImage("lavarain.png");


}


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);


}



function draw(){
    background(0);
    
    image(lava,0,0,width,height)
}