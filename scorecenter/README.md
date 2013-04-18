------------------------------
Assignment 5: ScoreCenter
------------------------------
Alison Tai
Due: Thursday, April 18, 2013

------------------------------
Implementation
------------------------------
I have successfully implemented a playable Frogger game that has the following 
features:
	POST API - /submit.json
		Allows any HTML5 game on any web domain to send high scores to your 
			web application. 
		The mandatory fields and exact field names are game_title, username, 
			and score. 
		Cross-origin resource sharing is enabled for this API.

	GET API - /highscores.json
		Returns the top 10 scores in descending order as a JSON string (array
			of objects) for a specified game 
		The mandatory parameter for this API is game_title. 
		Cros-origin resource sharing is enabled for this API.
	
	HOME - /
		Accessing http://arcane-fortress-5596.herokuapp.com on a web browser
			displays list of all the scores for all games.
		
	USERNAME SEARCH - /usersearch
		This page has one textbox to enter username and a submit button. 
		Clicking on the submit button displays a list of all the high scores
			for all games for the specified username.
		List of scores for username are displayed on a new page.

My application can be found at:http://arcane-fortress-5596.herokuapp.com

------------------------------
Acknowledgements
------------------------------
I used the following links for information on the listed items:
	Turning a Date into a string - http://www.w3schools.com/jsref/jsref_tostring_date.asp

Special thanks to Tyler Lubeck for help understanding the Express frame work. 
I also worked with Andrew Mendelsohn on this assignment.

------------------------------
Hours Spent: 8
------------------------------