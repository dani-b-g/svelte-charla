<script>
  import Navbar from "./lib/Components/Navbar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<Navbar />
<div class="container content-panel">
  <div class="card-panel float-container">
    <Router {routes} />
  </div>
</div>

<style>
  .content-panel{
    min-height: 80vh !important;
    padding-top: 7vh !important;
    
  }
  .float-container{
    background-color: rgba(5, 171, 232, 0.7) !important;
    min-height: 80vh !important;

  }
</style>
