// import firebase from "firebase/app";
// import 'firebase/firebase-auth';
// import 'firebase/firebase-firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPSAZabh4g_524xdUXSaMjzCcXpn2yCj0",
  authDomain: "my-crud-c5ac6.firebaseapp.com",
  projectId: "my-crud-c5ac6",
  storageBucket: "my-crud-c5ac6.appspot.com",
  messagingSenderId: "164253448548",
  appId: "1:164253448548:web:df535ffd6828107dc32271",
  measurementId: "G-6M2MP8Y1HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default  {

    googleLogIn: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result
    }}