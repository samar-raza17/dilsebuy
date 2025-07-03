  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword ,signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getFirestore,collection, addDoc,getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA9bSHMc0CNDnPc8TrbIJCMr-QeMncR2TE",
    authDomain: "react-e-commerce-85ba3.firebaseapp.com",
    projectId: "react-e-commerce-85ba3",
    storageBucket: "react-e-commerce-85ba3.appspot.com",
    messagingSenderId: "597635999286",
    appId: "1:597635999286:web:c0acfb6802e92115c51a97",
    measurementId: "G-75C9J947K7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const auth = getAuth(app);
  export{
    getFirestore,
    collection,
    addDoc,
    db,
    getDocs,
    deleteDoc,
    doc,
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
  }