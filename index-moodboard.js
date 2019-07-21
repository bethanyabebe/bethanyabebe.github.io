$("#form_id").submit(function(e) {
    e.preventDefault();
  var input_value= document.getElementById("link_input").value;
  var img = document.createElement("img");
  img.src = input_value;
  var containerDiv = document.getElementById("container");
  containerDiv.appendChild(img);

  var myAudio = document.createElement("audio");
  myAudio.src = "right.mp4";

  if (input_value) {
    myAudio.play();
  }

});



