function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	video = createVideo('video.mp4');
    video.hide();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');

	instializeInSetup(mario);
}

function draw() {
	game()
	image(video, 0, 0, 480, 380);
}





