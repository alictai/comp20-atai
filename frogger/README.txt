------------------------------
Assignment 4: Frogger Part II
------------------------------
Alison Tai
Due: Friday, March 15th
Extension to: Monday, March 25th

------------------------------
Implementation
------------------------------
I have successfully implemented a playable Frogger game that has the following 
features:
	1.  Game loads immediately on page load.
	2.  Frogger can be moved on the canvas using the UP, DOWN, LEFT, and RIGHT
	    arrow keys on keyboard.
	3.  Animated vehicles, logs, and turtles.
	4.  Collision detection
	5.  Basic game scoring where successfully jumping Frogger forward is 10 
		points, successfully jumping Frogger home is 50 points, and 
		successfully jumping 5 frogs home is 1000 points.
	6.  Level progression where, after jumping 5 frogs home, the level and 
		speed of vehicles, logs, and turtles is increased to make the level 
		more difficult.
	7.  Frogger animates to dead_frog.png when dead.
	8.  A fly shows up at random times. If eaten by frogger, the player earns 200
		extra points.
	9.  The letter P pauses and un-pauses the game.
	10. The letter S restarts the game.

I have done so through the following methods:
	GAME PLAY METHODS
		game_init - initializes global variables
		start_game - checks browser compatibility, creates canvas, animates 
			sprites, contains game loop.
		game_loop - keeps track of the current fram and periodically updates
			the screen based on global variables
		lose_life - animates dead_frog.png, decrements number of lives, and 
			resets the position of frogger
		level_up - empties home spaces of frogs, increments level, and 
			increases speed of animation to make level more difficult
			
	CHECK GAME STATE METHODS
		check_input - checks keypresses and moves frogger, pauses the game, or
			restarts the game accordingly
		check_score - adds life for every 10000 points and stores high score
		check_lose - checks the number of lives and acts accordingly if 
			there are none
		check_location - checks the location of frogger and calls lose_life 
			function to act accordingly if frogger is not within the canvas
		num_frogs_home - counts the number of frogs contained in home spaces

	COLLISION METHODS
		check_collisions - calls functions on frogger and certain sprites
			given the location of frogger on the canvas in order to determine
			collisions. This function calls on the lose_life function 
			accordingly.
		check_collision - checks collision of frogger with a particular sprite
		home_collision - checks collision of frogger with the home land
		car_collision - checks collision of frogger with vehicles
		log_collision - checks collision of frogger with logs
		turtle_collision - checks collision of frogger with turtles
		fly_collision - checks collision of frogger with fly

	DRAWING METHODS
		start_graphics - draws initial screen	
		draw_setting - draws background images
		draw_footer - draws score/game information
		draw_frogger - draws frogger based on global frog_x and frog_y 
		draw_sprite - draws a sprite from the sprite sheet given particular
			coordinates of desired sprite and desired location on canvas
		draw_home - draws the home location of frogger with the given
			froggers that have successfully returned
		draw_vehicles - draws the vehicle sprites
		draw_logs - draws the log sprites
		draw_turtles - draws turtle sprites
		draw_turtle_group - draws a single grouping of turtles
		draw_fly - draws the fly at random times on random logs
	
No JavaScript errors exist in the console.

------------------------------
Acknowledgements
------------------------------
HTML5 Canvas Rectangle Info - http://www.html5canvastutorials.com/tutorials/html5-canvas-rectangles/
Drawing Text - https://developer.mozilla.org/en-US/docs/Drawing_text_using_a_canvas
Generating Random Number - http://www.javascriptkit.com/javatutors/randomnum.shtml
Collision Detection - http://www.playmycode.com/blog/2011/08/javascript-per-pixel-html5-canvas-image-collision-detection/

------------------------------
Hours Spent: 30
------------------------------