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
	draw_graphics();
}

function draw_graphics()
{
	canvas = document.getElementById('game');
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		
		draw_background(context);
		draw_setting(context);
		draw_footer(context);
		//draw_frog(context, x, y);
		//draw_vehicle(context, x, y);
		//draw_logs(context, x, y);

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

function draw_setting(context)
{
	//draw header "Frogger" and purple roadsides
}

function draw_footer(context)
{
	//draw footer containing lives remaining represented by number of frogs, the 
	//level number, the score and the high score
}