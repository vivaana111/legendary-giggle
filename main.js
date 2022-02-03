
// Create canvas variable
var canvas= new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	function load_img (){
		fabric.Image.fromURl('golf-h.png',function(Img){
			hole_obj= Img ;
			hole_obj.scaleToWidth(50);
			hole_obj.scaleToHeight(50);
			hole_obj.set({
				top:hole_x,
				left:hole_y
			});
			canvas.add(hole.obj) ;
		    });
			new_image();
		}


	}
	

function new_image()
{
	// write code to Upload ball image on canvas
	function load_img(){
		fabric.Image.fromURl('ball.png',function(Img){
			ball_obj=Img ;
			ball_obj.scaleToWidth(50);
			ball_obj.scaleToHeight(50);
			ball_obj.set({
				top:ball_y ,
				left:ball_x
			});
			canvas.add(ball.obj) ;
		});
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ballx_x==hole_x)&&((ball_y==hole_y))
	{
		canvas.remove(ball.obj);
		document.getElementById("hd3").innerHTML=" Yay !!You have hit the goal !!!!"
		document.getElementById(myCanvas).style.borderColor("red");
	}
}
	
	{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		ball_y = ball_y + block_image_height ;
				console.log("block_image_height = " + block_image_width);
				console.log ("When left arrow key is pressed, x = '+ ball +' , Y= '")
				}

	}

	function down()
	{
		 // Write a code to move ball downward.
		 {
		 if(ball_y <=450)
		 ball_y = ball_y + block_image_height ;
		 console.log("block_image_height = " + block_image_width);
		 console.log ("When down arrow key is pressed, x = '+ ball +' , Y= '")
		 }
		 
	}

	function left()
	{
		if(ball_x >5)
		{
			{
				ball_x = ball_x + block_image_width ;
				console.log("block_image_height = " + block_image_width);
				console.log ("When left arrow key is pressed, x = '+ ball +' , Y= '")
				}
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width ;
				console.log("block_image_height = " + block_image_width);
				console.log ("When left arrow key is pressed, x = '+ ball +' , Y= '")
				}
			// Write a code to move ball right side.
		}
	
	


