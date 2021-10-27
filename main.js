canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
rover_width=100
rover_height=90
roverx=90
rovery=90
background_image="mars.jpg"
rover_image="rover.png"
function add(){
    background_image_tag=new Image()
    background_image_tag.onload=uploadbackground
    background_image_tag.src=background_image
   rover_image_tag=new Image()
   rover_image_tag.onload=uploadrover
   rover_image_tag.src=rover_image
}
function uploadbackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_image_tag,0,0,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if (keypressed=="38") {
    up()
    }
    if (keypressed=="40") {
        down()
        }
        if (keypressed=="37") {
            left()
            }
            if (keypressed=="39") {
                right()
                }
}
function up(){
    if (rovery>=0) {
        rovery=rovery-10
        uploadbackground()
        uploadrover()

        
    }
}
function down(){
    if (rovery<=500) {
        rovery=rovery+10
        uploadbackground()
        uploadrover()
        
        
    }
}
function left(){
    if (roverx>=0) {
        roverx=roverx-10
        uploadbackground()
        uploadrover()
        
        
    }
}
function right(){
    if (roverx<=700) {
        roverx=roverx+10
        uploadbackground()
        uploadrover()
        
        
    }
}