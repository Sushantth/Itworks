canvas = document.getElementById("myCanvas") ;
ctx = canvas.getContext("2d") ;

nasa_img = ["mars.jpg" , "mars1.jpg" , "mars2.jpg" , "mars3.png" , "mars4.png"] ;
random_number = Math.floor ( Math.random() * 4 )
rover_width = 100
rover_height = 90
Bg = nasa_img [random_number]
rover_img = "rover.png"
rover_x = 20 ; rover_y = 40 ;

function add() {
Background_img = new Image() ;
Background_img . onload = uploadBg ;
Background_img . src = Bg ;

rover_img = new Image() ;
rover_img . onload = uploadrover ;
rover_img . src = rover_img ;
}

function uploadBg() {
ctx.drawImage(Background_img , 0 , 0 , canvas.width , canvas.height) ;
}

function uploadrover() {
ctx.drawImage(rover_img , rover_x , rover_y , rover_width , rover_height) ;
}

window.addEventListener("keydown" , mykeydown)

function mykeydown(e) {
keypressed = e.keyCode ;
if(keypressed=="37"){
left() ;
}

if(keypressed=="38"){
    up() ;
    }

    if(keypressed=="39"){
       right() ;
        }

        if(keypressed=="40"){
            down() ;
            }

            
}

function up() {
if(rover_y >= 0) {
rover_y = rover_y - 10 ;
uploadBg() ;
uploadrover() ;
}
}


function down() {
    if(rover_y <= 800) {
    rover_y = rover_y + 10 ;
    uploadBg() ;
    uploadrover() ;
    }
    }

    function left() {
        if(rover_x >= 0) {
        rover_x = rover_x - 10 ;
        uploadBg() ;
        uploadrover() ;
        }
        }

        function right() {
            if(rover_yx <= 0) {
            rover_x = rover_x + 10 ;
            uploadBg() ;
            uploadrover() ;
            }
            }