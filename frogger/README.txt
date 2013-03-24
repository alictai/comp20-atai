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
TODO3.  Animated vehicles, logs, and turtles.
TODO4.  Collision detection
TODO5.  Basic game scoring where successfully jumping Frogger forward is 10 
		points, successfully jumping Frogger home is 50 points, and 
		successfully jumping 5 frogs home is 1000 points.
TODO6.  Level progression where, after jumping 5 frogs home, the level and 
		speed of vehicles, logs, and turtles is increased to make the level 
		more difficult.
TODO7.  Frogger animates to dead_frog.png when dead.
TODO8.  Game audio OR timer???
TODO9.  The letter P pauses and un-pauses the game.
TODO10. The letter S restarts the game.

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
		check_collisions - 
		check_collision - 
		home_collision - 
		car_collision - 
		log_collision - 
		turtle_collision - 

	DRAWING METHODS
		start_graphics - draws initial screen	
		draw_setting - draws background images
		draw_footer - draws score/game information
		draw_frogger - draws frogger based on global frog_x and frog_y 
		draw_sprite - 
		draw_home - 
		draw_vehicles - 
		draw_logs - 
		draw_turtles - draws turtles
		draw_turtle_group - draws a single grouping of turtles
	
No JavaScript errors exist in the console.

------------------------------
Acknowledgements
------------------------------
HTML5 Canvas Rectangle Info - http://www.html5canvastutorials.com/tutorials/html5-canvas-rectangles/
Drawing Text - https://developer.mozilla.org/en-US/docs/Drawing_text_using_a_canvas

------------------------------
Hours Spent: 
------------------------------