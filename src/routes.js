import Introduccion from "./lib/Views/Introduccion.svelte";
import Quees from "./lib/Views/Quees.svelte";
import Error404 from "./lib/Views/Error404.svelte";
import Ventajas from "./lib/Views/Ventajas.svelte";
import PrimerProyecto from "./lib/Views/PrimerProyecto.svelte";
import BloquesLogicos from "./lib/Views/BloquesLogicos.svelte";
import Stores from "./lib/Views/Stores.svelte";
import SvelteKit from "./lib/Views/SvelteKit.svelte";
import Preguntas from "./lib/Views/Preguntas.svelte";
import Reactivos from "./lib/Views/Reactivos.svelte";
import Animaciones from "./lib/Views/Animaciones.svelte";

const routes = {
  "/": Introduccion,
  "/quees": Quees,
  "/Ventajas": Ventajas,
  "/primerProyecto": PrimerProyecto,
  "/BloquesLogicos": BloquesLogicos,
  "/stores": Stores,
  "/sveltekit": SvelteKit,
  "/reactivos": Reactivos,
  "/preguntas": Preguntas,
  "/animaciones": Animaciones,
  "*": Error404,
};

export default routes;
