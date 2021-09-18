song1=""
song2=""
leftWristX=0
rightWristX=0
leftWristY=0
rightWristY=0

function preload()
{
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
    
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is Initialised");
}

function gotPoses(results)
{
  if (results.length>0)
  {
    console.log(results);
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    console.log("leftWristX = " + leftWristX +" leftWristY = " + leftWristY);
    
    leftWristY= results[0].pose.leftWrist.y;
    rightWristY= results[0].pose.leftWrist.y;
    console.log("rightWristX = " + rightWristX +" rightWristY = " + rightWristY);
  }
}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,500,500)
}

