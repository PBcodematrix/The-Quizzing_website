  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"
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
  const database = getDatabase(app);

  onAuthStateChanged(auth, (user) => {
      if (user) {

          document.getElementById("sign-in").style.display = "none";
          document.getElementById("log-out").style.display = "block";
      }

  });

  document.getElementById("log-out").addEventListener('click', (e) => {
      signOut(auth).then(() => {
          // Sign-out successful.
          document.getElementById("sign-in").style.display = "block";
          document.getElementById("log-out").style.display = "none";

      }).catch((error) => {
          // An error happened.
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
      });

  });
