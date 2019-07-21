/*
take the name, url (pic) and bio from the user and change the original name, url and bio of the page
*/
$("#form1").submit(function(e) {
    e.preventDefault();


    var link_input4 = document.getElementById("link_input4").value; //gets text input
    var namez = document.getElementById("name"); //gets original text
    $(namez).replaceWith(link_input4); //replaces original text with text input

    var link_input5 = document.getElementById("link_input5").value; //gets text input
    var img2 = document.createElement("img"); //creates image
    img2.src = link_input5; //image source is link input
    var imagezz = document.getElementById("image"); //get original image 
    $(imagezz).replaceWith(img2); //replaces imagezz with 

    var link_input6 = document.getElementById("link_input6").value; //gets text input
    var bioz = document.getElementById("bio"); //gets original text
    $(bioz).replaceWith(link_input6); //replaces original text with text input

});




  
  