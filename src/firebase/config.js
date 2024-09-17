// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV7cSX0fuu2VR52e4Yz_3GQFsOeXoLYbA",
  authDomain: "coderhouse-react-c6a77.firebaseapp.com",
  projectId: "coderhouse-react-c6a77",
  storageBucket: "coderhouse-react-c6a77.appspot.com",
  messagingSenderId: "277509912439",
  appId: "1:277509912439:web:04aa84a774454897d6d372",
  measurementId: "G-JT5649451V"
};

// Inicializamos el servicios de Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la base de datos
export const db = getFirestore(app);