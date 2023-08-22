import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAbVMeUBJrRsYknrK3QHfDxXTPGvX5rteE",
  authDomain: "task-manager-dbf62.firebaseapp.com",
  projectId: "task-manager-dbf62",
  storageBucket: "task-manager-dbf62.appspot.com",
  messagingSenderId: "1053944259931",
  appId: "1:1053944259931:web:046187d7591822e17ca67e",
  measurementId: "G-22S9LYJYTE"
};
  

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);


export default firebaseApp;



