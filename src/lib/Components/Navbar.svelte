<script>
  import Router from "svelte-spa-router";
  import { link, push } from "svelte-spa-router";
  import Introduccion from "../Views/Introduccion.svelte";
</script>

<nav>
  <div class="nav-wrapper ">
    <a href="/" class="brand-logo right">Svelte </a>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li><a href="/" use:link>Introducción</a></li>
      <li><a href="/quees" use:link>¿Que es Svelte?</a></li>
      <li><a href="/primerProyecto" use:link>Primer Proyecto</a></li>
      <li><a href="/BloquesLogicos" use:link>Bloques Lógicos</a></li>
      <li><a href="/stores" use:link>Stores</a></li>
      <li><a href="/sveltekit" use:link>SvelteKit</a></li>
      <li><a href="/reactivos" use:link>Declaraciones reactivas($)</a></li>
      <li>
        <a href="/preguntas" use:link
          ><i class=" small material-icons">question_answers</i>
        </a>
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    background-color: #3f649f !important;
    position: fixed !important;
  }
</style>
