
var myAudio = document.createElement("audio");
myAudio.src = "right.m4a";

function putWordOnPage() {
  console.log("Executing putWordOnPage()...");
  var randomWord = pickRandomWord();
  console.log(randomWord);
  var randomX = getRandomX();
  var randomY = getRandomY();
  insertWordOnPage(randomWord, randomX, randomY);
}

$(document).ready(function() {
  setInterval(putWordOnPage, 1000);
});

var randomWordList = [
  "import",
  "dump",
  "factory",
  "cell phone",
  "brand",
  "eagle",
  "leadership",
  "cycle",
  "happen",
  "childish",
  "fair",
  "divide",
  "forecast",
  "college",
  "exaggerate",
  "graduate",
  "rhythm",
  "moment",
  "heart",
  "stunning",
]

function pickRandomWord(){
  console.log("Executing putWordOnPage()...");
  return randomWordList [Math.floor (Math.random() * randomWordList.length)];
}

function getRandomX() {
  console.log("Executing putWordOnPage()...");
  return Math.floor(Math.random() * window.innerWidth);
 
}

function getRandomY() {
  console.log("Executing putWordOnPage()...");
  return Math.floor (Math.random() * window.innerHeight);
}

function insertWordOnPage(word, x, y){

  var h= document.createElement("h1");
  var w= document.createTextNode(word);
  h.appendChild(w);
  var containerDiv = document.getElementById ("container");
  containerDiv.appendChild(h);


  h.style.left= x + 'px';
  h.style.position= 'absolute';
  h.style.top= y + 'px';
  
  containerDiv.appendChild(h);

}

$("#form_id").submit(function(e) { 
    e.preventDefault();

    var text_input = document.getElementById('text_input');
    var input_value = text_input.value;
    var elem = findMatchingWord(input_value);
    if (elem !== -1) elem.remove();
    text_input.value="";
});

function findMatchingWord(text_input) {
  
  var wordz = document.getElementById("container").childNodes;
   for (var i = 0; i < wordz.length; i++) {
     var nodes = wordz[i]; 

     if (nodes.innerHTML == text_input) {
        myAudio.play();
        return nodes; 
     }
       setTimeout(function(){ alert("Time is up! Click refresh to play again or click the back button to try another skill level!")} , 20000);

    }
          return -1;
  }

