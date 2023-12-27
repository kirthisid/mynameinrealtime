function preload() {

}
noseX=""
noseY=""
lwx=""
rwx=""
difference=""
function setup() {
    canvas = createCanvas(900, 500)
    canvas.position(600, 100)
    video = createCapture(VIDEO)
    video.size(550, 500)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw() {
    background("gray")
    fill("Blue")
    textSize(difference)
    text("Samhith Thoomula",noseX,noseY)
    // square(noseX, noseY, difference)
}

function modelLoaded() {
    console.log("Posenet is intialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x
        lwx=results[0].pose.leftWrist.x
        rwx=results[0].pose.rightWrist.x
        noseY=results[0].pose.nose.y
difference=floor(lwx-rwx)
document.getElementById("square_side").innerHTML="Size of my name = "+difference+"px"
    }
}