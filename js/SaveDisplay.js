// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// save the data
$(".sampleSurvey input[type='submit']").click(function(e){
  e.preventDefault;
  var inputdata = $("form").serializeArray();
  var inputJson = {};
  console.log(inputdata);
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    var comm = inputdata[i]["comm"];
    //console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  firebase
    .firestore()
    .collection("hotel")
    .add(inputJson);

});
firebase
    .firestore()
    .collection("hotel")
    .add();



// update the result in table
firebase
  .firestore()
  .collection("hoteldata")
  .onSnapshot(function(querySnapshot) {
    //console.log(querySnapshot);
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc =>{
      console.log(doc.data());
     doc.data().choice=="A";
     if((".sampleSurvey.A").isSelected){
       parseInt($("#ans1").text()) + 1;
     }
     if((".sampleSurvey.B").isSelected){
       parseInt($("#ans2").text()) + 1;
     }
     if((".sampleSurvey.C").isSelected){
       parseInt($("#ans3").text()) + 1;
     }
     if((".sampleSurvey.D").isSelected){
       parseInt($("#ans4").text()) + 1;
     }
     if((".sampleSurvey.E").isSelected){
       parseInt($("#ans5").text()) + 1;
     }
   

      
    });

  });
//var value = parseInt($("#ans3").text()) + 1;
console.log(value);
//$('ans1').text('5');
