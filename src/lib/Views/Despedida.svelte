<script>
  // your script goes here
</script>

<div class="row valign-wrapper">
  <div class="col s12 center-align">
    <h4>Despedida 😢</h4>
  </div>
</div>
<div class="row valign-wrapper ">
  <div class="col s12">
    <div class="divider" />
    <div class="section">
      <div class="row">
        <div class="col s12 center">
          <span>
            <img
              class="responsive-img"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/despedidaHomer.gif?alt=media&token=a2b4d468-1c14-4611-b744-895169c8dba3"
            />
            <!-- <img
              class="responsive-img"
              alt=""
              src="https://firebasestorage.googleapis.com/v0/b/svelte-charla.appspot.com/o/despedidaCyberpunk.gif?alt=media&token=ce1c2e76-7d0d-4724-b13e-bf917d59cb23"
            /> -->
          </span>
        </div>
        <div class="col offset-s1 s10 ">
          <p>
            Como conclusión, creo que es un framework bastante potente por sus
            detalles y diferencias importantes en comparación con sus compañeros
            y que, en lo personal, me plantee aprenderlo por qué creo que
            seguirá popularizándose hasta los niveles de React Angular o Svelte
          </p>
          <p>
            Gracias por escucharme y espero que aprendierais algo de este
            "nuevo" framework o al menos que os entrara el "gusanillo" de
            aprenderlo.
          </p>
          <div class="row valign-wrapper">
            <div class="col offset-s2 s7 center-align">
              <blockquote>
                👇🏻 Os dejo el repositorio de esta web y mi perfil de Linkedin 👇🏻
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="divider" /> -->

    <div class="row valign-wrapper">
      <div class="col offset-s1 s10 ">
        <ul class="menu" data-animation="diagonal">
          <li>
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            <a href="https://github.com/dani-b-g/svelte-charla" target="_blank">
              <i class="fa fa-github-square  fa-5x">
                <span class="border border-top" />
                <span class="border border-right" />
                <span class="border border-bottom" />
                <span class="border border-left" />
              </i></a
            >
          </li>
          <li>
            <!-- svelte-ignore security-anchor-rel-noreferrer -->
            <a href="https://www.linkedin.com/in/daniel-b-g/" target="_blank">
              <i class="fa fa-linkedin-square  fa-5x" />
              <!-- <i class="large material-icons">mail_outline</i> -->
              <span class="border border-top" />
              <span class="border border-right" />
              <span class="border border-bottom" />
              <span class="border border-left" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --body-bg-color: #1a1c1d;
    --text-color: #aaaebc;
    --hr-color: #26292a;
    --transition-duration: 0.3s;
    --transition-delay: 0.2s;
    --red: #e74c3c;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .menu {
    display: flex;
    justify-content: center;
  }

  .menu li {
    margin-right: 70px;
  }

  .menu a {
    position: relative;
    display: block;
    padding: 10px;
  }

  .menu .border {
    position: absolute;
    left: 0;
    background: currentColor;
    transition: transform var(--transition-duration) ease-in-out;
  }

  .menu .border-top,
  .menu .border-bottom {
    width: 100%;
    height: 1px;
    transform: scaleX(0);
  }

  .menu .border-left,
  .menu .border-right {
    width: 1px;
    height: 100%;
    transform: scaleY(0);
  }

  .menu .border-top,
  .menu .border-left,
  .menu .border-right {
    top: 0;
  }

  .menu .border-bottom {
    bottom: 0;
    transform-origin: bottom right;
  }

  .menu .border-top {
    transform-origin: top left;
  }

  .menu .border-left {
    transform-origin: bottom left;
  }

  .menu .border-right {
    left: auto;
    right: 0;
    transform-origin: top right;
  }

  .menu a:hover .border-top,
  .menu a:hover .border-bottom {
    transform: scaleX(1);
  }

  .menu a:hover .border-left,
  .menu a:hover .border-right {
    transform: scaleY(1);
  }

  .menu a:hover .border-right {
    transition-delay: var(--transition-delay);
  }

  .menu a:hover .border-bottom {
    transition-delay: calc(var(--transition-delay) * 2);
  }

  .menu a:hover .border-left {
    transition-delay: calc(var(--transition-delay) * 3);
  }

  /* ANIMATIONS
–––––––––––––––––––––––––––––––––––––––––––––––––– */
  .menu[data-animation="diagonal"] .border-left {
    transform-origin: top left;
  }

  .menu[data-animation="diagonal"] .border-right,
  .menu[data-animation="diagonal"] .border-bottom {
    transform-origin: bottom right;
  }

  .menu[data-animation="diagonal"] a:hover [class^="border"] {
    transition-delay: 0s;
  }
</style>
