var make = 0;
var call = 0;
var keepCool = 0;
var reflect = 0;
var reset = 0;
function set(mode) {
 var bcolor = "";
 var color = "";
 var focus = "";
 var task = "";
 var radius = 100;
 var mouth = "";
 var mouth1Border = "";
 var mouth1Color = "";
 var anima = "";
 var animab = "a2 8s 1";
 var animaa = "a2 3s infinite";
 var x = document.getElementById("yes");
 var y = document.getElementById("point");
 var x1 = document.getElementById("own");
 var x2 = document.getElementById("um");
 var x3 = document.getElementById("oceano");
 var x4 = document.getElementById("you");
 var x5 = document.getElementById("someone");
 var image = "";
 var sad = "Sadye.jpg";
 if (mode === "make") {
  if (reset < 144) {
   task = "white";
   bcolor = "white";
   color = "crimson";
   focus = "Make it";
   make = make + 1;
   document.getElementById("make")
    .innerHTML = make;
  } else if (reset === 144) {
   focus = "You did it!!!";
   color = "crimson";
bcolor = "Black";
   task = "white";
   mouth1Border = "black";
   mouth1Color = "white";
   anima = animaa;
pauseAll();
x.play();
x1.play(loop);
   console.log("Whitney Houston");
  } else {
   focus = "You passed the point";
   color = "pink";
   task = "white";
   anima = animab;
bcolor = "crimson";
   image = sad;
y.play();
  }
 } else if (mode === "keepCool") {
  if (reset < 144) {
   task = "white";
   bcolor = "darkGray";
   color = "seaGreen";
   focus = "Keep it Cool";
   keepCool = keepCool + 3;
   document.getElementById("keepCool")
    .innerHTML =
    keepCool;
  } else if (reset === 144) {
   focus = "You did it!!!";
   color = "seaGreen";
   bcolor= "black";
   task = "white";
   radius = 100;
   mouth1Border = "black";
   mouth1Color = "white";
   anima = animaa;
   pauseAll();
   x.play();
   x3.play();
   console.log("Djavan");
  } else {
   focus = "You passed the point";
   color = "pink";
   bcolor ="seagreen";
   task = "white";
   anima = animab;
   radius = 0;
   image = sad;
   y.play();
  }
 } else if (mode === "reflect") {
  if (reset < 144) {
   task = "white";
   bcolor = "gray";
   color = "steelBlue";
   focus = "Reflect Upon it";
   reflect = reflect + make + call + keepCool + reset;
   document.getElementById("reflect")
    .innerHTML =
    reflect;
  } else if (reset === 144) {
   focus = "You did it!!!";
   task = "white";
   color = "steelBlue";
   bcolor ="black";
   mouth1Border = "black";
   mouth1Color = "white";
   anima = animaa;
   pauseAll();
   x.play();
   x4.play();
   console.log("Shakira");
  } else {
   focus = "You passed the point";
   color = "pink";
   bcolor="steelBlue";
   task = "white";
   radius = 0;
   anima = animab;
   image =sad;
   y.play();
  } 
 } else if (mode === "reset") {
  if (reset < 144) {
   reset = reset + make + call +
    keepCool + reflect;
   document.getElementById("reset")
    .innerHTML = reset;
   document.getElementById("counter")
    .innerHTML = "";
  }
  if (reset < 144) {
   bcolor = "gray";
   focus = "Face it";
   color = "magenta";
   task = "white";
  } else if (reset === 144) {
   focus = "You did it!!!";
   color = "magenta";
   task = "white";
   mouth = "black";
   mouth1Border = "black";
   mouth1Color = "white";
   anima = animaa;
   bcolor = "black";
   pauseAll();
   x.play();
   x5.play();
   console.log("U2");
  } else {
   focus = "You passed the point";
   color = "pink";
   bcolor = "magenta";
   task = "white";
   radius = 0;
   anima = animab;
   image = sad;
   y.play();
  }
 } else {
  if (reset < 144) {
   task = "white";
   bcolor = "lightGray";
   color = "orange";
   focus = "Call it";
   call = call + 2;
   document.getElementById("call")
    .innerHTML = call;
  } else if (reset === 144) {
   focus = "You did it!!!";
   color = "orange";
   bcolor="black";
   task = "white";
   mouth1Border = "black";
   mouth1Color = "white";
   anima = animaa;
   pauseAll();
   x.play();
   x2.play();
   console.log("Tribalistas");
  } else {
   focus = "You passed the point";
   color = "pink";
   task = "white";
   radius = 0;
   anima = animab;
   bcolor="orange";
   image = sad;
   y.play();
  }
 }
 console.log(focus);
 document.getElementbyId("face").style.backgroundColor = color;
 document.getElementById("face").style
  .animation = anima;
 var board = document.getElementById(
  "counter");
 var panel = document.createElement(
  "li");
 panel.innerHTML = focus;
 board.appendChild(panel);
 document.getElementById("picture").src = image;
 document.getElementById("mouth").style
  .borderRadius = radius;
 document.getElementById("screen").style
  .backgroundColor = color;
 document.getElementById("task")
  .innerHTML = focus;
 document.getElementById("task").style
  .color = task;
 document.getElementById("task").style
  .color = task;
 document.getElementById("button").style
  .backgroundColor = bcolor;
 document.getElementById("mouth1").style
  .borderColor = mouth1Border;
 document.getElementById("mouth1").style
  .backgroundColor = mouth1Color;
}
function callTheHeart() {
 location.replace(
  "https://ecmbqa.mimo.run/index.html")
}
function theCoder() {
 location.replace(
  "https://uvz2dx.mimo.run/index.html")
}
function pauseAll() {
  var sounds = document.getElementsByTagName("audio");
  for(i=0; i<sounds.length; i++) sounds[i].pause();
}
