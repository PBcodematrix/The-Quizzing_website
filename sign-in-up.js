 import app from "./firebase.js"
 import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
const auth = getAuth(app);
const database = getDatabase(app);
  
  
  //                           WRITE DATA IN REALTIME DATABASE
      document.getElementById("submitForm").addEventListener('click',(e)=>{
                  var email = document.getElementById('email').value;
              var username = document.getElementById('username').value;
  
             
      const user = userCredential.user;
      set(ref(database,'users/'+user.uid),{
          username:username,
          email:email
          } )
      });
      
  
  
  //                                 SIGN-UP
  document.getElementById("submitForm").addEventListener("click",function(){
      const email = document.getElementById("email").value 
      const password = document.getElementById("myInput").value
     
              var username = document.getElementById('username').value;
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
       
        // ...
      
  
             
      const user = userCredential.user;
      set(ref(database,'users/'+user.uid),{
          username:username,
          email:email
          } )
  
        console.log("created")
  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode + errorMessage);
      });
  
  })