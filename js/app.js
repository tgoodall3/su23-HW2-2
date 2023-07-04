let xPos = 0;
let yPos = 150;
let xSpeed = 1;
let ySpeed = 1;


function setup(){
    var red = "#000";
    createCanvas(400,300);


}

function draw(){
    background(80,199,199)
    if (mouseX > 200){
        fill('#f90711');
    } else if (mouseX < 200){
        fill('#0717fa')
    }    
    circle(mouseX, mouseY, 20, 50,30);
}