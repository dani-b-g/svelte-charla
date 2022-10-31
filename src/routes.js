import Introduccion from "./lib/Views/Introduccion.svelte";
import Quees from "./lib/Views/Quees.svelte";
import Error404 from "./lib/Views/Error404.svelte";

const routes = {
  "/": Introduccion,
  "/quees": Quees,
  "*": Error404,
};

export default routes;
