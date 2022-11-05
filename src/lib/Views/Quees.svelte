<script>
  import CodeBlock from "./../Components/CodeBlock.svelte";
  // your script goes here

  let code = `console.log('Hola mundo');`;
</script>

<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h3>¿Que es Svelte?</h3>
  </div>
</div>
<div class="row valign-wrapper ">
  <!-- <div class="col s6 ">
    <div class="center-align">
      <img
        class="center-align "
        alt="Not found"
        src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/unnamed.png?alt=media&token=e22dddd8-1505-43da-9dc1-0e59e40437f4"
      />
    </div>
  </div> -->
  <div class="col s12">
    <div class="divider" />
    <div class="section">
      <div class="row">
        <div class="col s6 center">
          <span>
            <img
              class="responsive-img"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/richHarris.jpeg?alt=media&token=e3d68696-39c8-4579-8941-3eb9ca3b00dd"
            />
          </span>
        </div>
        <div class="col s6 ">
          <p>
            Es un framework creado por: <b><i>Rich Harris</i></b> buscaba una forma
            de mejorar el desempeño de las aplicaciones que desarrollaba, él trabaja
            cumpliendo ciertas características:
          </p>
          <p style="padding-top: 5px;">
            <li>
              Entregar productos con un <b
                >excelente rendimiento y fácil desarrollo.</b
              >
            </li>
            <li>
              Que la librería o framework tuviera una <b
                >curva de aprendizaje muy corta</b
              >
              para que otras personas puedan integrarlo en sus proyectos sin mucha
              complicación.
            </li>
            <li>
              Hacer más <b>liviano el trabajo del navegador del lado cliente</b>
              y
              <b
                >reducir lo maximo posible la carga de código de librerías o
                frameworks</b
              > por código JavaScript puro.
            </li>
          </p>
          <div style="padding-top: 25px;">
            <blockquote>
              En pocas palabras: se hartó y creó su propio framework a su gusto.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <div class="divider" />
    <div class="section">
      <div class="row">
        <div class="col s12 left-align">
          <h5>Sus caracteristicas 😎👍🏻</h5>
        </div>
      </div>
      <div class="row">
        <div class="col s6 ">
          <p>
            Es un framework reactivo y basado en componentes que utiliza un paso
            de compilación al momento de realizar cambios en el DOM (Document
            Object Model).
          </p>
          <hr />
          <p style="padding-top: 5px;">
            <li>
              <b
                >No utiliza virtual DOM para realizar cambios en la aplicación
                como React o Vue:</b
              >
            </li>
            <li><b>Tiene su propio manejador de estado (Stores).</b></li>
            <li><b>Su sintaxis es sencilla.</b></li>
            <li><b>Totalmente reactivo.</b></li>
            <li><b>Compilaciones en produccion muy ligeras.</b></li>
            <li>
              <b>Tiene una documentación MUY BUENA.</b>
            </li>
            <li>
              <b
                >Server side rendering (SSR) con SvelteKit (propió de Svelte).</b
              >
            </li>
          </p>

          <div style="padding-top: 25px;">
            <blockquote>
              Os dejo el enlace a la documentación <a
                href="https://svelte.dev/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                👉🏻👉🏻 aquí 👈🏻👈🏻</a
              >
            </blockquote>
          </div>
        </div>
        <div class="col s6 center">
          <span>
            <img
              class="responsive-img"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/ciclos%20de%20vida%2Freact-vs-svelte5.png?alt=media&token=f5fcda80-536e-4b09-aa06-7cdaf920ed6d"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .bold {
    font-weight: bold;
  }
  .center {
    margin: auto;
    padding: 10px;
  }
  p > li {
    padding-top: 5px;
  }
</style>
