// 🔁 IMPORTS: siempre van arriba
import { db } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 🔁 Esperar a que el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formReserva');
  const mensaje = document.getElementById('mensaje');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = form.nombre.value;
    const fecha = form.fecha.value;
    const hora = form.hora.value;

    try {
      await addDoc(collection(db, "reservas"), {
        nombre,
        fecha,
        hora,
        timestamp: serverTimestamp()
      });

      mensaje.textContent = "✅ Reserva guardada correctamente";
      form.reset();
    } catch (error) {
      console.error("❌ Error al guardar la reserva:", error);
      mensaje.textContent = "❌ Ocurrió un error. Intenta de nuevo.";
    }
  });
});

  