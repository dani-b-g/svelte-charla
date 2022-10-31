<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from "svelte";
  import { db } from "../../firebase.js";
  import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    QuerySnapshot,
    updateDoc,
    snapshotEqual,
  } from "firebase/firestore";
  import sw from "sweetalert2";

  let formEstado = undefined;
  let formPregunta = undefined;

  onMount(() => {});

  async function addQuestion() {
    try {
      await addDoc(collection(db, "Preguntas"), {
        Estado: formEstado,
        Pregunta: formPregunta,
      });
      console.log("Guardado correctamente");
      formEstado = "";
      formPregunta = "";
      sw.fire(
        "Pregunta creada",
        "La pregunta ha sido creada correctamente y se mostrara en la tabla.",
        "success"
      );
    } catch (error) {
      console.log(error);
      sw.fire("Error al crear la pregunta", error, "error");
    }
  }
</script>

<h1>Preguntas</h1>

<style>
  /* your styles go here */
</style>
