<script>
  import { link, push } from "svelte-spa-router";
</script>

<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h1>Introducción</h1>
  </div>
</div>
<div class="row valign-wrapper ">
  <div class="col s5 ">
    <div class="center-align">
      <img
        class="center-align "
        alt="Not found"
        src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/unnamed.png?alt=media&token=e2cdc061-0c47-4f91-ba5b-b8e7dff25ebf"
      />
    </div>
  </div>
  <div class="col s7">
    <div class="divider" />
    <div class="section">
      <h5>¿Quien soy?</h5>
      <p>
        Soy <span class="bold"> Daniel Barriga programador Front-End</span>.
        Actualmente trabajo en Vue.js pero soy una persona inquieta y llevo unos
        meses investigando
        <span class="bold">"Svelte"</span> que es de lo que vengo hablaros en este
        rato.
      </p>
    </div>
    <div class="divider" />
    <div class="section">
      <h5>Temas de los que hablare</h5>
      <li>
        <span class="bold"> Ventajas notables </span> de Svelte en rasgos generales.
      </li>
      <li>Creacion de <span class="bold">tu primer proyecto.</span></li>
      <li>
        Bloques logicos importantes a diferencia de otros "frameworks" (await y
        foreach con else)
      </li>
      <li>
        <span class="bold">Los stores</span> "nativos" de svelte, sin necesidad de
        otras librerias.
      </li>
      <li><span class="bold">SvelteKit</span> ¿Que es y para que usarlo?</li>
      <p>
        Todas estos puntos, a partir de ahora, intentare enfocarlos para todos
        los tipos de perfiles de la practica, tanto programadores como para
        perfiles "UX".
      </p>
    </div>
    <div class="divider" />
    <div class="section">
      <h5>Preguntas</h5>
      <p>
        Como veis esto es una web y esta desplegada para su uso en esta charla,
        si quereis relizar alguna pregunta podeis entrar en el apartado de
        preguntas o haciendo click
      </p>
      <a href="/preguntas" use:link
        ><button class="btn btn orange">Aqui</button></a
      >
    </div>
  </div>
</div>

<style>
  .bold {
    font-weight: bold;
  }
  .center {
    margin: auto;
    width: 50%;
    padding: 10px;
  }
</style>
