import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-z_ep4oCPWYVENRXkY_YIs6WWJzabJwg",
  authDomain: "model-lab-14-12-24.firebaseapp.com",
  projectId: "model-lab-14-12-24",
  storageBucket: "model-lab-14-12-24.appspot.com",
  messagingSenderId: "1078533691320",
  appId: "1:1078533691320:web:3fa917b648d1bd9c68e14d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);