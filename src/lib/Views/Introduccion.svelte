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
      <h5>¿Quién soy?</h5>
      <p>
        Soy <b>Daniel Barriga programador Front-End</b>. Actualmente, trabajo en
        Vue.js llevo un tiempo investigando
        <b>"Svelte"</b> que es de lo que vengo hablaros en este rato.
      </p>
    </div>
    <div class="divider" />
    <div class="section">
      <h5>Temas de los que hablaré</h5>
      <li>
        <b>Ventajas notables</b> de Svelte en rasgos generales.
      </li>
      <li>
        Creación de <b
          >tu primer proyecto y el ciclo de vida de los componentes.</b
        >
      </li>
      <li>
        Bloques lógicos importantes a diferencia de otros "frameworks" <b
          >(await)</b
        >
      </li>
      <li>
        <b>Los stores</b> "nativos" de svelte, sin necesidad de otras librerías.
      </li>
      <li><b>SvelteKit</b> Qué es y para que usarlo?</li>
      <li><b>Modificador $</b> ¿Dollars?</li>
      <li><b>Animaciones</b> Para nuestros UX ♥</li>
      <p>
        Todos estos puntos, a partir de ahora, intentaré enfocarlos para todos
        los tipos de perfiles de la práctica, tanto programadores como para
        perfiles "UX" con una serie de ejemplos funcionales, ya que esta web
        está al completo creada con Svelte.
      </p>
    </div>
    <div class="divider" />
    <div class="section">
      <h5>Preguntas</h5>
      <p>
        He creado un apartado de preguntas para poder añadirlas durante lo largo
        de la presentación y resolverlas al final, si os surge alguna podéis
        entrar en el apartado de preguntas o haciendo click
      </p>
      <a href="/preguntas" use:link
        ><button class="btn btn orange">aquí</button></a
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
