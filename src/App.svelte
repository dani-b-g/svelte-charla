<script>
  import Navbar from "./lib/Components/Navbar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<Navbar />
<div class="container content-panel white-text">
  <div class="card-panel float-container">
    <Router {routes} />
  </div>
</div>

<style>
  .content-panel {
    min-height: 80vh !important;
    padding-top: 7vh !important;
  }
  .float-container {
    background-color: rgba(75, 75, 75, 0.753) !important;
    min-height: 80vh !important;
  }
</style>
