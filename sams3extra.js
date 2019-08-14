var firebaseConfig = {
  apiKey: "AIzaSyA4giFpp3wI4O3dU392Wz8bytkS7A3RotY",
  authDomain: "astute-compiler-247613.firebaseapp.com",
  databaseURL: "https://astute-compiler-247613.firebaseio.com",
  projectId: "astute-compiler-247613",
  storageBucket: "",
  messagingSenderId: "283521296502",
  appId: "1:283521296502:web:80f240f1cda85dee"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

$("#form1").submit(function(e) {
  e.preventDefault();
  var myAudio = document.createElement("audio");
  myAudio.src = "sound.mp4"; 
  myAudio.play();

  var imagez = document.getElementById("link_input").value;
  var textz = document.getElementById("link_input2").value;
   
  saveItemToDatabase(imagez, textz);

  document.getElementById("link_input").value = "";
  document.getElementById("link_input2").value = "";
  
  
});

  function saveItemToDatabase(imagez, textz) {
    doc = db.collection("posts2").add({
      image: imagez,
      caption: textz
    })
    .then(function(docRef){
      docRef.get().then(function(doc) {
        addNewItem(doc);
  });
});
  }
  function addNewItem(doc){ 
      
      var img1 = document.createElement("img"); 
      img1.src = doc.data().image;
      img1.width = "100";
      img1.height = "100"; 

      var captions = document.createElement("div"); 
      captions.classList.add("captions"); 

      var textz_elem = document.createElement("p");
      textz_elem.innerHTML = doc.data().caption;

      captions.appendChild(textz_elem); 


      var xx = document.createElement("img");
      xx.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqOrsLSKS5Uqp6Fn6xsG1it1DQ5HjA10rcTkUCIdzTvMsJEr8WQ";  
      xx.className = "ex";
      xx.style.width= "30px";
      xx.style.height= "30px";

      var scrollz = document.createElement("div");
      scrollz.className = "scrolling"; 
      scrollz.appendChild(xx);

      scrollz.addEventListener("click", function(){ 
        var scrollz_id = doc.id;
        scrollz.id = scrollz_id;
        document.getElementById(scrollz_id).remove(); 
        db.collection("posts2").doc(doc.id).delete();
}); 
      scrollz.appendChild(img1);
      scrollz.appendChild(captions);
      document.getElementById("captioncont").appendChild(scrollz);  
  

   };

  function loadPosts(){
    db.collection("posts2").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        addNewItem(doc);
      });
    });
  };
  
  $(document).ready(function(){
    loadPosts()
  });
