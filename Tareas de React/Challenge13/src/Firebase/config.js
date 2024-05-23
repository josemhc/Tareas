// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getauth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBwlt92VnpvoTuC3uCtugt4bechnzW1VU",
  authDomain: "test-fb8c1.firebaseapp.com",
  projectId: "test-fb8c1",
  storageBucket: "test-fb8c1.appspot.com",
  messagingSenderId: "676113050799",
  appId: "1:676113050799:web:36f3f7d8691f356856f85a",
  measurementId: "G-05L7N96SW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getauth()

export {app, auth};