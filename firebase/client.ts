// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAITnBRphoqUnp37RWA_4oMpNmSI2TVdbE",
  authDomain: "fire-homes-course-28b28.firebaseapp.com",
  projectId: "fire-homes-course-28b28",
  storageBucket: "fire-homes-course-28b28.firebasestorage.app",
  messagingSenderId: "461754158831",
  appId: "1:461754158831:web:60fd45528f1f47f738951a",
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };
