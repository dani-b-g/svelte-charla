<script>
  import TodoComponent from "../Components/TodoComponent.svelte";
</script>

<h3 />
<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h4>✨ Animaciones ✨</h4>
  </div>
</div>
<div class="row valign-wrapper ">
  <div class="col s12">
    <div class="divider" />
    <div class="section">
      <div class="row valign-wrapper">
        <div class="col s6 ">
          <span class="flexTomid">
            <img
              class="responsive-img"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/animacionesCyberpunk.gif?alt=media&token=52b8be24-478f-406c-8810-59f859d725ba"
            />
          </span>
        </div>
        <div class="col s6">
          <h5>Tipos de animaciones</h5>
          <br />
          <p>
            El afán de Rich Harris y toda la comunidad que ha ido aportando
            funcionalidades al framework era reducir el código y con ello
            <b>tienen una librería de animaciones "nativas"</b>
            del propio framework bastante decente sin necesidad de escribir ni una
            sola línea de CSS y que a nuestros amigos de UX les pueden llamar un
            poco la atención.
          </p>
          <p>Se diferencian estos tipos de elementos en su librería:</p>
          <li>
            Motion: Se encarga de manejar el movimiento con sus Stores con sus
            funciones <i><b>tweened y spring</b></i>
          </li>
          <li>
            Transitions: Encargadas de hacer las transiciones de un punto a otro
            del elemento animado. Con sus funciones: <i
              ><b>fade, blur, fly, slide, scale, draw y crossfade</b></i
            >
          </li>
          <li>
            Animate: por ahora solo tiene la funcionalidad <b><i>flip</i></b> utilizada
            para calcular la posición inicial y final del elemento.
          </li>
          <li>
            Easing: funciones de aceleración a lo largo del tiempo, usadas junto
            con las transitions y animate.
          </li>
          <br />
          <blockquote>
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            🎈 Como siempre os dejo por
            <a
              href="https://svelte.dev/docs#run-time-svelte-motion"
              target="_blank">aquí</a
            > el enlace a la documentación 🎈
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="divider" />
<div class="section">
  <div class="row valign-wrapper">
    <div class="col s12 center-align">
      <h5>✨ Ejemplo ✨</h5>
    </div>
  </div>
  <div class="row valign-wrapper">
    <div class="col s12 center-align ">
      <TodoComponent />
    </div>
  </div>
  <div class="row valign-wrapper">
    <div class="col s12 center-align">
      <blockquote>
        <!-- svelte-ignore security-anchor-rel-noreferrer -->
        En este caso os voy a invitar a ver el codigo en mi
        <a href="https://github.com/dani-b-g/svelte-charla" target="_blank"
          >GitHub personal 🐵</a
        >
      </blockquote>
    </div>
  </div>
</div>

<!-- Ejemplo para poner enlace -->

<!-- https://svelte.dev/repl/003aeed602754d79a01a066452fb5bd2?version=3.20.1 -->
<style>
</style>
