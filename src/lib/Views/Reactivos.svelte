<script>
  import CodeBlock from "../Components/CodeBlock.svelte";

  import { fade } from "svelte/transition";

  let count = 1;
  // the `$:` means 're-run whenever these values change'
  $: doubled = count * 2;
  $: quadrupled = doubled * 2;

  function handleClick() {
    count += 1;
  }
  let count2 = 0;

  $: if (count2 >= 10) {
    alert(`count2 es demasiado alto`);
    count2 = 9;
  }

  function handleClick2() {
    count2 += 1;
  }

  const exampleCodeJS = new String(`
        let count = 1;

        $: doubled = count * 2;
        $: quadrupled = doubled * 2;

        function handleClick() {
        count += 1;
        }

  `);
  const exampleCodeHtml = new String(`
        <button on:click={handleClick}>
            Count: {count}
        </button>
        <p>{count} * 2 = {doubled}</p>
        <p>{doubled} * 2 = {quadrupled}</p>

  `);

  let flagEjemploVariables = false;
  let flagEjemploFuncion = false;

  function showEjemploVariables() {
    flagEjemploVariables = !flagEjemploVariables;
    flagEjemploFuncion = false;
  }
  function showEjemploFunciones() {
    flagEjemploFuncion = !flagEjemploFuncion;
    flagEjemploVariables = false;
  }

  const exampleCodeFNHtml = new String(`
        <div class="col s6 center-align ">
            <button class="waves-effect waves-light btn" on:click={handleClick2}>
                Clicked {count2} {count2 === 1 ? 'time' : 'times'}
            </button>
        </div>

  
  `);
  const exampleCodeFnJS = new String(`
        let count2 = 0;

        $: if (count2 >= 10) {
            alert("count2 es demasiado alto");
            count2 = 9;
        }

        function handleClick2() {
            count2 += 1;
        }
  
  `);
</script>

<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h3>💲 Modificador reactivo $ 💲</h3>
  </div>
</div>
<div class="row valign-wrapper ">
  <div class="col s12">
    <div class="divider" />
    <div class="section">
      <div class="row valign-wrapper">
        <div class="col s6 ">
          <h5>Modificador $: En svelte y como funciona (?)</h5>
          <br />
          Me entristece deciros que no es dinero ilimitado, sino
          <b>una forma de decirle a nuestros componentes y vistas</b>
          que deben "escuchar" todas las modificaciones que tenga la variable o variables
          de una función, pero mejor en un ejemplo más abajo.
          <br />
          <br />
          En conclusión, esto nos puede ayudar a no tener que repetir código y que
          el recálculo de ciertas variables se haga de forma automática.
          <br /><br />
          Desventaja y palabra de novato me costó y MUCHO entender e interiorizar
          como funcionaba, pero para eso estoy aquí. 😎👍🏻
          <br />
          <br />
          <blockquote>
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            Como en el resto de apartados podéis haced clic
            <a
              href="https://svelte.dev/docs#component-format-script-3-$-marks-a-statement-as-reactive"
              target="_blank"
            >
              👉🏻 aquí
            </a> para acceder a la documentación 100% oficial.
          </blockquote>
        </div>
        <div class="col s6">
          <span class="flexTomid">
            <img
              class="responsive-img"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/reactivoCyberpunk.gif?alt=media&token=8a82e6cb-79ef-4d30-9c6c-95160241e969"
            />
          </span>
        </div>
      </div>
    </div>
    <div class="divider" />
    <div class="section">
      <div class="row valign-wrapper">
        <div class="col s12 center-align"><h5>Ejemplo y código</h5></div>
      </div>
      <div class="row valign-wrapper">
        <div class="col s6 center-align">
          <button
            on:click={showEjemploVariables}
            class="btn waves-effect waves-light">Ejemplo Simple</button
          >
        </div>
        <div class="col s6 center-align">
          <button
            on:click={showEjemploFunciones}
            class="btn waves-effect waves-light">Ejemplo Condicionales</button
          >
        </div>
      </div>
      {#if flagEjemploVariables}
        <div transition:fade class="row border valign-wrapper">
          <div class="col s6 center-align ">
            <button class="waves-effect waves-light btn" on:click={handleClick}>
              Count: {count}
            </button>
            <h5>{count} * 2 = {doubled}</h5>
            <h5>{doubled} * 2 = {quadrupled}</h5>
          </div>
          <div class="col s6">
            <h6>JS</h6>
            <CodeBlock code={exampleCodeJS} codeType={"javascript"} />
            <h6>HTML</h6>
            <CodeBlock code={exampleCodeHtml} codeType={"html"} />
          </div>
        </div>
      {/if}
      {#if flagEjemploFuncion}
        <div transition:fade class="row border valign-wrapper">
          <div class="col s6 center-align ">
            <button
              class="waves-effect waves-light btn"
              on:click={handleClick2}
            >
              Clicked {count2}
              {count2 === 1 ? "time" : "times"}
            </button>
          </div>
          <div class="col s6">
            <h6>JS</h6>
            <CodeBlock code={exampleCodeFnJS} codeType={"javascript"} />
            <h6>HTML</h6>
            <CodeBlock code={exampleCodeFNHtml} codeType={"html"} />
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .border {
    border: 2px solid #42a5f5;
  }
</style>
