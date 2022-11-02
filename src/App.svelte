<script>
  import Navbar from "./lib/Components/Navbar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<Navbar />
<div class="container content-panel">
  <div class="card-panel orange lighten-5 content-panel">
    <Router {routes} />
  </div>
</div>

<style>
  .content-panel{
    margin-top: 10px !important;
    min-height: 90vh !important;
  }
</style>
