var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext("2d");
var rover_width=100;
var rover_height=100;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
background_img=new Image();
background_img.onload=upload_background;
background_img.src=background_image;

rover_img=new Image();
rover_img.onload=upload_rover;
rover_img.src=rover_image;
}


function upload_background(){
ctx.drawImage(background_img , 0 , 0 , canvas.width , canvas.height)
}

function upload_rover(){
    ctx.drawImage(rover_img , rover_x , rover_y , rover_width , rover_height)
    }

    window.addEventListener("keydown" , my_keydown )
    function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
 
if(keypressed=='38'){
    up();
    console.log("up");
}

if(keypressed=='40'){
    down();
    console.log("down");
}

if(keypressed=='37'){
    left();
    console.log("left");
}

if(keypressed=='39'){
    right();
    console.log("right");
}
}

function up(){

if(rover_y>=0){

rover_y=rover_y-10;
console.log("up arrow is pressed x="+rover_x+"y="+rover_y);
upload_background();
upload_rover();
}
}

function down(){

    if(rover_y<=500){
    
    rover_y=rover_y+10;
    console.log("down arrow is pressed x="+rover_x+"y="+rover_y);
    upload_background();
    upload_rover();
    }
    }

    function left(){

        if(rover_x>=0){
        
        rover_x=rover_x-10;
        console.log("left arrow is pressed x="+rover_x+"y="+rover_y);
        upload_background();
        upload_rover();
        }
        }

        function right(){

            if(rover_x<=800){
            
            rover_x=rover_x+10;
            console.log("up right is pressed x="+rover_x+"y="+rover_y);
            upload_background();
            upload_rover();
            }
            }