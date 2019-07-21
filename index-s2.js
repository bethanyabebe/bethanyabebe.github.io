$("#form1").submit(function(e) {
    e.preventDefault();


    var xx = document.createElement("img"); //creates an element for image
    xx.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqOrsLSKS5Uqp6Fn6xsG1it1DQ5HjA10rcTkUCIdzTvMsJEr8WQ";  //defines image source
    xx.className = "ex";
    xx.style.width= "30px";
    xx.style.height= "30px";

    //creates div for container
    var scrollz = document.createElement("div"); //creates a div called scrollz
    scrollz.className = "scrolling"; //defines scrollz as scrolling class
    scrollz.appendChild(xx);

    scrollz.addEventListener("click", function(){ //creates a scenario where the user clicks on the submit button
        var scrollz_id = String(Math.random()); //stores a random number as a string and defines it as captions_id
        scrollz.id = scrollz_id;
        document.getElementById(scrollz_id).remove(); //gets the element captions_id and removes it
}); 
    
    // creates text
    var link1 = document.getElementById("link_input2"); //calls the link_input2 from html and defines it as link_input2 */
    var textz = link1.value;
    link1.value = "";
    addNewItem(textz, scrollz); //runs the function addNewItem with the parameter textz and scrollz
    
});
 
    function addNewItem(textz, scrollz){ //creates a function called addNewItem with the paramaters textz

        //creates image
        var imagez = document.getElementById("link_input").value; //calls element from html and stores it as input_value
        var img1 = document.createElement("img"); //creates an element called img and stores it as img
        img1.src = imagez; //defines the image source as the input_value
        img1.width = "100"; //defines image width
        img1.height = "100"; //defines image height

        //start of text
        var captions = document.createElement("div"); //creates an element called div and stores it as captions
        captions.classList.add("captions"); 

        var textz_elem = document.createElement("p"); // creates an element called p and stores it as inCaption
        textz_elem.innerHTML = textz;

        captions.appendChild(textz_elem); //adds the p tag to the end of the div 

        scrollz.appendChild(img1); //adds img1 to scrollz
        scrollz.appendChild(captions); //adds captions to scrollz 
        document.getElementById("captioncont").appendChild(scrollz); //adds scrollz to the end of captioncont
    

     };
   
