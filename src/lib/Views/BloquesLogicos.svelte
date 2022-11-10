<script>
  import CodeBlock from "./../Components/CodeBlock.svelte";

  import { fade } from "svelte/transition";

  let awaitCodeFlag = false;
  let eachCodeFlag = false;
  let keyCodeFlag = false;

  let promise = getRandomNumber();

  async function getRandomNumber() {
    const res = await fetch(
      `http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1`
    );
    const text = await res.text();

    if (res.ok) {
      if (text != "[6]") {
        return text;
      } else {
        throw new Error(`El numero es 6 y genera un error`);
      }
    } else {
      throw new Error(text);
    }
  }

  function handleClick() {
    promise = getRandomNumber();
  }

  //#region String para CodeBlock
  const awaitCodeJs = new String(`
        let promise = getRandomNumber();

        async function getRandomNumber() {
          const res = await fetch(
            "http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1"
          );
          const text = await res.text();

          if (res.ok) {
            if (text != "[6]") {
              return text;
            } else {
              throw new Error("El numero es 6 y genera un error");
            }
          } else {
            throw new Error(text);
          }
        }

        function handleClick() {
          promise = getRandomNumber();
        }
`);
  const awaitCodeHtml = new String(`
        <div class="row border">
          <div transition:fade class="col s6 center-align">
            <button
              style="margin-top: 10px;"
              class="waves-effect waves-light btn"
              on:click={handleClick}
            >
              Generar un numero random
            </button>

            {#await promise}
              <p>...cargando</p>
            {:then number}
              <p>El numero es: {number}</p>
            {:catch error}
              <p style="color: red">{error.message}</p>
            {/await}
          </div>
        </div>
            `);
  const eachCode = new String(`
        {#each todos as todo}
          <p>{todo.text}</p>
        {:else}
          <p>No tasks today!</p>
        {/each}
    `);
  const keyCode = new String(`
        {#key value}
          <Component />
        {/key}

        {#key value}
          <div transition:fade>{value}</div>
        {/key}
    `);
  //#endregion

  function openAwaitCode() {
    eachCodeFlag = false;
    keyCodeFlag = false;
    awaitCodeFlag = !awaitCodeFlag;
  }
  function openKeyCode() {
    eachCodeFlag = false;
    awaitCodeFlag = false;
    keyCodeFlag = !keyCodeFlag;
  }
  function openEachCode() {
    awaitCodeFlag = false;
    keyCodeFlag = false;
    eachCodeFlag = !eachCodeFlag;
  }
</script>

<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h3>🐖 Bloques Lógicos 🐖</h3>
  </div>
</div>
<div class="row valign-wrapper ">
  <div class="col s12">
    <div class="divider" />
    <div class="section">
      <div class="row valign-wrapper">
        <div class="col s6 center">
          <span>
            <img
              class="responsive-img"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/cerdo.gif?alt=media&token=1ed324f5-50a7-490b-8557-960cc0df449f"
            />
          </span>
        </div>
        <div class="col s6 ">
          En Svelte tenemos los "típicos" bloques lógicos usados en cualquier
          lenguaje o frameworks como por ejemplo: <b>IF, FOR-EACH, FOR, etc.</b>
          <br />
          <br />
          En Svelte tenemos un par de ellos que nos vendrán muy bien a la hora de
          realizar ciertas prácticas dentro de nuestra aplicación y son los que veréis
          más abajo.
          <br />
          <br />
          Sin duda veo una desventaja en no tener un bloque <b>SWITCH-CASE</b>
          como en otros frameworks, pero creo que compensa por tener el
          <b>AWAIT</b>
          <blockquote>
            Clic {"<( ‵□′)>───>"}
            <a href="https://svelte.dev/docs#template-syntax-if" target="_blank"
              >aquí
            </a> para acceder a la documentación.
          </blockquote>
        </div>
      </div>
    </div>
    <div class="divider" />
    <div class="section ">
      <div class="row">
        <div class="col s4 center">
          <button on:click={openEachCode} class="waves-effect waves-light btn"
            >{"{#each ...}"}</button
          >
        </div>
        <div class="col s4 center">
          <button on:click={openAwaitCode} class="waves-effect waves-light btn"
            >{"{#await ...}"}</button
          >
        </div>
        <div class="col s4 center">
          <button on:click={openKeyCode} class="waves-effect waves-light btn"
            >{"{#key}"}</button
          >
        </div>
      </div>

      {#if eachCodeFlag}
        <div class="row valign-wrapper border">
          <div transition:fade class="col s12 ">
            <CodeBlock code={eachCode} codeType={"html"} />
          </div>
        </div>
      {/if}
      {#if awaitCodeFlag}
        <div class="row border">
          <div transition:fade class="col s6 center-align">
            <button
              style="margin-top: 10px;"
              class="waves-effect waves-light btn"
              on:click={handleClick}
            >
              Generar un numero random
            </button>

            {#await promise}
              <p>...cargando</p>
            {:then number}
              <p>El número es: {number}</p>
            {:catch error}
              <p style="color: red">{error.message}</p>
            {/await}
          </div>
          <div transition:fade class="col s6">
            <h5>HTML</h5>
            <CodeBlock code={awaitCodeHtml} codeType={"html"} />
            <h5>JS</h5>
            <CodeBlock code={awaitCodeJs} codeType={"js"} />
          </div>
        </div>
      {/if}
      {#if keyCodeFlag}
        <div class="row valign-wrapper border">
          <div transition:fade class="col s12">
            <CodeBlock code={keyCode} codeType={"html"} />
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
