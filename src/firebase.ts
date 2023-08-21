import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBHqUqsZZh9FDCawPdyFZcgMH4DvtRwCts",
  authDomain: "fdaagg-25c56.firebaseapp.com",
  databaseURL: "https://fdaagg-25c56-default-rtdb.firebaseio.com",
  projectId: "fdaagg-25c56",
  storageBucket: "fdaagg-25c56.appspot.com",
  messagingSenderId: "439809849960",
  appId: "1:439809849960:web:711cf80005749c1847d9dd",
  measurementId: "G-752WHS7BDG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const sendMessage = (
  name: string,
  email: string,
  subject: string,
  message: String
) => {
  const db = getDatabase();
  const removeSpaces = (str: string) => str.replace(/\s/g, "");
  const id = removeSpaces(name ?? "");
  id &&
    id.length > 0 &&
    set(ref(db, "users/" + id), {
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
};
