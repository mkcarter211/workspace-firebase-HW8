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

console.log("start...");

$('#signup-form').submit(function(e){
  e.preventDefault();
  console.log("click the submit");
  //value
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++){
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " "+ value);
    inputJson[name] = value;
  }
  var email = inputJson["username"];
  var psw = inputJson["password"];
  firebase.auth().createUserWithEmailAndPassword(email,psw).then(user =>{
    console.log("success");
  }).catch(error=>{
    console.log(error.code);
    console.log(error.message);
  });
});