<script>
  import Router from "svelte-spa-router";
  import { link, push } from "svelte-spa-router";
  import Introduccion from "../Views/Introduccion.svelte";
</script>

<div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper ">
      <a href="/" class="brand-logo right">Svelte </a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="/" use:link>Introducción</a></li>
        <li><a href="/quees" use:link>¿Qué es Svelte?</a></li>
        <li>
          <a href="/primerProyecto" use:link>Primer Proyecto y Lifecycle</a>
        </li>
        <li><a href="/BloquesLogicos" use:link>Bloques Lógicos</a></li>
        <li><a href="/stores" use:link>Stores</a></li>
        <li><a href="/sveltekit" use:link>SvelteKit</a></li>
        <li><a href="/reactivos" use:link>Reactivos</a></li>
        <li><a href="/animaciones" use:link>Animaciones</a></li>
        <li>
          <a href="/preguntas" class="" use:link
            ><i class=" small material-icons center-align">question_answers</i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>

<style>
  nav {
    background-color: #3f649f !important;
  }
  nav .brand-logo {
    font-size: 1.3rem;
  }
  @media (min-width: 600px) {
    nav .brand-logo {
      font-size: 2.1rem;
    }
  }
</style>
