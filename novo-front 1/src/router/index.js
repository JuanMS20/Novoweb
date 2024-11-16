import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../layouts/LandingLayout.vue"),
            children: [
                { path: "/", component: () => import("../views/HomePage.vue") },
                { path: "/login", component: () => import("../views/LoginPage.vue") },
                { path: "/registro", component: () => import("../views/RegistroPage.vue") },
            ],
        },
        {
            path: "/app",
            component: () => import("../layouts/MainLayout.vue"),
            children: [
                { path: "principal", component: () => import("../views/PrincipalPage.vue") },
                { path: "crearproducto", component: () => import("../views/CrearProducto.vue") },
                { path: "detallesproducto", component: () => import("../views/DetallesPage.vue") },
                { path: "productos", component: () => import("../views/ProductosPage.vue") },
                { path: "perfil", component: () => import("../views/PerfilUser.vue") },
                { path: "editarp", component: () => import("../views/EditarProductos.vue") },
                { path: "terminoss", component: () => import("../components/TerminosServicio.vue") },
            ],
        },
    ],
});

export default router;
