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

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  console.log(inputdata);
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  //var night = parseInt(inputJson["num"]);
  // var cost = parseInt(inputJson["room"].slice(-3));
  // console.log("The cost for this reservation is " + night * cost);

  const array1 = ['a','b','c'];
  array1.forEach(element => console.log("this is" + element));



  
  firebase
    .firestore()
    .collection("hotel")
    .add(inputJson);

    firebase
    .firestore()
    .collection("hotel")
    .onSnapshot(function(querySnapshot){
      console.log(querySnapshot.size);
      querySnapshot.forEach(doc =>{
        console.log(doc.data());
        console.log(doc.data().room);
        console.log(doc.data().checkout);
        var roomtype = (doc.data().room);
        //if (roomtype == "1 Bedroom smaller suite $139"){
          //do sth
        //}

          //do sth
        //console.log(doc.data());
      });
    });

    firebase
  .firestore()
  .collection("hoteldata")
  .onSnapshot(function(querySnapshot) {
    //console.log(querySnapshot);
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc =>{
      console.log(doc.data());
     var roomtype= doc.data().room;
      if (roomtype =="1 Bedroom Smaller Suite $169"){
        // do sth
      console.log("This roomtype")
     }
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


  /* clear the entry */
  $("form")[0].reset();
});
