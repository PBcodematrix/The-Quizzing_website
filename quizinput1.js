// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getDatabase, set, ref, update,onValue,get,child  } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcsQIuUfP_wD5Jef-M_Tbgwqbwjl7yvLg",
    authDomain: "quizzing-495f8.firebaseapp.com",
    databaseURL: "https://quizzing-495f8-default-rtdb.firebaseio.com",
    projectId: "quizzing-495f8",
    storageBucket: "quizzing-495f8.appspot.com",
    messagingSenderId: "442259494870",
    appId: "1:442259494870:web:ff67437fe0d8906ac93677",
    measurementId: "G-VKHBJRD5E4"
};

// Initialize Firebase
var uid;
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const user = auth.currentuser;
const db = getDatabase(app);
const dbRef = ref(db);
var topic;
  onAuthStateChanged(auth, (user) => {
    if (!user) {
        location.replace('sign in.html');

    }
    else {
        uid = user.uid;

       

    }
});

// var arr =[""];
// set(ref(db, 'topic/' ), {
//     arr: arr

//  })
//  .then(() => {

//      alert("data stored");
//  })
//  .catch((error) => {
//      alert(error);
//  })


 var topic;
document.getElementById("submitTopic").addEventListener('click',(e)=>{
    e.preventDefault();
    
var radios = document.querySelectorAll('input[name="topic"]');
for (const radio of radios) {
 if (radio.checked) {
  

         topic=radio.value;
         document.getElementById("top").innerHTML = topic;
         get(child(ref(db),'topic/arr')).then((snapshot) => {
            if (snapshot.exists()) {
                var arr1= [];
                arr1= snapshot.val();

                console.log(arr1);
               
                   var check=0;
                    for (var i = 0; i < arr1.length; i++) {
                      if (arr1[i] == topic)
                      {
                        check++;
                        break;
                      }
                    }
                  
                 
                  if(check==0){
                arr1.push(topic);
                  }
                console.log(arr1);

           set(ref(db, 'topic/' ), {
              arr: arr1
       
           })
           .then(() => {
  
               alert("data stored");
           })
           .catch((error) => {
               alert(error);
           })

                }else {
                 console.log("No data available");
                  }
  
              }).catch((error) => {
                console.error(error);
              });

             
 }
}


})

          



document.getElementById("saveQuiz").addEventListener('click', (e) => {
    e.preventDefault();


    //                                               References

    var ans1,ans2,ans3,ans4,ans5;
    var a1,a2,a3,a4,a5;
    var radios = document.querySelectorAll('input[name="answer1"]');
    for (const radio of radios) {
        if (radio.checked) {
             ans1 = "t" + radio.id ;
             
         a1 =   document.getElementById(ans1).value;
         
           
        }
    }

    var radios = document.querySelectorAll('input[name="answer2"]');
    for (const radio of radios) {
        if (radio.checked) {
            ans2 = "v" + radio.id ;
         a2 =   document.getElementById(ans2).value;
        }
    }



    var radios = document.querySelectorAll('input[name="answer3"]');
    for (const radio of radios) {
        if (radio.checked) {
            ans3 = "u" + radio.id ;
            a3 =   document.getElementById(ans3).value;
        }
    }




    var radios = document.querySelectorAll('input[name="answer4"]');
    for (const radio of radios) {
        if (radio.checked) {
            ans4 = "w" + radio.id ;
         a4 =   document.getElementById(ans4).value;
        }
    }


    var radios = document.querySelectorAll('input[name="answer5"]');
    for (const radio of radios) {
        if (radio.checked) {
            ans5 = "y" + radio.id ;
            console.log(ans5);
            a5 =   document.getElementById(ans5).value;
        }
    }

    const qs1 = document.getElementById("qs1").value;
    const qs2 = document.getElementById("qs2").value;
    const qs3 = document.getElementById("qs3").value;
    const qs4 = document.getElementById("qs4").value;
    const qs5 = document.getElementById("qs5").value;

    const qs1opt1 = document.getElementById("taoption1").value;
    const qs1opt2 = document.getElementById("taoption2").value;
    const qs1opt3 = document.getElementById("taoption3").value;
    const qs1opt4 = document.getElementById("taoption4").value;

    const qs2opt1 = document.getElementById("vboption1").value;
    const qs2opt2 = document.getElementById("vboption2").value;
    const qs2opt3 = document.getElementById("vboption3").value;
    const qs2opt4 = document.getElementById("vboption4").value;

    const qs3opt1 = document.getElementById("ucoption1").value;
    const qs3opt2 = document.getElementById("ucoption2").value;
    const qs3opt3 = document.getElementById("ucoption3").value;
    const qs3opt4 = document.getElementById("ucoption4").value;

    const qs4opt1 = document.getElementById("wdoption1").value;
    const qs4opt2 = document.getElementById("wdoption2").value;
    const qs4opt3 = document.getElementById("wdoption3").value;
    const qs4opt4 = document.getElementById("wdoption4").value;

    const qs5opt1 = document.getElementById("yeoption1").value;
    const qs5opt2 = document.getElementById("yeoption2").value;
    const qs5opt3 = document.getElementById("yeoption3").value;
    const qs5opt4 = document.getElementById("yeoption4").value;





    set(ref(db, 'quizzes/' + topic ), {
        qs1: qs1,
        q1opt1:qs1opt1,
        q1opt2:qs1opt2,
        q1opt3:qs1opt3,
        q1opt4:qs1opt4,
        ans1: a1,
        qs2: qs2,
        q2opt1:qs2opt1,
        q2opt2:qs2opt2,
        q2opt3:qs2opt3,
        q2opt4:qs2opt4,
        ans2:a2,
        qs3: qs3,
        q3opt1:qs3opt1,
        q3opt2:qs3opt2,
        q3opt3:qs3opt3,
        q3opt4:qs3opt4,
        ans3:a3,
        qs4: qs4,
        q4opt1:qs4opt1,
        q4opt2:qs4opt2,
        q4opt3:qs4opt3,
        q4opt4:qs4opt4,
        ans4:a4,
        qs5: qs5,
        q5opt1:qs5opt1,
        q5opt2:qs5opt2,
        q5opt3:qs5opt3,
        q5opt4:qs5opt4,
        ans5:a5,



    })
        .then(() => {
            alert("data stored");
        })
        .catch((error) => {
            alert(error);
        })






})




