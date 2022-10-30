<script>
  import Navbar from "./lib/Navbar.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<Navbar />
<Router {routes} />

<style>
</style>
