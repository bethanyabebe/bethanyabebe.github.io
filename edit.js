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
  var db2 = firebase.firestore();
  
  $("#formuser").submit(function (e) {
    e.preventDefault();
    var users= document.getElementById("user1").value;
    var user2 = document.getElementById("user2").value;
  
      if (user2 != users) {
        alert("Please reenter your username");
        users.value= "";
        user2.value= "";
    }
    else {
      alert("Username saved")
      saveItemToDatabasez(users)
      users.value= "";
      user2.value= "";
    }
  })
    
  function saveItemToDatabasez(users){
    doc= db.collection("users").doc("currentUser").set({
      user: users,
    })
  } 
    $("#formpass").submit(function (e) {
        e.preventDefault();
      var passz= document.getElementById("pass1").value;
      var pass2= document.getElementById("pass2").value;
    
        if (pass2 != passz) {
          alert("Please reenter your password");
          passz.value= "";
          pass2.value= "";
        }

          else {
            saveItemToDatabase(passz)
            alert("Password saved");
            passz.value= "";
            pass2.value= "";
          }
      });
    
    function saveItemToDatabase(passz){
        doc2= db2.collection("users").doc("currentPass").set({
          pass: passz,
        })
      } 

    /*
    .then(function() {
      db.collection("users").doc("currentUser").get().then(function(doc) {
        clear();
      });
    });
  };

    function clear() {
    document.getElementById("user").value= "";
    document.getElementById("pass").value= "";
    }
    
    /*
    function loadUser(){
      db.collection("users").doc("currentUser").get().then(function(doc){
        clear();
      });
    };
    
    $(document).ready(function(){
      loadUser()
    }); */
    

//action= "sams3extra.html"