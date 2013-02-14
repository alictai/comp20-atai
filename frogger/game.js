//constants
CANV_H = 565;
CANV_W = 399;
FROG_START_X = 0;
FROG_START_Y = 490;

//initialized global variables
num_lives = 3;
game_over = false;
num_lvl = 1;
time = 120;
car_speed = 5; 
log_speed = 5;
score = 0;
highscore = 0;

function start_game()
{	
	draw_graphics();
}

function draw_graphics()
{
	canvas = document.getElementById('game');
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		
		sprites = new Image();
		sprites.src = 'assets/frogger_sprites.png';
		
		draw_background(context);
		draw_setting(context, sprites);
		//draw_footer(context, sprites);
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
	//draw water
	context.beginPath();
 	context.rect(0, 0, CANV_W, CANV_H/2);
   	context.fillStyle = '#191970';
   	context.fill();
   	
   	//draw road
   	context.beginPath();
	context.rect(0, CANV_H/2, CANV_W, CANV_H/2);
	context.fillStyle = '#000000';
	context.fill();
}

function draw_setting(context, sprites)
{
	//draw header "Frogger"
	context.drawImage(sprites, 15, 13, 318, 31, 15, 13, 318, 31);
	context.drawImage(sprites, 0, 55, 399, 53, 0, 55, 399, 53);

	//draw purple roadsides
	context.drawImage(sprites, 0, 119, 399, 34, 0, CANV_H/2, 399, 34);
	context.drawImage(sprites, 0, 119, 399, 34, 0, FROG_START_Y, 399, 34);
}

function draw_footer(context, sprites)
{
	//draw footer containing lives remaining represented by number of frogs, the 
	//level number, the score and the high score
	
}