<script>
	import CodeBlock from './../Components/CodeBlock.svelte';

  import { fade } from "svelte/transition";


  let awaitCodeFlag=false;
  let eachCodeFlag=false;
  let keyCodeFlag=false;

  
  

//#region String para CodeBlock
  const awaitCode= new String(`
        {#await promise}
          <!-- promise is pending -->
          <p>waiting for the promise to resolve...</p>
        {:then value}
          <!-- promise was fulfilled -->
          <p>The value is {value}</p>
        {:catch error}
          <!-- promise was rejected -->
          <p>Something went wrong: {error.message}</p>
        {/await}
            `);
    const eachCode=new String(`
        {#each todos as todo}
          <p>{todo.text}</p>
        {:else}
          <p>No tasks today!</p>
        {/each}
    `)
    const keyCode =new String(`
        {#key value}
          <Component />
        {/key}

        {#key value}
          <div transition:fade>{value}</div>
        {/key}
    `)
//#endregion

function openAwaitCode() {
  eachCodeFlag=false;
  keyCodeFlag=false;
  awaitCodeFlag=!awaitCodeFlag
}
function openKeyCode() {
  eachCodeFlag=false;
  awaitCodeFlag=false
  keyCodeFlag=!keyCodeFlag;
  
}
function openEachCode() {
  awaitCodeFlag=false
  keyCodeFlag=false;
  eachCodeFlag=!eachCodeFlag;
  
  
}
</script>

<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h3>🐖 Bloques Logicos 🐖</h3>
  </div>
</div>
<div class="row valign-wrapper ">
  <div class="col s12">
    <div class="divider" />
    <div class="section">
      <div class="row">
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
          En Svelte tenemos los "tipicos" bloques logicos usados en cualquier lenguaje o frameworks como por ejemplo: <b>IF, FOR-EACH, FOR, etc.</b>
          <br>
          <br>
          En Svelte tenemos un par de ellos que nos vendran muy bien a la hora de realizar ciertas practicas dentro de nuestra aplicación y son los que vereis mas abajo.
          <br>
          <br>
          <blockquote>
            Click aqui {'<( ‵□′)>───>'} <a href="https://svelte.dev/docs#template-syntax-if" target="_blank">aqui</a> para acceder a la documentación.
          </blockquote>
          
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="section">
      <div class="row">
        <div class="col s4 center"><button on:click={openEachCode} class="waves-effect waves-light btn">{"{#each ...}"}</button></div>
        <div class="col s4 center"><button on:click={openAwaitCode} class="waves-effect waves-light btn">{"{#await ...}"}</button></div>
        <div class="col s4 center"><button on:click={openKeyCode} class="waves-effect waves-light btn">{"{#key}"}</button></div>
      </div>
      <div class="row">
        {#if eachCodeFlag}
           <div transition:fade class="col s12">
             <CodeBlock code={eachCode} codeType={'html'}/>
           </div>
        {/if}
        {#if awaitCodeFlag}
           <div transition:fade class="col s12">
             <CodeBlock code={awaitCode} codeType={'html'}/>
           </div>
        {/if}
        {#if keyCodeFlag}
           <div transition:fade class="col s12">
             <CodeBlock code={keyCode} codeType={'html'}/>
           </div>
        {/if}
      </div>
    </div>

    </div>
</div>

<style>
  /* your styles go here */
</style>
