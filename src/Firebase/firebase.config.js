// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuUqrDFOsSREyou-beb2QoPOqFqATph7s",
  authDomain: "taskifypro-d8e73.firebaseapp.com",
  projectId: "taskifypro-d8e73",
  storageBucket: "taskifypro-d8e73.appspot.com",
  messagingSenderId: "625831221625",
  appId: "1:625831221625:web:9aae74d803fd0cc65377a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;