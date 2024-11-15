// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQCP4FbKPwGbFr7nks8wFyJ2imiyTu_DY",
  authDomain: "aid-oz-etudiants.firebaseapp.com",
  projectId: "aid-oz-etudiants",
  storageBucket: "aid-oz-etudiants.firebasestorage.app",
  messagingSenderId: "874606010271",
  appId: "1:874606010271:web:a84392fcc20bdd5714e7aa",
  measurementId: "G-QHQWVSSBEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = firebase.messaging();


// Demander la permission de l'utilisateur pour envoyer des notifs
messaging.requestPermission().then(function() {
    console.log("Permission obtenue pour recevoir des notifications.");
    return messaging.getToken();
  }).then(function(token) {
    console.log("Token Firebase: ", token); // Enregistre ce token pour l'utiliser lors de l'envoi de notifications
  }).catch(function(error) {
    console.log("Erreur de permission : ", error);
  });
  