function draw()
{
	console.log("YAY I'M DOING STUFF");
	canvas = document.getElementById('bluegameboard');
    // Check if canvas is supported on browser
    if (canvas.getContext) {
        context = canvas.getContext('2d');
        blueboard = new Image();
    	blueboard.src = 'pacman10-hp-sprite.png';
    	//drawing the board
    	src_x = 322;
    	src_y = 0;
    	src_w = 464;
    	src_h = 137;
    	context.drawImage(blueboard, src_x, src_y, src_w, src_h, 0, 0, src_w, src_h);
    }
    else {
        alert('Sorry, canvas is not supported on your browser!');
    }
}