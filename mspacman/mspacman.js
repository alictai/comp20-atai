function draw()
{
	console.log("YAY I'M DOING STUFF");
	canvas = document.getElementById('bluegameboard');
    // Check if canvas is supported on browser
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        img = new Image();
    	img.src = 'pacman10-hp-sprite.png';
    	ctx.drawImage(img, 0, 0);
    }
    else {
        alert('Sorry, canvas is not supported on your browser!');
    }
}