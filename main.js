difference=0;
rightwristX=0
leftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500)

   canvas=createCanvas(550,500);
   canvas.position(560,160);

   posenet=ml5.poseNet(video,modelloaded);
   posenet.on("pose",gotposes);
}

function modelloaded(){
  console.log('posenet is started')
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
    
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    
        console.log("nosex="+noseX+"nosey="+noseY);
    
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("rightwristx="+rightwristX+"leftwristx="+leftwristX+"difference="+difference);
        
    }
    }

    function draw(){
        background('#22FFC3');
        document.getElementById("fontsize").innerHTML="font size of the text will be"+difference+"px";
        textSize(difference);
        fill('red');
        text('Delisha',50,400);
    }