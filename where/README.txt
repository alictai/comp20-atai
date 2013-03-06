------------------------------
Assignment 3
------------------------------
Alison Tai
Due: March 4, 2013
Tokens: 2

------------------------------
Implementation
------------------------------
My assignment is implemented through the following files:
	geolocation.js - Contains all of the javascript code
	index.html - Contains all of the html content
	stylesheet.css - CSS file used to style the text within the info boxes
	T.png, waldo.png, carmensandiego.png - Marker images

The webpage successfully:
- Renders a Google Map of the MBTA Red Line with a custom icon marking the 
  stations of the Red Line and a red polyline connecting all of the stations
- Retrieves a user's location on the map with the Google Maps default marker
- Displays a window on a user's location that says "You are here." and 
  indicates the closest Red Line station, one's distance from the closest Red
  Line station. This window also displays the distance from Waldo and/or Carmen
  Sandiego if Waldo and/or Carmen are on the map.
- Displays a window, upon click of a Red Line station marker, that contains
  the name of the station and subway arrival schedule (southbound and
  northbound).
- Displays the locations of Carmen Sandiego and Waldo on the map with their
  respective icons.

These implementations are found within the geolocation.js file in the following
functions:
	initialize() - Checks if the browser is compatible with geolocation and 
		 		   calls the other functions accordingly.
	initRedLine() - A hard-coded array called "trains" that contains all of the 
					meanings of the platform keys.
	generateMap() - Generates the map with the center on Boston.
	getRealTime() - Gets the Red Line real time data in JSON.
	generateRedLine() - Generates the markers, information windows, and polyline
						for the Red Line information.
	parse(marker) - Acquires and parses the JSON string with the real time data
				    of the Red Line.
	createTable(i, marker_title) - Creates the table content of the information
								   window of a Red Line station.
	showPosition(position) - Pans to the user's location. Creates the marker and 
							 information window for the user's location.
	nearestT() - Finds the nearest T stop and calculates the distance to it.
	distance(toLat, toLng) - Finds the distance between the user's location and
							 the location found at latitude toLat and longitude 
							 toLng.
	toRad(degrees) - Converts given degrees to radians.
	generateWaldCarm() - Gets the JSON that indicates the location of Waldo and
						 Carmen Sandiego. Parses this and places markers 
						 accordingly.

The page also passes the current HTML5 specifications; uses 1 CSS file to style 
the text within the info boxes, and is stored in my private GitHub repo in a 
directory named where.	

------------------------------
Acknowledgements
------------------------------
Geolocation information - http://www.w3schools.com/html/html5_geolocation.asp
T Icon & Parsed AJAX T markers - http://mbtamap-cedar.herokuapp.com

------------------------------
Hours Spent: 15
------------------------------


