noseY = 0;
noseX = 0;
function preload() {
clown_nose = loadImage('https://i.postimg.cc/XqRMsJDh/455-4557163-icon-clown-nose-circle-hd-png-download-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, loaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
 image(video, 0, 0, 300, 300);
 image(clown_nose, noseX, noseY, 55, 35);
}

function take_snapshot(){
    save('myFliterImage.png')
}

function loaded(){
    console.log("PoseNet is Initialized")

}
 function gotPoses(results)
 {
     if(results.length > 0)
     {
         console.log(results);
         noseX = results[0].pose.nose.x -26;
         noseY = results[0].pose.nose.y -15;
         console.log("nose x = " + noseX);
         console.log("nose y = " + noseY);
     }
 }

