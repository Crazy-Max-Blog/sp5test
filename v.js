var mic;
var micOn;
var recorder;
var recording;
var soundFile;

function setup() {
  // uncomment this line to make the canvas the full size of the window
   createCanvas(windowWidth, windowHeight);
   // the volume is a number between 0 and 1
   mic = new p5.AudioIn();
   micOn = false;
   //create a new recorder object
   recorder = new p5.SoundRecorder();
   //set the recorder to listen to the mic object
   recorder.setInput(mic);
   //create a new soundfile object to playback and save the recording
   soundFile = new p5.SoundFile();
   soundFile.resume();
}

function draw() {
  // draw stuff here
  background(255);
  soundFile.setVolume(1);
  if (micOn) {
    //it's a recording indicator :)
    noStroke();
    fill(255,0,0);
    ellipse(50, 50, 25, 25);

  }

}

function keyPressed() {
    soundFile.resume();
    soundFile.play();
    console.log("Playing Sound");
}

function mousePressed() {
	micOn = !micOn;
	if (micOn) {
		mic.start();
    recorder.record(soundFile);
	}
	else {
		mic.stop();
    recorder.stop();
	}
}
