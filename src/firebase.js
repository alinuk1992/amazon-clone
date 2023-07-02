import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM3CGw-f6ODJM509Wh_uz-nBhFqiwMFYk",
  authDomain: "clone-4fdac.firebaseapp.com",
  projectId: "clone-4fdac",
  storageBucket: "clone-4fdac.appspot.com",
  messagingSenderId: "1049403530163",
  appId: "1:1049403530163:web:63a3b872b711aecccd09c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };

// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyDM3CGw-f6ODJM509Wh_uz-nBhFqiwMFYk",
//   authDomain: "clone-4fdac.firebaseapp.com",
//   projectId: "clone-4fdac",
//   storageBucket: "clone-4fdac.appspot.com",
//   messagingSenderId: "1049403530163",
//   appId: "1:1049403530163:web:63a3b872b711aecccd09c6",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
