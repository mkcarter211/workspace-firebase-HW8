var firebaseConfig = {
  apiKey: "AIzaSyBCTEYvXcpOxTnJF4i9UCfi2NHuDGMf6xE",
  authDomain: "grocerylist-9d973.firebaseapp.com",
  databaseURL: "https://grocerylist-9d973.firebaseio.com",
  projectId: "grocerylist-9d973",
  storageBucket: "grocerylist-9d973.appspot.com",
  messagingSenderId: "879915568978",
  appId: "1:879915568978:web:ba691188eca4a35c95748b",
  measurementId: "G-CQ4PCHHTX4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$("#Login").submit(function(e){
  e.preventDefault
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJSON = {};
  for (var i = 0; i < inputdata.length; i++){
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " "+ value);
    inputJson[name] = value;
  }
  var email = inputJSON["username"];
  var psw = inputJSON["password"];
  var email = $("login").serializeArray();
  var psw = $("login.pwd").serializeArray();

  firebase.auth().signInWithEmailAndPassword(email,password).then
  (success=>{
    console.log("login successfully");
    let user = firebase.auth().currentUser;

  }).catch(error=>{
    var errormessage = error.message;
    console.log(errorMessage);
  })
});