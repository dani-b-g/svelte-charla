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
  let preguntas = [];

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
  onSnapshot(
    collection(db, "preguntas"),
    (querySnapshot) => {
      preguntas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    },
    (error) => {
      console.log(error);
    }
  );
</script>

<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h1>Preguntas</h1>
  </div>
</div>
<div class="row">
  <div class="col offset-s1 s10 center-align offset-s1">
    <table class="responsive-table centered striped">
      <thead>
        <tr>
            <th>Pregunta</th>
            <th>Estado</th>
            <th>Botones</th>
        </tr>
      </thead>
      <tbody>
        {#each preguntas as p}
        <tr>
          <td>{p.Pregunta}</td>
          <td>{p.Estado}</td>
          <td>
            <button class="btn waves-effect waves-light green lighten-1">Submit
              <i class="material-icons right">check</i>
            </button>
          </td>
        </tr>
        {:else}
           <!-- empty list -->
        {/each}
      </tbody>
    </table>
  </div>

</div>
<style>
  /* your styles go here */
  /* para fondo de tabla */
  /* rgba(5,172,232,0.4514180672268907) */
</style>
