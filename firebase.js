import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcsQIuUfP_wD5Jef-M_Tbgwqbwjl7yvLg",
  databaseURL:"https://quizzing-495f8-default-rtdb.firebaseio.com/",
  authDomain: "quizzing-495f8.firebaseapp.com",
  projectId: "quizzing-495f8",
  storageBucket: "quizzing-495f8.appspot.com",
  messagingSenderId: "442259494870",
  appId: "1:442259494870:web:ff67437fe0d8906ac93677",
  measurementId: "G-VKHBJRD5E4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;