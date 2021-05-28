noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/HkN4nHnK/R5905db9d0ff5f9c1f15404d878df28ae.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        noseY=results[0].pose.nose.y;
        noseX=results[0].pose.nose.x;
        console.log("nose y =" + noseY);
        console.log("nose x =" + noseX);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX-15, noseY-10, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png')
}