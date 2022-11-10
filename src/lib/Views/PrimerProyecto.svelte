<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount, tick } from "svelte";
  import CodeBlock from "../Components/CodeBlock.svelte";

  const codeForSPA = new String(`
        npm create vite@latest myapp -- --template svelte
        cd myapp
        npm install
        npm run dev
  `);
  const codeForSSR = new String(`
        npm create svelte@latest my-app
        cd my-app
        npm install
        npm run dev -- --open
  `);
  const codeForCicle = new String(`
        import { afterUpdate, beforeUpdate, onDestroy, onMount, tick } from "svelte";

          // Creacion
          // Scripts
          console.log("Se ejecuta primero scripts");
          // OnMount
          onMount(async () => {
            console.log("onMount");
            await tick();
            console.log("onMount tick");
          });
          // onDestroy
          onDestroy(() => {
            console.log("onDestroy");
          });

          // Actualizacion del dom
          // beforeUpdate
          beforeUpdate(() => {
            console.log(" beforeUpdate se ejecuta antes de actualizar el dom");
          });
          // afterUpdate
          afterUpdate(() => {
            console.log("afterUpdate se ejecutara despues de actualizar el dom");
          });
          // tick se utiliza dentro de otro evento de ciclo de vida, y se ejecuta justo al final al que añadas.
  `);

  // Creacion
  // Scripts
  console.log("Se ejecuta primero scripts");
  // OnMount
  onMount(async () => {
    console.log("onMount");
    await tick();
    console.log("onMount tick");
  });
  // onDestroy
  onDestroy(() => {
    console.log("onDestroy");
  });

  // Actualizacion del dom
  // beforeUpdate
  beforeUpdate(() => {
    console.log(" beforeUpdate se ejecuta antes de actualizar el dom");
  });
  // afterUpdate
  afterUpdate(() => {
    console.log("afterUpdate se ejecutara despues de actualizar el dom");
  });
  // tick se utiliza dentro de otro evento de ciclo de vida, y se ejecuta justo al final al que añadas.
</script>

<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h4>🐧 Tu primer proyecto con Svelte y su ciclo de vida 🐧</h4>
  </div>
</div>
<div class="divider" />
<div class="section">
  <div class="row valign-wrapper">
    <div class="col s6 ">
      <h6>¿Como crear tu primer proyecto?</h6>
      <p>
        En Svelte tenemos dos formas de crear un proyecto para desarrollo, según
        la documentación oficial, elegir cuál depende de las funcionalidades y
        fines de la web.
      </p>
      <p>
        En el caso de que queramos desarrollar una SPA (Single Page Application)
        usaremos VITE la siguiente forma:
      </p>
      <CodeBlock code={codeForSPA} codeType={"bash"} />
      <div class="divider" />
      <p>
        En el caso de buscar crear una SSR (Server Site Rendering) usaremos
        SvelteKit de la siguiente forma:
      </p>
      <CodeBlock code={codeForSSR} codeType={"bash"} />

      <blockquote>De SvelteKit hablaremos más adelante.</blockquote>
    </div>
    <div class="col s6 center-align">
      <span>
        <img
          class="responsive-img"
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/penguEmpezar.gif?alt=media&token=d3420d55-3d9f-4fb1-b4e6-bf23270107dd"
        />
      </span>
    </div>
    <div class="divider" />
  </div>
</div>
<div class="divider" />
<div class="section">
  <div class="row valign-wrapper">
    <div class="col s12 "><h5>Ciclo de vida</h5></div>
  </div>
  <div class="row valign-wrapper">
    <div class="col s6">
      <img
        class="responsive-img"
        alt=""
        src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/ciclos%20de%20vida%2FlifecylceSvelte.png?alt=media&token=93f1f78c-d566-4c9e-a279-d8827782d5bf"
      />
    </div>
    <div class="col s6">
      <p>
        Como se muestra en la imagen es el orden de lanzamiento de las funciones
        del ciclo de vida de Svelte, faltaría uno que explico en el ejemplo de
        código de más abajo.
      </p>
      <p>Este ciclo se compone de las siguientes fases:</p>
      <ol>
        <li>
          <b>onMount</b>: Se ejecuta tan pronto como el componente se halla
          montado en el DOM
        </li>
        <li>
          <b>beforeUpdate</b>: Se ejecuta <u>justo antes</u> de que el componente
          se actualice, antes de cualquier cambio de estado.
        </li>
        <li>
          <b>afterUpdate</b>: Se ejecuta <u>justo después</u> de que el componente
          se actualice.
        </li>
        <li>
          <b>onDestroy</b>: Se ejecuta justo en el momento que el componente
          <u>se desmonta del DOM</u>.
        </li>
        <li>
          <b> tick </b>: Devuelve la promesa que envía el método donde se le
          introduce.
        </li>
      </ol>
      <blockquote>Todas estas funciones devuelven una promesa.</blockquote>
    </div>
  </div>
  <div class="row valign-wrapper">
    <div class="col s12">
      <h5>Codigo de LifeCycle de la vista actual</h5>
      <CodeBlock code={codeForCicle} codeType={"js"} />
      <blockquote>
        Si observáis la consola de desarrollador del navegador podéis comprobar
        el orden de los lanzamientos.
      </blockquote>
    </div>
  </div>
</div>

<style>
  /* your styles go here */
</style>
