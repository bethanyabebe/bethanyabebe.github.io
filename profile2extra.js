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

    var link_input4 = document.getElementById("link_input4").value; 
    var link_input5 = document.getElementById("link_input5").value;
    var link_input6 = document.getElementById("link_input6").value; 
  
    saveItemToDatabase(link_input4, link_input5, link_input6);

    document.getElementById("link_input4").value= "";
    document.getElementById("link_input5").value= "";
    document.getElementById("link_input6").value= "";

});

  function saveItemToDatabase (link_input4, link_input5, link_input6) {
    doc = db.collection("profile2").doc("userprofile").set({
      name: link_input4,
      image: link_input5,
      bio: link_input6,
    })
    .then(function() {
      db.collection("profile2").doc("userprofile").get().then(function(doc) {
        replace(link_input4, link_input5, link_input6);
      });
    });
  }

  function replace(link_input4, link_input5, link_input6){
    var namez = document.getElementById("name");
    namez.innerHTML = link_input4;

    var imagezz = document.getElementById("image");  
    imagezz.src = link_input5; 

    var bioz = document.getElementById("bio"); 
    bioz.innerHTML = link_input6;
  }

function loadProfile(){
    db.collection("profile2").doc("userprofile").get().then(function(doc) {
      replace(doc.data().name, doc.data().image, doc.data().bio)
      });
  };
  
  $(document).ready(function(doc){
    loadProfile();
  });
