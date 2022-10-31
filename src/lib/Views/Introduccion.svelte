<script>
  import { link, push } from "svelte-spa-router";
</script>

<div class="row">
  <div class="col s7">
    <div class="center-align">
      <h1>Introducción</h1>
      <img
        class="center-align"
        src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/unnamed.png?alt=media&token=e22dddd8-1505-43da-9dc1-0e59e40437f4"
      />
    </div>
  </div>
  <div class="col s5">
    <div class="divider" />
    <div class="section">
      <h5>¿Quien soy?</h5>
      <p>
        Soy <span class="bold">
          Daniel Barriga Grados programador Front-End</span
        >. Actualmente trabajo en Vue.js pero soy una persona inquieta y llevo
        unos meses investigando
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
</style>
