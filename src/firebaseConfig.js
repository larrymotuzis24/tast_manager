import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB-lTAidcdvNizU58JereIv6njL8gATSeA",
    authDomain: "task-manager-22960.firebaseapp.com",
    projectId: "task-manager-22960",
    storageBucket: "task-manager-22960.appspot.com",
    messagingSenderId: "571116738821",
    appId: "1:571116738821:web:c6eba6e4dd6ea0d8af7f6c",
    measurementId: "G-32JM6MMSR7"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);


export default firebaseApp;



