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

    var todo_input = document.getElementById("todo-input");
    var todo_text = todo_input.value;
  
    saveItemToDatabase(todo_text);
  
    todo_input.value = "";



});

function saveItemToDatabase(todo_text){
    doc = db.collection("notes").add({
    noteText: todo_text
  })

 
.then(function(docRef){
  docRef.get().then(function(doc) {
    addNewItem(doc);
  });
});
}

function addNewItem(doc){

  var todo_card = document.createElement("div");
  todo_card.classList.add("todo_card");

  var todo_text_elem = document.createElement("p");
  todo_text_elem.innerHTML = doc.data().noteText;

  todo_card.appendChild(todo_text_elem)

  document.getElementById("container").appendChild(todo_card);

  var todo_card_id = doc.id
  todo_card.id = todo_card_id


todo_card.addEventListener("click", function(){
  document.getElementById(todo_card_id).remove()
  db.collection("notes").doc(doc.id).delete();
});
}

function loadNotes(){
  db.collection("notes").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        addNewItem(doc);
    });
  });
};

$(document).ready(function(){
  loadNotes()
});




/*

sticky note:
-get data from form
-creat dom elements
-put them on page

form:
-get info from form
-save data to firestore
-creat dom elem & add it to page */