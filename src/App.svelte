<script>
  import Navbar from "./lib/Navbar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<Navbar />
<div class="container">
  <Router {routes} />
</div>

<style>
</style>
