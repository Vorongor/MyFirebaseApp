import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACRyoATzyd27V1pDU0YOF8yWAgb97C4NE",
  authDomain: "reactblog-192b1.firebaseapp.com",
  projectId: "reactblog-192b1",
  storageBucket: "reactblog-192b1.appspot.com",
  messagingSenderId: "370361125632",
  appId: "1:370361125632:android:0350eb37850de1a02241e5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
