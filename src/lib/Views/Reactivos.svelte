<script>
  import CodeBlock from "../Components/CodeBlock.svelte";

  let count = 1;

  // the `$:` means 're-run whenever these values change'
  $: doubled = count * 2;
  $: quadrupled = doubled * 2;

  function handleClick() {
    count += 1;
  }

  const exampleCodeJS = new String(`
        import CodeBlock from "../Components/CodeBlock.svelte";

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
          Me entristece deciros que no es dinero ilimitado, si no
          <b>una forma de decirle a nuestros componentes y vistas</b>
          de Svelte que deben "escuchar" todas las modificaciones que tenga la variable
          o variables de una función pero mejor en un ejemplo.
          <br />
          <br />
          En conclusion, esto nos puede ayudar a no tener que repetir codigo y que
          el recalculo de ciertas variables se haga de forma automatica.
          <br /><br />
          Desventaja y palabra de novato me costo y MUCHO entender como funcionaba,
          pero para eso os traigo un ejemplo. 😎👍🏻
          <br />
          <br />
          <blockquote>
            Como en el resto de apartados podeis haced click <a
              href="https://svelte.dev/docs#component-format-script-3-$-marks-a-statement-as-reactive"
              target="_blank"
            >
              👉🏻 aqui</a
            > para acceder a la documentación 100% oficial.
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
      <div class="row">
        <div class="col s12 center-align"><h5>Ejemplo y codigo</h5></div>
      </div>

      <div class="row border valign-wrapper">
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
    </div>
  </div>
</div>

<style>
  .border {
    border: 2px solid #42a5f5;
  }
</style>
