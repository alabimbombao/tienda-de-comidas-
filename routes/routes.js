import Hamburguesas from "../views/Hamburguesas.vue";
import Perros from "../views/Perros.vue";
import Pizzas from "../views/Pizzas.vue";
import Postres from "../views/Postres.vue";
import Promociones from "../views/Promociones.vue";
import Bebidas from "../views/Bebidas.vue";
import Nosotros from "../views/Nosotros.vue";

import { createRouter, createWebHashHistory} from "vue-router"

const routes = [
  {path: "/hamburguesa", component:Hamburguesas},
  {path: "/perros", component:Perros},
  {path: "/pizzas", component:Pizzas},
  {path: "/postres", component:Postres},
  {path: "/Promociones", component:Promociones},
  {path: "/bebidas", component:Bebidas},
  {path: "/", component:Nosotros},
]

export const router = createRouter({
    routes,
    history: createWebHashHistory()
})