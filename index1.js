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


var arr1;
var leaderboard=[];

get(child(ref(db),'topic/arr')).then((snapshot) => {
    if (snapshot.exists()) {
       
        arr1= snapshot.val();
        console.log(arr1);
        for(var i=1;i<arr1.length;i++)
        {
          
            var li=document.createElement("li");
            li.setAttribute('id',arr1[i]);
                li.innerHTML=arr1[i];
            document.getElementById("add-element").appendChild(li);
            console.log(li);            

        }


     document.getElementById("loadContent").classList.add("d-none");


document.getElementById("Corporate").addEventListener("click",function(){
    


      get(child(ref(db),'players/'+"Corporate")).then((snapshot) => {
        if (snapshot.exists()) {

            leaderboard=snapshot.val().leaderboard;
           
            console.log(leaderboard);

            
      function compare(a,b) { return b.score - a.score }
      
      leaderboard.sort(compare);

      console.log(leaderboard); 
      document.getElementById("add-player").innerHTML="";
      for(var i=0;i<leaderboard.length;i++)
      {
        var div2=document.createElement('div');
        div2.setAttribute('id',"board"+i);
        var list=document.createElement("li");
        var span1= document.createElement("span");
        var span2= document.createElement("span");
        span2.classList.add("pscore");
        span1.classList.add("pname");
        span1.innerHTML = leaderboard[i].name;
        span2.innerHTML = ((leaderboard[i].score)/5)*100 + "%";
        list.appendChild(span1);
        list.appendChild(span2);
        div2.appendChild(list);
        document.getElementById("add-player").appendChild(div2);
        if(i==0)
        {
            document.getElementById('board0').classList.add("gold");
        }
        if(i==1)
        {
            document.getElementById('board1').classList.add("silver");
        }
        if(i==2)
        {
            document.getElementById('board2').classList.add("bronze");
        }
      }

    //   document.getElementById('add-player').childNodes[0].css("background-color", "gold");
    //   document.getElementById('add-player').childNodes[1].css("background-color", "#c0c0c0");
    //   document.getElementById('add-player').childNodes[2].css("background-color", "#cd7f32");

      
      

    }

        }).catch((error) => {
            console.error(error);
          });
})

document.getElementById("Music").addEventListener("click",function(){
    


    get(child(ref(db),'players/'+"Music")).then((snapshot) => {
      if (snapshot.exists()) {

          leaderboard=snapshot.val().leaderboard;
         
          console.log(leaderboard);

          
    function compare(a,b) { return b.score - a.score }
    
    leaderboard.sort(compare);

    console.log(leaderboard); 
    document.getElementById("add-player").innerHTML="";
    for(var i=0;i<leaderboard.length;i++)
    {
      var div2=document.createElement('div');
      div2.setAttribute('id',"board"+i);
      var list=document.createElement("li");
      var span1= document.createElement("span");
      var span2= document.createElement("span");
      span2.classList.add("pscore");
      span1.classList.add("pname");
      span1.innerHTML = leaderboard[i].name;
      span2.innerHTML = ((leaderboard[i].score)/5)*100 + "%";
      list.appendChild(span1);
      list.appendChild(span2);
      div2.appendChild(list);
      document.getElementById("add-player").appendChild(div2);
    

    if(i==0)
    {
        document.getElementById('board0').classList.add("gold");
    }
    if(i==1)
    {
        document.getElementById('board1').classList.add("silver");
    }
    if(i==2)
    {
        document.getElementById('board2').classList.add("bronze");
    }
    }
  //   document.getElementById('add-player').childNodes[0].css("background-color", "gold");
  //   document.getElementById('add-player').childNodes[1].css("background-color", "#c0c0c0");
  //   document.getElementById('add-player').childNodes[2].css("background-color", "#cd7f32");

    
    

  }

      }).catch((error) => {
          console.error(error);
        });
})

document.getElementById("General-Knowledge").addEventListener("click",function(){
    


    get(child(ref(db),'players/'+"General-Knowledge")).then((snapshot) => {
      if (snapshot.exists()) {

          leaderboard=snapshot.val().leaderboard;
         
          console.log(leaderboard);

          
    function compare(a,b) { return b.score - a.score }
    
    leaderboard.sort(compare);

    console.log(leaderboard); 
    document.getElementById("add-player").innerHTML="";
    for(var i=0;i<leaderboard.length;i++)
    {
      var div2=document.createElement('div');
      div2.setAttribute('id',"board"+i);
      var list=document.createElement("li");
      var span1= document.createElement("span");
      var span2= document.createElement("span");
      span2.classList.add("pscore");
      span1.classList.add("pname");
      span1.innerHTML = leaderboard[i].name;
      span2.innerHTML = ((leaderboard[i].score)/5)*100 + "%";
      list.appendChild(span1);
      list.appendChild(span2);
      div2.appendChild(list);
      document.getElementById("add-player").appendChild(div2);

      if(i==0)
      {
          document.getElementById('board0').classList.add("gold");
      }
      if(i==1)
      {
          document.getElementById('board1').classList.add("silver");
      }
      if(i==2)
      {
          document.getElementById('board2').classList.add("bronze");
      }
    }

  //   document.getElementById('add-player').childNodes[0].css("background-color", "gold");
  //   document.getElementById('add-player').childNodes[1].css("background-color", "#c0c0c0");
  //   document.getElementById('add-player').childNodes[2].css("background-color", "#cd7f32");

    
    

  }

      }).catch((error) => {
          console.error(error);
        });
})

document.getElementById("Literature").addEventListener("click",function(){
    


    get(child(ref(db),'players/'+"Literature")).then((snapshot) => {
      if (snapshot.exists()) {

          leaderboard=snapshot.val().leaderboard;
         
          console.log(leaderboard);

          
    function compare(a,b) { return b.score - a.score }
    
    leaderboard.sort(compare);

    console.log(leaderboard); 
    document.getElementById("add-player").innerHTML="";
    for(var i=0;i<leaderboard.length;i++)
    {
      var div2=document.createElement('div');
      div2.setAttribute('id',"board"+i);
      var list=document.createElement("li");
      var span1= document.createElement("span");
      var span2= document.createElement("span");
      span2.classList.add("pscore");
      span1.classList.add("pname");
      span1.innerHTML = leaderboard[i].name;
      span2.innerHTML = ((leaderboard[i].score)/5)*100 + "%";
      list.appendChild(span1);
      list.appendChild(span2);
      div2.appendChild(list);
      document.getElementById("add-player").appendChild(div2);

      if(i==0)
      {
          document.getElementById('board0').classList.add("gold");
      }
      if(i==1)
      {
          document.getElementById('board1').classList.add("silver");
      }
      if(i==2)
      {
          document.getElementById('board2').classList.add("bronze");
      }
    }

  //   document.getElementById('add-player').childNodes[0].css("background-color", "gold");
  //   document.getElementById('add-player').childNodes[1].css("background-color", "#c0c0c0");
  //   document.getElementById('add-player').childNodes[2].css("background-color", "#cd7f32");

    
    

  }

      }).catch((error) => {
          console.error(error);
        });
})

document.getElementById("Food").addEventListener("click",function(){
    


    get(child(ref(db),'players/'+"Food")).then((snapshot) => {
      if (snapshot.exists()) {

          leaderboard=snapshot.val().leaderboard;
         
          console.log(leaderboard);

          
    function compare(a,b) { return b.score - a.score }
    
    leaderboard.sort(compare);

    console.log(leaderboard); 
    document.getElementById("add-player").innerHTML="";
    for(var i=0;i<leaderboard.length;i++)
    {
      var div2=document.createElement('div');
      div2.setAttribute('id',"board"+i);
      var list=document.createElement("li");
      var span1= document.createElement("span");
      var span2= document.createElement("span");
      span2.classList.add("pscore");
      span1.classList.add("pname");
      span1.innerHTML = leaderboard[i].name;
      span2.innerHTML = ((leaderboard[i].score)/5)*100 + "%";
      list.appendChild(span1);
      list.appendChild(span2);
      div2.appendChild(list);
      document.getElementById("add-player").appendChild(div2);

      if(i==0)
      {
          document.getElementById('board0').classList.add("gold");
      }
      if(i==1)
      {
          document.getElementById('board1').classList.add("silver");
      }
      if(i==2)
      {
          document.getElementById('board2').classList.add("bronze");
      }
    }

  //   document.getElementById('add-player').childNodes[0].css("background-color", "gold");
  //   document.getElementById('add-player').childNodes[1].css("background-color", "#c0c0c0");
  //   document.getElementById('add-player').childNodes[2].css("background-color", "#cd7f32");

    
    

  }

      }).catch((error) => {
          console.error(error);
        });
})

document.getElementById("Video-Games").addEventListener("click",function(){
    


    get(child(ref(db),'players/'+"Video-Games")).then((snapshot) => {
      if (snapshot.exists()) {

          leaderboard=snapshot.val().leaderboard;
         
          console.log(leaderboard);

          
    function compare(a,b) { return b.score - a.score }
    
    leaderboard.sort(compare);

    console.log(leaderboard); 
    document.getElementById("add-player").innerHTML="";
    for(var i=0;i<leaderboard.length;i++)
    {
      var div2=document.createElement('div');
      div2.setAttribute('id',"board"+i);
      var list=document.createElement("li");
      var span1= document.createElement("span");
      var span2= document.createElement("span");
      span2.classList.add("pscore");
      span1.classList.add("pname");
      span1.innerHTML = leaderboard[i].name;
      span2.innerHTML = ((leaderboard[i].score)/5)*100 + "%";
      list.appendChild(span1);
      list.appendChild(span2);
      div2.appendChild(list);
      document.getElementById("add-player").appendChild(div2);

      if(i==0)
      {
          document.getElementById('board0').classList.add("gold");
      }
      if(i==1)
      {
          document.getElementById('board1').classList.add("silver");
      }
      if(i==2)
      {
          document.getElementById('board2').classList.add("bronze");
      }
    }

  //   document.getElementById('add-player').childNodes[0].css("background-color", "gold");
  //   document.getElementById('add-player').childNodes[1].css("background-color", "#c0c0c0");
  //   document.getElementById('add-player').childNodes[2].css("background-color", "#cd7f32");

    
    

  }

      }).catch((error) => {
          console.error(error);
        });
})

document.getElementById("Sports").addEventListener("click",function(){
    


    get(child(ref(db),'players/'+"Sports")).then((snapshot) => {
      if (snapshot.exists()) {

          leaderboard=snapshot.val().leaderboard;
         
          console.log(leaderboard);

          
    function compare(a,b) { return b.score - a.score }
    
    leaderboard.sort(compare);

    console.log(leaderboard); 
    document.getElementById("add-player").innerHTML="";
    for(var i=0;i<leaderboard.length;i++)
    {
      var div2=document.createElement('div');
      div2.setAttribute('id',"board"+i);
      var list=document.createElement("li");
      var span1= document.createElement("span");
      var span2= document.createElement("span");
      span2.classList.add("pscore");
      span1.classList.add("pname");
      span1.innerHTML = leaderboard[i].name;
      span2.innerHTML = ((leaderboard[i].score)/5)*100 + "%";
      list.appendChild(span1);
      list.appendChild(span2);
      div2.appendChild(list);
      document.getElementById("add-player").appendChild(div2);

      if(i==0)
      {
          document.getElementById('board0').classList.add("gold");
      }
      if(i==1)
      {
          document.getElementById('board1').classList.add("silver");
      }
      if(i==2)
      {
          document.getElementById('board2').classList.add("bronze");
      }
    }

  //   document.getElementById('add-player').childNodes[0].css("background-color", "gold");
  //   document.getElementById('add-player').childNodes[1].css("background-color", "#c0c0c0");
  //   document.getElementById('add-player').childNodes[2].css("background-color", "#cd7f32");

    
    

  }

      }).catch((error) => {
          console.error(error);
        });
})



}else {
    console.log("No data available");
     }

 }).catch((error) => {
   console.error(error);
 });

 