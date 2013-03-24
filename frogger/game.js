//establishing constants
CANV_H = 565;
CANV_W = 399;
FROG_START_X = 15
FROG_START_Y = 440;
WATER_START = 260;
LAND_Y = 55;
LAND_START = 108;
ROADSIDE_W = 34;
FROG_W = 23;
FROG_H = 17;
UP_ARROW = 38;
DOWN_ARROW = 40;
LEFT_ARROW = 37;
RIGHT_ARROW = 39;
LOG1_Y = 110;
LOG2_Y = 170;
LOG3_Y = 200;
TURTLES1_Y = 140;
TURTLES2_Y = 230;
CAR1_Y = 290;
CAR2_Y = 320;
CAR3_Y = 350;
CAR4_Y = 380;
CAR5_Y = 410;

function game_init() {
	//initializing global variables
	num_lives = 5, extra_lives = 1;
	num_lvl = 1;
	time = 120;
	score = 0, highscore = 0;
	game_over = false;	
	frogs_home = [false, false, false, false, false];
	anim_speed = 60;
	car_speed1 = 3, car_speed2 = 4; 
	log_speed1 = 2, log_speed2 = 3;
	turtle_speed1 = -2, turtle_speed2 = -3;
	log_1a = 0, log_1b = 140;
	log_2 = 30;
	log_3a = 0, log_3b = 165, log_3c = 330;
	turtles_1a = 0, turtles_1b = 200;
	turtles_2a = 30, turtles_2b = 230
	car_1a = 0, car_1b = 145;
	car_2a = 0, car_2b = 125, car_2c = 250;
	car_3a = 0, car_3b = 100, car_3c = 200;
	car_4a = 0, car_4b = 100;
	car_5a = 240, car_5b = 340;
	frog_x = FROG_START_X, frog_y = FROG_START_Y;
	frog_face = "up";
	paused = false;
}

function start_game() {	
	game_init();
	draw_graphics();
	game_start();
}

function draw_graphics() {
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

function draw_setting(context, sprites) {
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

function draw_footer(context, sprites) {
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

function draw_frogger(context, sprites, x, y) {
	context.drawImage(sprites, 12, 369, 23, 17, x, y, 23, 17);
	frog_x = x;
	frog_y = y;
}

function draw_vehicle(context, sprites, x, y) {
		context.drawImage(sprites, 46, 265, 28, 24, x, y, 28, 24);
}

function draw_log(context, sprites, x, y) {
		context.drawImage(sprites, 7, 230, 85, 21, x, y, 85, 21);
}

function game_start() {
	keypress();

	
	setInterval(update(), 10);

	while (!game_over) {
		counter = 0;
		console.log("in while loop");
		draw();
		game_over = true;
	}
	console.log("outside of while loop");
}

function keypress() {
	document.addEventListener("keydown", function(event) {
		console.log(event.keyCode);
		if (event.keyCode == UP_ARROW) {
			console.log("pressed up key");
		}
		else if (event.keyCode == DOWN_ARROW) {
			console.log("pressed down key");
		}
		else if (event.keyCode == LEFT_ARROW) {
			console.log("pressed left key");
		}
		else if (event.keyCode == RIGHT_ARROW) {
			console.log("pressed right key");
		}
	});
}

function update() {
	
	//move sprites, update coordinates, resolve collisions
}

function draw() {
	//redraw everything on canvas
}