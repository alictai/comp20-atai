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

/* Game Play */
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
	canvas = document.getElementById('game');
	if (canvas.getContext) {
		context = canvas.getContext('2d');
		sprites = new Image();
		sprites.src = 'assets/frogger_sprites.png';
		start_graphics();
	} else {
		alert('Sorry, canvas is not supported on your browser!');
	}
	stop_animation = setInterval(game_loop, anim_speed);
	document.addEventListener("keydown", check_input);
}

function game_loop() {
	context.clearRect(0, 0, CANV_W, CANV_H);
	draw_setting();
	draw_footer();
	draw_frogger();
	//draw_logs();
	//draw_turtles();
	//draw_vehicles();
	//draw_home();
}

/* Check Game State */
function check_input(event){
	if (event.keyCode == UP_ARROW) {
		frog_face = "up";
		if ((frog_y - 30) > 50) {
			context.drawImage(sprites, 46, 367, 21, 24, frog_x, frog_y, 21, 24);
			frog_y = frog_y - 30;
			score += 10;
		}
	} else if (event.keyCode == DOWN_ARROW) {
		frog_face = "down";
		if ((frog_y + 30) < (FROG_START_Y + 30)) {
			context.drawImage(sprites, 114, 366, 21, 25, frog_x, frog_y - 10, 21, 25);
			frog_y = frog_y + 30;
		}
	} else if (event.keyCode == LEFT_ARROW) {
		frog_face = "left";
		if ((frog_x - 21) > 0) {
			context.drawImage(sprites, 112, 338, 25, 22, frog_x, frog_y, 25, 22);
			frog_x = frog_x - 21;
		}
	} else if (event.keyCode == RIGHT_ARROW) {
		frog_face = "right";
		if ((frog_x + 21) < (CANV_W - FROG_W)) {
			context.drawImage(sprites, 43, 335, 25, 22, frog_x - 10, frog_y, 25, 22);
			frog_x = frog_x + 21;
		}
	}
}

/* Collisions */
function check_collisions() {

}

/* Drawing */
function start_graphics() {
	draw_setting();
	draw_footer();
	draw_frogger(context, sprites, FROG_START_X, FROG_START_Y);
}

function draw_setting() {
	context.beginPath();
   	context.fillStyle = '#191970';
 	context.fillRect(0, 0, CANV_W, CANV_H/2);
    	
   	context.beginPath();
	context.fillStyle = '#000000';
	context.fillRect(0, CANV_H/2, CANV_W, CANV_H/2);
	
	context.drawImage(sprites, 15, 13, 318, 31, 15, 13, 318, 31);
	context.drawImage(sprites, 0, 55, 399, 53, 0, 55, 399, 53);

	context.drawImage(sprites, 0, 119, 399, ROADSIDE_W, 0, WATER_START, 399, ROADSIDE_W - 4);
	context.drawImage(sprites, 0, 119, 399, ROADSIDE_W, 0, FROG_START_Y, 399, ROADSIDE_W);
}

function draw_footer() {
	for (var i = 0; i < (num_lives - 1); i++) {
		if (20*i < CANV_W) {
			context.drawImage(sprites, 13, 334, 17, 23, 20*i, 514, 17, 23);
		}
	}
	
	context.fillStyle = "green";
	context.font = "20pt Helvetica";
	context.fillText("Level", 0, 507);
	context.fillText(num_lvl, 80, 507);

	context.font = "12pt Helvetica";
	context.fillText("Score: ", 1, 560);
	context.fillText(score, 50, 560);
	context.fillText("High Score: ", 100, 560);
	context.fillText(highscore, 190, 560);	
}

function draw_frogger() {
	if (frog_face == "up") {
		context.drawImage(sprites, 12, 369, 23, 17, frog_x, frog_y, 23, 17);
	} else if (frog_face == "down") {
		context.drawImage(sprites, 80, 369, 23, 17, frog_x, frog_y, 23, 17);
	} else if (frog_face == "left") {
		context.drawImage(sprites, 83, 335, 17, 23, frog_x, frog_y, 17, 23);
	} else if (frog_face == "right") {
		context.drawImage(sprites, 13, 334, 17, 23, frog_x, frog_y, 17, 23);
	}
}

function draw_vehicle(context, sprites, x, y) {
		context.drawImage(sprites, 46, 265, 28, 24, x, y, 28, 24);
}

function draw_log(context, sprites, x, y) {
		context.drawImage(sprites, 7, 230, 85, 21, x, y, 85, 21);
}

