<script>
  // @ts-nocheck

  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from "svelte";
  import {fade} from 'svelte/transition'
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
  let disabledAddBtn = true;
  let formEstado = true;
  let formPregunta = "";
  let formUser = "";
  let preguntas = [];

  $: {
    if (formPregunta.length >= 5 && formPregunta.length <= 165) {
      disabledAddBtn = false;
    } else {
      disabledAddBtn = true;
    }
  }

  function onKeyPress(k) {
    if (k.charCode===13 && !disabledAddBtn) {
      addQuestion()
    }
  }

  /**
   * Recupera constantemente todos los cambios generados en la BBDD
   */
  onSnapshot(
    collection(db, "preguntas"),
    (querySnapshot) => {
      preguntas = querySnapshot.docs.map(function (doc) {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
    },
    (error) => {
      console.log(error);
    }
  );
  /**
   * Añade la pregunta a la colección.
   */
  async function addQuestion() {
    try {
      await addDoc(collection(db, "preguntas"), {
        Estado: formEstado,
        Pregunta: formPregunta,
        Usuario: formUser,
      });
      console.log("Guardado correctamente");
      formPregunta = "";
      sw.fire({
        title: "Pregunta creada",
        text: "La pregunta ha sido creada correctamente.",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.log(error);
      sw.fire("Error al crear la pregunta", error.toString(), "error");
    }
  }
  /**
   *
   * @param id Id que se recibe de la coleccion para identificar el eliinado
   */
  async function deleteQuestion(id) {
    try {
      await sw
        .fire({
          title: "Vas a elimar la tarea",
          text: "¿Estás seguro?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Eliminar",
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await deleteDoc(doc(db, "preguntas", id)).then(() => {
              console.log("Pregunta eliminada");
              sw.fire({
                title: "Pregunta eliminada",
                text: "La pregunta ha sido eliminada correctamente.",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
              });
            });
          }
        });
    } catch (error) {
      sw.fire("Error al eliminar la pregunta", error.toString(), "error");
    }
  }
  async function setDone(id, inPregunta) {
    try {
      await sw
        .fire({
          title: "Estas a punto de marcar como resuelta la pregunta",
          text: "¿Estás seguro?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Resuelta",
        })
        .then(async function (result) {
          if (result.isConfirmed) {
            await updateDoc(doc(db, "preguntas", id), {
              Pregunta: inPregunta,
              Estado: false,
            });
            sw.fire({
              title: "Pregunta completa",
              text: "La pregunta ha sido completada correctamente.",
              icon: "success",
              timer: 2000,
              timerProgressBar: true,
            });
          }
        });
    } catch (error) {
      sw.fire("Error al actualizar la pregunta", error.toString(), "error");
    }
  }
</script>

<div  class="row valign-wrapper">
  <div class="col s12 center-align">
    <h1>Preguntas</h1>
  </div>
</div>
<div class="row ">
  <div class="col offset-s s3 ">
    <div class="input-field">
      <i class="material-icons prefix">person</i>
      <input
        id="usuario"
        bind:value={formUser}
        on:keypress={onKeyPress}
        type="text"
        data-length="25"
        data-min-length="5"
        length="25"
        class="validate"
      />
      <label for="usuario">Cual es tu nombre</label>
      <span class="helper-text right-align" style="color:#fff"
        >{`${formUser.length}/25`}</span
      >
    </div>
  </div>
  <div class="col offset-s s6 ">
    <div class="input-field">
      <i class="material-icons prefix">chat</i>
      <input
        id="pregunta"
        bind:value={formPregunta}
        on:keypress={onKeyPress}
        type="text"
        data-length="165"
        data-min-length="5"
        length="165"
        class="validate"
      />
      <label for="pregunta">Inserte aqui su pregunta</label>
      <span class="helper-text right-align" style="color:#fff"
        >{`${formPregunta.length}/165`}</span
      >
    </div>
  </div>
  <div class="col col offset-s1 s2 center">
    <div class="input-field">
      <button
        disabled={disabledAddBtn}
        on:click={addQuestion}
        class="waves-effect waves-light btn btn-custom-color"
      >
        <i class="material-icons right">add</i>Añadir
      </button>
    </div>
  </div>
</div>
<div class="divider" />
<div class="row">
  {#if preguntas.length > 0}
    <div class="col s10 offset-s1 center-align offset-s1">
      <table class="responsive-table centered striped">
        <thead>
          <tr>
            <th>Pregunta</th>
            <th>Usuario</th>
            <th>Estado</th>
            <th>Botones</th>
          </tr>
        </thead>
        <tbody>
          {#each preguntas as p}
            <tr transition:fade>
              <td>{p.Pregunta}</td>
              <td>{p.Usuario}</td>
              {#if p.Estado}
                <td>Activa</td>
              {:else}
                <td>Resuelta</td>
              {/if}
              <td>
                {#if p.Estado}
                  <button
                    on:click={setDone(p.id, p.Pregunta)}
                    class="btn-small waves-effect waves-light green lighten-1"
                  >
                    <i class="material-icons center">check</i>
                  </button>
                {/if}
                <button
                  on:click={deleteQuestion(p.id)}
                  class="btn-small waves-effect waves-light red lighten-1"
                >
                  <i class="material-icons center">delete_forever</i>
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {:else}
    <div transition:fade class="col s12 center-align ">
      <h2>No se han realizado preguntas aun.</h2>
    </div>
  {/if}
</div>

<style>
  /* label focus color */
  .input-field input[type="text"]:focus + label {
    color: rgb(255, 255, 255) !important;
  }
  /* label underline focus color */
  .input-field input[type="text"]:focus {
    border-bottom: 1px solid rgb(255, 255, 255) !important;
    box-shadow: 0 1px 0 0 rgb(255, 255, 255) !important;
  }
  /* En caso de default eliminar el bgcolor */
  .input-field [type="text"] {
    color: white;
    background-color: rgba(34, 33, 33, 0.219) !important;
  }
  /* invalid color */
  .input-field input[type="text"].invalid {
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 0 #000;
  }
  i {
    color: rgb(255, 255, 255) !important;
  }
  label {
    color: rgb(255, 255, 255) !important;
  }

  .center {
    margin: auto;
  }
  .btn-custom-color {
    background-color: #3085d6;
  }
</style>