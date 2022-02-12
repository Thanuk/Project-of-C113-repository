function preload(){
}

function setup(){
    canvas = createCanvas(800, 800);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    fill(20, 200, 10);
    stroke(20, 200, 10);

    circle(30, 30, 60);
    circle(770, 30, 60);
    circle(770, 770, 60);
    circle(30, 770, 60);

    fill(210, 10, 15);
    stroke(210, 10, 15);

    rect(57, 19, 685, 30);
    rect(755, 57, 30, 687);
    rect(56, 760, 685, 30);
    rect(12, 57, 30, 687);

    image(video, 55, 60, 690, 690);
}

function take_snapshot(){
    save("Your Image.jpeg");
}
