// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBL36b5Zdn2aYqcV6yQjxkPRZti9VQz-mE",
  authDomain: "stock-roots.firebaseapp.com",
  projectId: "stock-roots",
  storageBucket: "stock-roots.appspot.com",
  messagingSenderId: "656759073970",
  appId: "1:656759073970:web:40db3b00dd137a49542dab",
  measurementId: "G-PFP531JXKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);