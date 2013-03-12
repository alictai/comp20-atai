//constants
CANV_H = 565;
CANV_W = 399;
FROG_START_X = 200;
FROG_START_Y = 480;

//global variables
var num_lives;
var game_over;
var num_lvl;
var time;
var car_speed; 
var log_speed;
var score;
var highscore;

function start_game()
{	
	game_init();
	draw_graphics();
}

function draw_graphics()
{
	canvas = document.getElementById('game');
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		
		
		sprites = new Image();
		sprites.src = 'assets/frogger_sprites.png';
		sprites.onload = function () {
			//draw background images not directly involved in game play
			draw_setting(context, sprites);
			draw_footer(context, sprites);
		
			//draw functions for sprites that move or change
			draw_frogger(context, sprites, FROG_START_X, FROG_START_Y);
			draw_vehicle(context, sprites, 100, 350);
			draw_log(context, sprites, 100, 120);
		};
	}
	else {
		alert('Sorry, canvas is not supported on your browser!');
	}
}

function game_init()
{
	num_lives = 3;
	game_over = false;
	num_lvl = 1;
	time = 120;
	car_speed = 5; 
	log_speed = 5;
	score = 0;
	highscore = 0;
}

function draw_setting(context, sprites)
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
	
	//draw header "Frogger"
	context.drawImage(sprites, 15, 13, 318, 31, 15, 13, 318, 31);
	context.drawImage(sprites, 0, 55, 399, 53, 0, 55, 399, 53);

	//draw purple roadsides
	context.drawImage(sprites, 0, 119, 399, 34, 0, CANV_H/2, 399, 34);
	context.drawImage(sprites, 0, 119, 399, 34, 0, FROG_START_Y, 399, 34);
}

function draw_footer(context, sprites)
{
	//draw lives
	context.drawImage(sprites, 13, 334, 17, 23, 0, 514, 17, 23);
	context.drawImage(sprites, 13, 334, 17, 23, 20, 514, 17, 23);
	
	//draw level
	context.fillStyle = "green";
	context.font = "20pt Helvetica";
	context.fillText("Level", 45, 535);
	context.fillText(num_lvl, 120, 535);

	//draw score and high score
	context.font = "12pt Helvetica";
	context.fillText("Score: ", 1, 560);
	context.fillText(score, 50, 560);
	context.fillText("High Score: ", 100, 560);
	context.fillText(highscore, 190, 560);
	
}

function draw_frogger(context, sprites, x, y)
{
	context.drawImage(sprites, 12, 369, 23, 17, x, y, 23, 17);
}

function draw_vehicle(context, sprites, x, y)
{
		context.drawImage(sprites, 46, 265, 28, 24, x, y, 28, 24);
}

function draw_log(context, sprites, x, y)
{
		context.drawImage(sprites, 7, 230, 85, 21, x, y, 85, 21);
}