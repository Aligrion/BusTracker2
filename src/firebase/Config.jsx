// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEv2L89qjg_QtcPpDDgsvj1zzzoXID5LE",
  authDomain: "bustracker-786ed.firebaseapp.com",
  projectId: "bustracker-786ed",
  storageBucket: "bustracker-786ed.appspot.com",
  messagingSenderId: "1097713785339",
  appId: "1:1097713785339:web:4de0d0ecc57d4546f9d35e",
  measurementId: "G-X6VGBM3QWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app}