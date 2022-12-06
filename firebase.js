// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQd2YzaAgIwPrCqDxFGCSKduVNMqlKEMI",
  authDomain: "typ-game-9d06c.firebaseapp.com",
  projectId: "typ-game-9d06c",
  storageBucket: "typ-game-9d06c.appspot.com",
  messagingSenderId: "1009486356994",
  appId: "1:1009486356994:web:d5f15b454da3e84a55fd1b",
  measurementId: "G-MJHTWDPBMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);