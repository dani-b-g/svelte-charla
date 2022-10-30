<script>
  import Navbar from "./lib/Components/Navbar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<Navbar />
<div class="container mt-2">
  <Router {routes} />
</div>

<style>
</style>
