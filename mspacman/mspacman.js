function draw()
{
	console.log("YAY I'M DOING STUFF");
	canvas = document.getElementById('gameboard');
    // Check if canvas is supported on browser
    if (canvas.getContext) {
        context = canvas.getContext('2d');
        
        sprites = new Image();
    	sprites.src = 'pacman10-hp-sprite.png';

		//drawing the board
    	src_x = 322;
    	src_y = 0;
    	src_w = 464;
    	src_h = 137;
    	context.drawImage(sprites, src_x, src_y, src_w, src_h, 0, 0, src_w, src_h);
    	
    	//drawing Ms. Pac-Man
    	src_x = 84;
    	src_y = 3;
    	src_w = 13;
    	src_h = 14;
    	context.drawImage(sprites, src_x, src_y, src_w, src_h, 360, 7, src_w, src_h);

		//drawing blue ghost
		src_x = 43;
		src_y = 123;
		src_w = 14
		src_h = 14
   		context.drawImage(sprites, src_x, src_y, src_w, src_h, 245, 20, src_w, src_h);

    	
    }
    else {
        alert('Sorry, canvas is not supported on your browser!');
    }
}