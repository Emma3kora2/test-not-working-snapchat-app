function preload() {
}

function setup() {
    canvas =createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    postNet = ml5.postNet(video, modelLoaded);
    postNet.on('pose', gotPoses);
}

function modelLoaded() {
 console.log('PoseNet Is Initialized');
}

function gotPoses(result) {
   if (result.length > 0) {
    console.log(result);
    console.log("lefteye x = "+ result[0].pose.leftEye.x);
    console.log("lefteye y = "+ result[0].pose.leftEye.y);
    console.log("lefteye x = "+ result[0].pose.rightEye.x);
    console.log("lefteye y = "+ result[0].pose.rightEye.y);

   } 
}
function draw() {
    image(video,0,0,300,300);
   }
   function take_snapshot() {
       save('myFilterImage.png');
   }