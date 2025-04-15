// Importar Firebase desde CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0M-jbprRPbhKN8G-WtOzouyxsRWUh6e0",
    authDomain: "casa-acueducto-morelia-2025.firebaseapp.com",
    projectId: "casa-acueducto-morelia-2025",
    storageBucket: "casa-acueducto-morelia-2025.firebasestorage.app",
    messagingSenderId: "552624655725",
    appId: "1:552624655725:web:a3886f1465d192e8f7de64",
    measurementId: "G-85N5VDQYRL"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar DB para usar en otras páginas
export { db };
