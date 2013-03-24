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
	draw_logs();
	draw_turtles();
	draw_vehicles();
	draw_home();
	
	check_collisions();
}

function lose_life() {
	dead_frog = new Image();
	dead_frog.src = 'assets/dead_frog.png';
	context.drawImage(dead_frog, 5, 3, 18, 24, frog_x, frog_y, 18, 24);
	frog_x = FROG_START_X;
	frog_y = FROG_START_Y;
	num_lives--;
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
	if (frog_y > WATER_START) {
		if (car_collision() == true) {
			lose_life();
		}
	} else if ((frog_y < WATER_START) && (frog_y > LAND_START)) {
		if (log_collision() != -1) {
			frog_x += log_collision();
		} else if (turtle_collision() != -1) {
			frog_x += turtle_collision();
		} else {
			lose_life();
		}
	} else if (frog_y < LAND_START) {
		if (home_collision() != -1) {
			frog_x = FROG_START_X;
			frog_y = FROG_START_Y;
			if (num_frogs_home() == 5) {
				score += 1000;
				level_up();
			} else {
				score += 50;
			}			
		} else {
			lose_life();
		}
	}
}

function check_collision(x, y, w, h) {
	var minX_f = frog_x;
	var minY_f = frog_y;
	var maxX_f = frog_x + FROG_W;
	var maxY_f = frog_y + FROG_H;

	var minX = x;
	var minY = y;
	var maxX = x + w;
	var maxY = y + h;
	
	if ((maxY_f <= maxY) && (maxY_f >= minY)) {
		if ((minX_f <= maxX) && (minX_f >= minX)) {
			return true;
		}
		if ((maxX_f <= maxX) && (maxX_f >= minX)) {
			return true;
		}
	}
	return false;
}

function home_collision() {
	if (check_collision(11, LAND_Y, 32, 53) && frogs_home[0] == false) {
		frogs_home[0] = true;
		return 0;
	} else if (check_collision(96, LAND_Y, 32, 53) && frogs_home[1] == false) {
		frogs_home[1] = true;
		return 1;
	} else if (check_collision(181, LAND_Y, 32, 53) && frogs_home[2] == false) {
		frogs_home[2] = true;
		return 2;
	} else if (check_collision(265, LAND_Y, 32, 53) && frogs_home[3] == false) {
		frogs_home[3] = true;
		return 3;
	} else if (check_collision(351, LAND_Y, 32, 53) && frogs_home[4] == false) {
		frogs_home[4] = true;
		return 4;
	} else {
		return -1;
	}
}

function car_collision() {
	if (check_collision(car_1a, CAR1_Y, 46, 18) || 
	    check_collision(car_1b, CAR1_Y, 46, 18) ||
	    check_collision(car_2a, CAR2_Y, 27, 24) ||
	    check_collision(car_2b, CAR2_Y, 27, 24) ||
	    check_collision(car_3a, CAR3_Y, 28, 20) ||
	    check_collision(car_3b, CAR3_Y, 28, 20) ||
	    check_collision(car_3c, CAR3_Y, 28, 20) ||
	    check_collision(car_4a, CAR4_Y, 24, 21) ||
	    check_collision(car_4b, CAR4_Y, 24, 21) ||
	    check_collision(car_5a, CAR5_Y, 24, 26) ||
	    check_collision(car_5b, CAR5_Y, 24, 26) ) {
		return true;
	} else {		
		return false;
	}
}

function log_collision () {
	if (check_collision(log_1a, LOG1_Y, 118, 22) ||
		check_collision(log_1b, LOG1_Y, 118, 22) ) {
		return log_speed1;
	} else if (check_collision(log_2, LOG2_Y, 179, 22)) {
		return log_speed2;	
		
	} else if (check_collision(log_3a, LOG3_Y, 85, 21) ||
			   check_collision(log_3b, LOG3_Y, 85, 21) ||
			   check_collision(log_3c, LOG3_Y, 85, 21) ) {
		return -log_speed1;
	} else {
		return -1;
	}
}

