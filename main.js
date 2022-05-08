//Create a reference for canvas 
canvas= document.getElementById(myCanvas);
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() {
	//upload car, and background images on the canvas.
}
function add(){
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;

	greencar_imgTag= new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,canvas.width,canvas.height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(greencar_y>="0")
		{
		greencar_y=greencar_y-10;
			up();
			console.log("When up arrow is pressed, x="+greencar_x+"|y="+greencar_y);
		}
	
		if(greencar_y<="700")
		{
			down();
			console.log("When down arrow is pressed, x="+greencar_x+"|y="+greencar_y);
		}
		
		if(greencar_x>="0")
		{
			left();
			console.log("When left arrow is pressed, x="+greencar_x+"|y="+greencar_y);
		}
	
		if(greencar_x>="400")
		{
			right();
			console.log("When right arrow is pressed, x="+greencar_x+"|y="+greencar_y);
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
