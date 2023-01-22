import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp( {
    apiKey: "AIzaSyD6xxim7TjPI2CCxZO-VkwxbVN2EBLzkco",
    authDomain: "snipit-demo.firebaseapp.com",
    projectId: "snipit-demo",
    storageBucket: "snipit-demo.appspot.com",
    messagingSenderId: "1085980797600",
    appId: "1:1085980797600:web:a2728842639beff3af77c5"
  });
  
  const auth = getAuth(app);
  const db = getFirestore(app);
  export {db};
  export {auth};