nosex=0;
nosey=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotposes); 
}
function modeloaded(){
    console.log("modeloaded");
}
function draw() {
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,50,50);
}
function takeSnap() {
 save('my_filter_pic.png');
}
function gotposes(results) {
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x,159;
        nosey=results[0].pose.nose.y,123;
        console.log("nose x postion"+results[0].pose.nose.x);
        console.log("nose y postion"+results[0].pose.nose.y);
    }}