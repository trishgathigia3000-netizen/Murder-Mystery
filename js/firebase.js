// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "blood-and-shadow.firebaseapp.com",
  projectId: "blood-and-shadow",
  storageBucket: "blood-and-shadow.firebasestorage.app",
  messagingSenderId: "130359157525",
  appId: "1:130359157525:web:b8252b62cb197b2d9fff1c",
  measurementId: "G-DB7Y9D5NRE"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);