// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getDatabase, set, ref, update,onValue,get,child } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"
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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const user = auth.currentuser;
const db = getDatabase(app);
const dbRef = ref(db);
var uid;
var arr1;
var topic2;
var count = 1;

var anscount = 0;
var scorevalue;
var leaderboard=[{name: 'Piyush', score: '4'}];
var leaderboard2=[];
function loadQs(){};



// set(ref(db, 'players/' ), {
// leaderboard : leaderboard
// })
// .then(() => {
//     alert("data stored");
// })
// .catch((error) => {
//     alert(error);
// })


          //..................................................... Timer............................................//          

      let time;
      const total_time = 20;
      let sec = total_time;
      
         function timer()
         {
          document.getElementById('count-timer').innerHTML=sec;
          sec--;
          if(sec<6)
          {
            document.querySelector("#count-timer").style.color="red";
          } else if(sec>=6)
          {
            document.querySelector("#count-timer").style.color="black";
          }
          if (sec == 0){
              sec=total_time;
              clearInterval(time);
              count++;
              loadQs();
             
            } 
             
      
         }

         var player;
bttn.addEventListener("click", function(){
   

     player = document.getElementById("user-name").value;
    
    console.log(player);

   
});


get(child(ref(db),'topic/arr')).then((snapshot) => {
    if (snapshot.exists()) {
       
        arr1= snapshot.val();
        console.log(arr1);
        for(var i=1;i<arr1.length;i++)
        {
          
            
            var div=document.createElement('div');
            div.classList.add(arr1[i]);
            div.classList.add("selectTopic");
            var inputel= document.createElement('input');
            inputel.type="radio";
            inputel.name="topic";
            inputel.setAttribute('id',arr1[i]);
            inputel.value=arr1[i];
            var newlabel = document.createElement("Label");
            newlabel.setAttribute("for",arr1[i]);
            newlabel.innerHTML = arr1[i];
            div.appendChild(inputel);
            div.appendChild(newlabel);
            document.getElementById("add-element").appendChild(div);
        }

        }else {
         console.log("No data available");
          }

      }).catch((error) => {
        console.error(error);
      });

    
      document.getElementById("bttn2").addEventListener('click',(e)=>{
        e.preventDefault();
        
    var radios = document.querySelectorAll('input[name="topic"]');
    for (const radio of radios) {
     if (radio.checked) {
      
    
             topic2=radio.value;
             console.log(topic2);
         
            //  set(ref(db, 'players/' +topic2 ), {
            //     leaderboard : leaderboard
            //     })
            //     .then(() => {
            //         alert("data stored");
            //     })
            //     .catch((error) => {
            //         alert(error);
            //     })






             get(child(dbRef, 'quizzes/' + topic2 )).then((snapshot) => {
                if (snapshot.exists()) {
            
                var answer;
               
    
               function loadQs2(){
    
                            // ........................................POLL STATUS.....................................
// var opt1=0;
// var opt2=0;
// var opt3=0;
// var opt4=0;

//                 set(ref(db, 'Poll/'+ topic2 +"/qs" + count), {
//                     option1:opt1,
//                     option2:opt2,
//                     option3:opt3,
//                     option4:opt4,
                    
//                    })
//                    .then(() => {
//                        alert("data stored");
//                    })
//                    .catch((error) => {
//                        alert(error);
//                    })








                    sec=total_time;
                    clearInterval(time);
                   
                    timer();   
                    
                    time = setInterval(timer,1000);

                    document.querySelectorAll('input[name="answer"]').forEach(option=> option.checked=false);
                        if(count==1)
                        {
    
                            document.getElementById("qs").innerHTML =        snapshot.val().qs1;
                            document.getElementById("ans1a").innerHTML =   snapshot.val().q1opt1;
                            document.getElementById("ans2a").innerHTML =   snapshot.val().q1opt2;
                            document.getElementById("ans3a").innerHTML =   snapshot.val().q1opt3;
                            document.getElementById("ans4a").innerHTML =   snapshot.val().q1opt4;
                             answer  = snapshot.val().ans1;
        
    
    
                        } else
                        if(count==2)
                        {
    
                       
                        document.getElementById("qs").innerHTML =        snapshot.val().qs2;
                        document.getElementById("ans1a").innerHTML =   snapshot.val().q2opt1;
                        document.getElementById("ans2a").innerHTML =   snapshot.val().q2opt2;
                        document.getElementById("ans3a").innerHTML =   snapshot.val().q2opt3;
                        document.getElementById("ans4a").innerHTML =   snapshot.val().q2opt4;
                        answer  =      snapshot.val().ans2;
            
                        
                         
                       
    
                        } else 
                        if(count==3)
                        {
    
                            document.getElementById("qs").innerHTML      =   snapshot.val().qs3;
                            document.getElementById("ans1a").innerHTML =   snapshot.val().q3opt1;
                            document.getElementById("ans2a").innerHTML =   snapshot.val().q3opt2;
                            document.getElementById("ans3a").innerHTML =   snapshot.val().q3opt3;
                            document.getElementById("ans4a").innerHTML =   snapshot.val().q3opt4;
                             answer  =      snapshot.val().ans3;
            
                        
                         
                       
    
                        } else 
                        if(count==4)
                        {
    
                            document.getElementById("qs").innerHTML =        snapshot.val().qs4;
                            document.getElementById("ans1a").innerHTML =   snapshot.val().q4opt1;
                            document.getElementById("ans2a").innerHTML =   snapshot.val().q4opt2;
                            document.getElementById("ans3a").innerHTML =   snapshot.val().q4opt3;
                            document.getElementById("ans4a").innerHTML =   snapshot.val().q4opt4;
                             answer  =      snapshot.val().ans4;
            
                        
                         
                       
                        } else 
                        if(count==5)
                        {
    
                            document.getElementById("qs").innerHTML =        snapshot.val().qs5;
                            document.getElementById("ans1a").innerHTML =   snapshot.val().q5opt1;
                            document.getElementById("ans2a").innerHTML =   snapshot.val().q5opt2;
                            document.getElementById("ans3a").innerHTML =   snapshot.val().q5opt3;
                            document.getElementById("ans4a").innerHTML =   snapshot.val().q5opt4;
                             answer  =      snapshot.val().ans5;
            
                        }

                    }

//                                           Showing Correct Answers

                       
function showAns(){


    
    document.querySelectorAll('input[name="answer"]').forEach(option=> option.checked=false);

   

  

    if(nextQs==1)
    {
    
        document.getElementById("qs").innerHTML =        snapshot.val().qs1;
        document.getElementById("ans1a").innerHTML =   snapshot.val().q1opt1;
        document.getElementById("ans2a").innerHTML =   snapshot.val().q1opt2;
        document.getElementById("ans3a").innerHTML =   snapshot.val().q1opt3;
        document.getElementById("ans4a").innerHTML =   snapshot.val().q1opt4;
         answer  = snapshot.val().ans1;

    
    
    
    } else
    if(nextQs==2)
    {
    
    
    document.getElementById("qs").innerHTML =        snapshot.val().qs2;
    document.getElementById("ans1a").innerHTML =   snapshot.val().q2opt1;
    document.getElementById("ans2a").innerHTML =   snapshot.val().q2opt2;
    document.getElementById("ans3a").innerHTML =   snapshot.val().q2opt3;
    document.getElementById("ans4a").innerHTML =   snapshot.val().q2opt4;
    answer  =      snapshot.val().ans2;
    
    
     
    
    
    } else 
    if(nextQs==3)
    {
    
        document.getElementById("qs").innerHTML      =   snapshot.val().qs3;
        document.getElementById("ans1a").innerHTML =   snapshot.val().q3opt1;
        document.getElementById("ans2a").innerHTML =   snapshot.val().q3opt2;
        document.getElementById("ans3a").innerHTML =   snapshot.val().q3opt3;
        document.getElementById("ans4a").innerHTML =   snapshot.val().q3opt4;
         answer  =      snapshot.val().ans3;
    
    
     
    
    
    } else 
    if(nextQs==4)
    {
    
        document.getElementById("qs").innerHTML =        snapshot.val().qs4;
        document.getElementById("ans1a").innerHTML =   snapshot.val().q4opt1;
        document.getElementById("ans2a").innerHTML =   snapshot.val().q4opt2;
        document.getElementById("ans3a").innerHTML =   snapshot.val().q4opt3;
        document.getElementById("ans4a").innerHTML =   snapshot.val().q4opt4;
         answer  =      snapshot.val().ans4;
    
    
     
    
    } else 
    if(nextQs==5)
    {
    
        document.getElementById("qs").innerHTML =        snapshot.val().qs5;
        document.getElementById("ans1a").innerHTML =   snapshot.val().q5opt1;
        document.getElementById("ans2a").innerHTML =   snapshot.val().q5opt2;
        document.getElementById("ans3a").innerHTML =   snapshot.val().q5opt3;
        document.getElementById("ans4a").innerHTML =   snapshot.val().q5opt4;
         answer  =      snapshot.val().ans5;
    
    }

    for(var i=1;i<5;i++)
    { 
        var correctans= "ans" + i + "a";
       
        if(answer==document.getElementById(correctans).innerHTML)
        {
            document.getElementById(correctans).classList.add("correctAns");
        }
        else{
            document.getElementById(correctans).classList.remove("correctAns");

        }
    }


}         

                
    
                    loadQs = loadQs2;
                    loadQs();

                    
                    
                    

                    var nextQs=1;
                    document.getElementById("btn-color").addEventListener("click",() => {

                        document.getElementById("submit").style.display="none";
                        document.getElementById("next").style.display="block";
                        showAns();
                        
                    })
                  
                    document.getElementById("next").addEventListener("click",() => {
                        nextQs++;
                  

                        if(nextQs<6)
                        {  
                            showAns();


                           
                           
                        } else {
                            nextQs=1;
                        }

                    })
                     
                    
                document.getElementById("submit").addEventListener("click",() => {
                    var poll1=0;
                    var poll2=0;
                    var poll3=0;
                    var poll4=0;
                    var radios = document.querySelectorAll('input[name="answer"]');
                    for (const radio of radios) {
                        var w= radio.id + "a";
                       
                      
                        if (radio.checked) {
                           
                          if( document.getElementById(w).innerHTML== answer)
                          {
                            anscount++;
                          
                        }
                        if(radio.id=="ans1"){
                            poll1++;
                            console.log(poll1);
                        } 
                         if(radio.id=="ans2"){
                            poll2++;
                        } 
                         if(radio.id=="ans3"){
                            poll3++;
                        } 
                          if(radio.id=="ans4"){
                            poll4++;
                        } 
                           
                        }
                    }
                    // count  = Math.random();
                    // count = Math.floor(count*5+1);
                    // console.log(count);

//.......................................... POLL STATUS.................................
                   

                    if(count<6)
                    { 
                get(child(ref(db),'Poll/'+ topic2 +"/qs" + count)).then((snapshot) => {
                    if (snapshot.exists()) {

                        var option1 =snapshot.val().option1;
                        var option2 =snapshot.val().option2;
                        var option3 =snapshot.val().option3;
                        var option4 =snapshot.val().option4;

                        // console.log(option1);
                        // console.log(option2);
                        // console.log(option3);
                        // console.log(option4);



               
                set(ref(db, 'Poll/'+ topic2 +"/qs" + count), {
                                        option1:(poll1+option1),
                                        option2:(poll2+option2),
                                        option3:(poll3+option3),
                                        option4:(poll4+option4),
                                        
                                       })
                                       .then(() => {
                                        //    console.log(poll1+option1);
                                        //    console.log(poll2+option2);
                                        //    console.log(poll3+option3);
                                        //    console.log(poll4+option4);
                                           count++;
                                        //    alert("data stored");



                                        
                    if(count<6)
                    {  
                        loadQs();
                      
                       
                       
                    } 
                    else if(count==6){
                        console.log(anscount);
                        scorevalue=anscount;
                        document.getElementById("score-percent").innerHTML="Your score is: " + (anscount/5)*100 + "%";
                        clearInterval(time);
                        document.getElementById('show_time').style.display="none";
                        document.getElementById('score').style.display="block";



                        get(child(ref(db),'players/' + topic2)).then((snapshot) => {
                            if (snapshot.exists()) {
                                var leaderboard1= [];
                                leaderboard1= snapshot.val().leaderboard;
                                console.log(leaderboard1);
                                console.log(leaderboard1[0].name);
                                var check=0;
                                for (var i = 0; i < leaderboard1.length; i++) {
                                  if (leaderboard1[i].name==player)
                                  {  
                                    leaderboard1[i].score=anscount;
                                    check++;
                                    break;
                                  }
                                }
                              
                             
                              if(check==0){
                                leaderboard1.push({name:player, score: anscount});
                              } 
                                // console.log(leaderboard1);
                
                               
                                
                                // console.log(leaderboard1);
                
                           set(ref(db, 'players/' +topic2 ), {
                              leaderboard: leaderboard1
                       
                           })
                           .then(() => {

                            //    alert("data stored");    

                               get(child(ref(db),'players/'+topic2)).then((snapshot) => {
                                if (snapshot.exists()) {

                                    leaderboard2=snapshot.val().leaderboard;
                                   
                                    console.log(leaderboard2);

                                    
                              function compare(a,b) { return b.score - a.score }
                              
                              leaderboard2.sort(compare);
 
                              console.log(leaderboard2); 
                               
                              for(var i=0;i<leaderboard2.length;i++)
                              {
                                var div2=document.createElement('div');
                                div2.classList.add("board");
                                var list=document.createElement("li");
                                var span1= document.createElement("span");
                                var span2= document.createElement("span");
                                span2.classList.add("pscore");
                                span1.classList.add("pname");
                                span1.innerHTML = leaderboard2[i].name;
                                span2.innerHTML = ((leaderboard2[i].score)/5)*100 + "%";
                                list.appendChild(span1);
                                list.appendChild(span2);
                                div2.appendChild(list);
                                document.getElementById("add-player").appendChild(div2);
                              }

                          
                              
                              



                                }
                                }).catch((error) => {
                                    console.error(error);
                                  });
                                 

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













                                        
                                        })
                                       .catch((error) => {
                                           alert(error);
                                       })



                    }
                }).catch((error) => {
                    console.error(error);
                  });
                 
                }





                    
                   

                  
           
    



               





    
                });
    
                } else {
                  console.log("No data available");
                }
               
             
           
    
        });
    
     }

    }
})
    

          





