<script>
  import { fade } from "svelte/transition";
  import CodeBlock from "../Components/CodeBlock.svelte";
  import { time } from "./../../stores.js";
  import { count } from "./../../stores.js";

  let flagReadable = false;
  let flagSubscribe = false;

  const formatter = new Intl.DateTimeFormat("es", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  function openSubscribe() {
    flagSubscribe = !flagSubscribe;
    flagReadable = false;
  }
  function openReadable() {
    flagReadable = !flagReadable;
    flagSubscribe = false;
  }

  const readableCodeHtml = new String(`

        <h1>Son las: {formatter.format($time)}</h1>
 
 `);
  const readableCodeJs = new String(`

        import { time } from './stores.js';

        const formatter = new Intl.DateTimeFormat('es', {
          hour12: true,
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit'
        });
 `);
  const readableCodeStore = new String(`
        // Ejemplo de lectura
        export const time = readable(new Date(), function start(set) {
          const interval = setInterval(() => {
            set(new Date());
          }, 1000);

          return function stop() {
            clearInterval(interval);
          };
        });
  
  `);

  const subscribeCodeHtml = new String(`

        <h1>El contador tiene: {$count}</h1>

        <button on:click={count.increment}>+</button>
        <button on:click={count.decrement}>-</button>
        <button on:click={count.reset}>reset</button>
      
  `);
  const subscribeCodeJs = new String(`
        import { count } from './stores.js';
  `);
  const subscribeCodeStore = new String(`

        function createCount() {
          const { subscribe, set, update } = writable(0);

          return {
            subscribe,
            increment: () => update((n) => n + 1),
            decrement: () => update((n) => n - 1),
            reset: () => set(0),
          };
        }
  
  `);
</script>

<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h4>💎 Stores 💎</h4>
  </div>
  <!-- la mejor opcion para hacer un SSR(server Site Rendering) -->
</div>
<div class="row valign-wrapper ">
  <div class="col s12">
    <div class="divider" />
    <div class="section">
      <div class="row valign-wrapper">
        <div class="col s6 ">
          <h5>¿Qué es?</h5>

          <p>
            Los Stores son el objeto que permite el acceso "global" y reactivo
            de valores.
          </p>

          <p>
            En Svelte tenemos el módulo de <i><b>svelte/store</b></i> que implementa
            todo lo necesario para tener unas stores mínimamente funcionales de forma
            sencilla.
          </p>

          <p>
            Una vez declaradas en el fichero stores, podremos acceder a ellas
            con el símbolo reservado ($) el mismo que para mantener reactividad
            que explicamos antes, pero se utiliza de otra forma que os mostraré
            en los ejemplos.
          </p>
          <p>
            Como gran peculiaridad existen los <b
              >.subscribe el equivalente a Observables de RxJs</b
            >
          </p>
          <blockquote>
            Me quedo algo en el tintero y os invito a que lo investiguéis en su
            documentación <a
              href="https://svelte.dev/docs#run-time-svelte-store"
              target="_blank"
              rel="noopener noreferrer">🙄 aquí</a
            >
          </blockquote>
        </div>
        <div class="col s6 center">
          <span>
            <img
              class="responsive-img"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/sotresRick.jpg?alt=media&token=63748567-fd7a-4509-b33d-57bc166935ba"
            />
          </span>
        </div>
      </div>
      <div class="divider" />
      <div class="section">
        <div class="row">
          <div class="col s6 center">
            <button on:click={openReadable} class="waves-effect waves-light btn"
              >{"Ejemplo Readable"}</button
            >
          </div>

          <div class="col s6 center">
            <button
              on:click={openSubscribe}
              class="waves-effect waves-light btn"
              >{"Ejemplo store custom con subscribe"}</button
            >
          </div>
        </div>
        {#if flagReadable}
          <!-- content here -->

          <div transition:fade class="row border valign-wrapper">
            <div transition:fade class="col s6 center-align">
              <h4>Son las: {formatter.format($time)}</h4>
            </div>
            <div transition:fade class="col s6">
              <h5>HTML</h5>
              <CodeBlock code={readableCodeHtml} codeType={"html"} />
              <h5>JS</h5>
              <CodeBlock code={readableCodeJs} codeType={"js"} />
              <h5>Store</h5>
              <CodeBlock code={readableCodeStore} codeType={"js"} />
            </div>
          </div>
        {/if}
        {#if flagSubscribe}
          <!-- content here -->

          <div transition:fade class="row border valign-wrapper">
            <div transition:fade class="col s6 center-align">
              <h4>El contador tiene:{$count}</h4>

              <button
                class="waves-effect waves-light btn"
                on:click={count.increment}>+</button
              >
              <button
                class="waves-effect waves-light btn"
                on:click={count.decrement}>-</button
              >
              <button
                class="waves-effect waves-light btn"
                on:click={count.reset}>reset</button
              >
            </div>
            <div transition:fade class="col s6">
              <h5>HTML</h5>
              <CodeBlock code={subscribeCodeHtml} codeType={"html"} />
              <h5>JS</h5>
              <CodeBlock code={subscribeCodeJs} codeType={"js"} />
              <h5>Store</h5>
              <CodeBlock code={subscribeCodeStore} codeType={"js"} />
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .border {
    border: 2px solid #42a5f5;
  }
</style>
