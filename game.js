function draw() {
    board = document.getElementById("game");
    context=board.getContext("2d");
    sprites = new Image();
    sprites.src = "assets/duckhunt.png";
    sprites.onload = function() {
		draw_sky();
		draw_dirt();
		draw_bushes();
		draw_tree();
		draw_dog();
		draw_birds();
	}
}

function draw_sky()	{
	context.fillStyle="#87CEEB";
	context.fillRect(0,0,800,400);
}

function draw_dirt() {
	context.fillStyle="#C96A1B";
	context.fillRect(0,284,800,401);
}

function draw_bushes() {
	context.drawImage(sprites, 0, 714, 839, 177, 0, 370, 800, 169);
}

function draw_tree() {
	context.drawImage(sprites, 0, 271, 77, 129, 0, 300, 100, 167);
}

function draw_dog()	{
	context.drawImage(sprites, 0, 0, 60, 47, 300, 470, 100, 78);
}

function draw_birds() {
	context.drawImage(sprites, 0, 153, 33, 40, 680, 20, 66, 80);
	context.drawImage(sprites, 37, 153, 40, 44, 410, 200, 80, 88);
	context.drawImage(sprites, 77, 144, 40, 35, 80, 300, 80, 70);
	context.drawImage(sprites, 78, 196, 41, 39, 250, 370, 81, 78);
	context.drawImage(sprites, 44, 236, 32, 39, 590, 400, 64, 78);
}