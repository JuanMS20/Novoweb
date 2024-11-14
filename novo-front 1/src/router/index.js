import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../layouts/MainLayout.vue"),
            children: [
                { path: "/", component: () => import("../views/HomePage.vue") },
                { path: "/principal", component: () => import("../views/PrincipalPage.vue") },
                { path: "/crearproducto", component: () => import("../views/CrearProducto.vue") },
                { path: "/detallesproducto", component: () => import("../views/DetallesPage.vue") },
                { path: "/productos", component: () => import("../views/ProductosPage.vue") },
                { path: "/perfil", component: () => import("../views/PerfilUser.vue") },
                { path: "/EditarP", component: () => import("../views/EditarProductos.vue") },  
                { path: "/terminosS", component: () => import("../components/TerminosServicio.vue") },  
            ],
        },
        {
            path: "/login",
            component: () => import("../layouts/LandingLayout.vue"),
            children: [
                { path: "/login", component: () => import("../views/LoginPage.vue") },
                { path: "/registro", component: () => import("../views/RegistroPage.vue") },
            ]
        },
    ],
});

export default router;
