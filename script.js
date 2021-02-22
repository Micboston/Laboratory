
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
 var anima = "";
 var s0 = "a2 8s 2";
 var s1 = "a2 8s infinite";
 var x = document.getElementById("yes");
 var y = document.getElementById("point");
 var x1 = document.getElementById("own");
 var x2 = document.getElementById("um");
 var x3 = document.getElementById("oceano");
 var x4 = document.getElementById("you");
 var x5 = document.getElementById("someone");
 var image = "";
 var smiling = "smiley.jpg";
 var happy = "excitey.jpg";
 var sad = "Sadye.jpeg";

 if (mode === 'make') {
  if (reset < 144) {
    image = smiling;
   task = "white";
   bcolor = "white";
   color = "rosyBrown";
   focus = "Make it";
   make = make + 1;
   anima = s1;

   document.getElementById("make")
    .innerHTML = make;
  } else if (reset === 144) {
    image = happy;
   focus = "You did it!!!";
   color = "rosyBrown";
bcolor = "black";
   task = "white";
   anima = s1;
pauseAll();
x.play();
x1.play();
   console.log("Whitney Houston");
  } else {
    image = sad;
   focus = "You passed the point";
   color = "lavender";
   task = "white";
   anima = s0;
bcolor = "rosyBrown";
y.play();
}
  
} else if (mode === 'keepCool') {
  if (reset < 144) {
    image = smiling;
   task = "white";
   bcolor = "gray";
   color = "darkslategray";
   focus = "Keep it Cool";
   keepCool = keepCool + 3;
   document.getElementById("keepCool")
    .innerHTML =
    keepCool;
    anima = s1;
  } else if (reset === 144) {
    image = happy;
   focus = "You did it!!!";
   color = "darkslategray";
   bcolor= "black";
   task = "white";
   anima = s1;
   pauseAll();
   x.play();
   x3.play();
   console.log("Djavan");
  } else {
    image = sad;
   focus = "You passed the point";
   color = "lavender";
   bcolor ="darkslategray";
   task = "white";
   anima = s0;
   y.play();
  }
} else if (mode === 'reflect') {
  if (reset < 144) {
    image = smiling;
   task = "white";
   bcolor = "gray";
   color = "staleblue";
   focus = "Reflect Upon it";
   reflect = reflect + make + call + keepCool + reset;
   document.getElementById("reflect")
    .innerHTML =
    reflect;
    anima=s1;
  } else if (reset === 144) {
    image = happy;
   focus = "You did it!!!";
   task = "white";
   color = "staleblue";
   bcolor ="black";
   anima =s1;
   pauseAll();
   x.play();
   x4.play();
   console.log("Shakira");
  } else {
    image = sad;
   focus = "You passed the point";
   color = "lavender";
   bcolor="staleblue";
   task = "white";
   anima = s0;
   y.play();
  }
} else if (mode === 'reset') {

  if (reset < 144) {
    reset = reset + make + call +
      keepCool + reflect;
     document.getElementById("reset")
      .innerHTML = reset;
     document.getElementById("counter")
      .innerHTML = "";
    }
    if(reset <144) {
    image = smiling;
   bcolor = "black";
   focus = "Face it";
   color = "indigo";
   task = "white";

    anima = s1;
  } else if (reset === 144) {
    image = happy;
   focus = "You did it!!!";
   color = "indigo";
   task = "white";
   mouth = "gray";
   anima = s1;
   bcolor = "lavender";
   pauseAll();
   x.play();
   x5.play();
   console.log("Pentatonix");
  } else {
    image = sad;
   focus = "You passed the point";
   color = "black";
   bcolor = "lavender";
   task = "white";
   anima = s0;
   y.play();
  }
 } else {
  if (reset < 144) {
    image = smiling;
   task = "white";
   bcolor = "lightGray";
   color = "lightSalmon";
   focus = "Call it";
   call = call + 2;
   document.getElementById("call")
    .innerHTML = call;
    anima = s1;
  } else if (reset === 144) {
    image = happy;
   focus = "You did it!!!";
   color = "lightSalmon";
   bcolor="black";
   task = "white";
   anima = s1;
   pauseAll();
   x.play();
   x2.play();
   console.log("Tribalistas");
  } else {
    image = sad;
   focus = "You passed the point";
   color = "lavender";
   task = "white";
   anima = s0;
   bcolor="lightSalmon";
   y.play();
  }
 }
 console.log(focus);
 document.getElementById("picture").style
  .animation = anima;
 var board = document.getElementById(
  "counter");
 var panel = document.createElement(
  "li");
 panel.innerHTML = focus;
 board.appendChild(panel);
 document.getElementById("screen").style
  .backgroundColor = color;
 document.getElementById("task")
  .innerHTML = focus;
 document.getElementById("task").style
  .color = task;
 document.getElementById("button").style
  .backgroundColor = bcolor;
  document.getElementById("picture").src = image;
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

