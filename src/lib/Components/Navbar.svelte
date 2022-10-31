<script>
  import Router from "svelte-spa-router";
  import { link, push } from "svelte-spa-router";
  import Introduccion from "../Views/Introduccion.svelte";
</script>

<nav>
  <div class="nav-wrapper">
    <a href="/" class="brand-logo right">Svelte </a>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li><a href="/" use:link>Introduccion</a></li>
      <li><a href="/quees" use:link>¿Que es Svelte?</a></li>
      <li><a href="/" use:link>JavaScript</a></li>
    </ul>
  </div>
</nav>

<style>
</style>
