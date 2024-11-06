import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";

// Crea la aplicación de Vue
const app = createApp(App);

// Usa el router antes de montar la aplicación
app.use(router);

// Monta la aplicación
app.mount('#app');
