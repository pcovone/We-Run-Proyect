// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSze91aDn2kL-Woru-D7_W6vw-ONBNRRY",
  authDomain: "project-89862.firebaseapp.com",
  projectId: "project-89862",
  storageBucket: "project-89862.appspot.com",
  messagingSenderId: "491708126417",
  appId: "1:491708126417:web:b5964fd477540e9c3561f0",
  measurementId: "G-6NQFZFGF1K",
};

// Inicializa la aplicación de Firebase una sola vez
const app = initializeApp(firebaseConfig);

// Obtiene una referencia a la base de datos de Firestore una sola vez
const db = getFirestore(app);

// Exporta la referencia a la base de datos para usarla en otros archivos
export default db;
