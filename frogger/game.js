//initialized global variables
frog_start_x = 0;
frog_start_y = 0;
num_lives = 3;
game_over = false;
num_lvl = 1;
time = 120;
car_speed = 5; 
log_speed = 5;
canvas_h = 565;
canvas_w = 399;

function start_game()
{	
	console.log("game starting");
	draw_graphics();
}

function draw_graphics()
{
	console.log("drawing graphics");
	canvas = document.getElementById('game');
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		draw_background(context);

	}
	else {
		alert('Sorry, canvas is not supported on your browser!');
	}
}

function draw_background(context)
{
	//Draw water
	context.beginPath();
 	context.rect(0, 0, canvas_w, canvas_h/2);
   	context.fillStyle = '#191970';
   	context.fill();
   	
   	//Draw road
   	context.beginPath();
	context.rect(0, canvas_h/2, canvas_w, canvas_h/2);
	context.fillStyle = '#000000';
	context.fill();
}