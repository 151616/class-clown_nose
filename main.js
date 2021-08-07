nosex = 0;
nosey = 0;
function preload(){
clown_nose = loadImage("https://i.postimg.cc/Zqs1fBLr/clown-nose.png");
}
function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nose x= " + nosex);
        console.log("nose y=" + nosey);
    }
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}
function draw(){
image(video, 0, 0, 400, 300);
image(clown_nose, nosex, nosey, 30, 30);


}
function take_snapshot(){
    save("Clown_nose.png");
}