function turtle_collision() {
	if (check_collision(turtles_1a, TURTLES1_Y, 121, 22) ||
		check_collision(turtles_1b, TURTLES1_Y, 121, 22) ) {
		return turtle_speed1;
	} else if (check_collision(turtles_2a, TURTLES2_Y, 121, 22) ||
			   check_collision(turtles_2b, TURTLES2_Y, 121, 22) ) {
		return turtle_speed2;
	} else {
		return -1;
	}
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

function draw_sprite(src_x, src_y, w, h, loc_x, loc_y) {
	context.drawImage(sprites, src_x, src_y, w, h, loc_x, loc_y, w, h);
	if (loc_x < -w) {
		loc_x = CANV_W;
	} else if (loc_x > CANV_W) {
		loc_x = -w;
	}
	return loc_x;
}

function draw_home() {
	for (var i = 0; i < 5; i++) {
		if (frogs_home[i] == true) {
			draw_sprite(12, 369, 23, 17, 11+(85*i), LAND_Y + 20);
		}
	}
}

function draw_vehicles() {
	car_1a = car_1a - car_speed1, car_1b = car_1b - car_speed1;
	car_2a += car_speed2, car_2b += car_speed2;
	car_3a = car_3a - car_speed2;
	car_3b = car_3b - car_speed2;
	car_3c = car_3c - car_speed2;
	car_4a += car_speed1, car_4b += car_speed1;
	car_5a = car_5a - car_speed1, car_5b = car_5b - car_speed1;

	car_1a = draw_sprite(106, 302, 46, 18, car_1a, CAR1_Y);
	car_1b = draw_sprite(106, 302, 46, 18, car_1b, CAR1_Y);
	car_2a = draw_sprite(46, 265, 28, 24, car_2a, CAR2_Y);
	car_2b = draw_sprite(46, 265, 28, 24, car_2b, CAR2_Y);	
	car_3a = draw_sprite(10, 267, 28, 20, car_3a, CAR3_Y);
	car_3b = draw_sprite(10, 267, 28, 20, car_3b, CAR3_Y);
	car_3c = draw_sprite(10, 267, 28, 20, car_3c, CAR3_Y);
	car_4a = draw_sprite(11, 301, 24, 21, car_4a, CAR4_Y);
	car_4b = draw_sprite(11, 301, 24, 21, car_4b, CAR4_Y);
	car_5a = draw_sprite(82, 264, 24, 26, car_5a, CAR5_Y);
	car_5b = draw_sprite(82, 264, 24, 26, car_5b, CAR5_Y);
}

function draw_logs() {
	log_1a += log_speed1, log_1b += log_speed1;
	log_2 += log_speed2;
	log_3a = log_3a - log_speed1;
	log_3b = log_3b - log_speed1;
	log_3c = log_3c - log_speed1;
	
	log_1a = draw_sprite(10, 196, 118, 22, log_1a, LOG1_Y);
	log_1b = draw_sprite(10, 196, 118, 22, log_1b, LOG1_Y);
	log_2 = draw_sprite(11, 165, 179, 22, log_2, LOG2_Y);
	log_3a = draw_sprite(7, 230, 85, 21, log_3a, LOG3_Y);
	log_3b = draw_sprite(7, 230, 85, 21, log_3b, LOG3_Y);
	log_3c = draw_sprite(7, 230, 85, 21, log_3c, LOG3_Y);	
}

function draw_turtles() {
	turtles_1a = turtles_1a + turtle_speed1;
	turtles_1b = turtles_1b + turtle_speed1;
	turtles_2a = turtles_2a + turtle_speed2;
	turtles_2b = turtles_2b + turtle_speed2;
	
	turtles_1a = draw_turtle_group(turtles_1a, TURTLES1_Y);
	turtles_1b = draw_turtle_group(turtles_1b, TURTLES1_Y);
	turtles_2a = draw_turtle_group(turtles_2a, TURTLES2_Y);		
	turtles_2b = draw_turtle_group(turtles_2b, TURTLES2_Y);
}

function draw_turtle_group(x, y) {
	context.drawImage(sprites, 15, 406, 31, 22, x, y, 31, 22);
	context.drawImage(sprites, 15, 406, 31, 22, x + 45, y, 31, 22);
	context.drawImage(sprites, 15, 406, 31, 22, x + 90, y, 31, 22);
	if (x < -131) {
		x = CANV_W;
	}
	return x;
}

