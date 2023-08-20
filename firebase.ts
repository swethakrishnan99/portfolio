import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC_BuPV_UvpNzASyr-IqawJPnX0h-E0cE",
  authDomain: "todo-project-5f9ed.firebaseapp.com",
  projectId: "todo-project-5f9ed",
  storageBucket: "todo-project-5f9ed.appspot.com",
  messagingSenderId: "490129223473",
  appId: "1:490129223473:web:b36936e5887e846fb20a10",
  measurementId: "G-GN5HNXVQR1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
