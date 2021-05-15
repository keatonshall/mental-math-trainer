let textBox;
let problem;
let countDownTimeStamp = 0;
let voice;
let screenMode = 0;
let countDownCounter = 3;
let speechRec;


function setup() {

  //Creating Voice
  voice = new p5.Speech();
  voice.onLoad = voiceReady();

  createCanvas(windowWidth, windowHeight);

  //creating text box and problm
  textBox = new TextBox();
  problem = chooseProblem();
console.log(problem);
  //Styling

  textAlign(CENTER, CENTER);
  frameRate(60);
}

//Drawing screens/mode

function enter(){
  textBox.show('enter');
  displayProblem(problem);
}

function readyCheck(){
  textSize(50);
  text("Click to start", width / 2, height / 2);
}

function sayProb(p){
  voice.speak(questionToScript(p));
}

function countDown(){

if(countDownCounter == 0){

  nextScreen();
  sayProb(problem);

  return;
}

  textBox.show('countdown');
  fill(0);
  textSize(50);
  text(countDownCounter, width / 2, height / 2);
  if ((frameCount - countDownTimeStamp) % 60 == 0) {
    countDownCounter--;
  }

}

function draw() {

  background(74, 119, 255);


if(screenMode == 0){
  readyCheck();
}else if (screenMode == 1){
  countDown();
}else{
  enter();
}
}


function keyPressed() {
  console.log(1);

  if (!isNaN(key)) {
    if (textBox.text.length < 4) {
      textBox.text += key;
    }
  } else if (keyCode == BACKSPACE) {
    //console.log(1)
    textBox.text = textBox.text.slice(0, -1)
  }
  if (textBox.text == problem.a.toString()) {
  //  console.log((frameCount - st) / 60)
    problem = chooseProblem();

    sayProb(problem);

    textBox.text = "";
    countDownTimeStamp = frameCount;
  }
}

function voiceReady() {
  console.log('Speak!');
  //voice.speak('Hello, this is a program to make you better at mental arithmetic');
}

function mousePressed() {

  if (screenMode == 0) {
    nextScreen();
    st = frameCount;

  }

}


function nextScreen(){
  screenMode ++;
}


function questionToScript(q) {
  let o = q.o;
  let oScript;
  let script;

  if (o == "+") {
    oScript = 'plus';
  } else if (o == '-') {
    oScript = 'minus';
  } else if (o == 'x') {
    oScript = 'times';
  } else if (o == '/') {
    oScript = 'divided by';
  } else if (o == '^2') {
    oScript = 'squared';
  }

  if (o != "^2") {
    script = q.nums[0] + oScript + q.nums[1];
  } else {
    script = q.nums[0] + oScript;
  }
  return script;

}
