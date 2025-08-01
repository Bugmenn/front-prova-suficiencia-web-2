import { createApp } from 'vue'
import App from './App.vue'

// importe do router
import router from './router' 

// importe de Bootstrap e CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// importe Font Awesome
import 'font-awesome/css/font-awesome.min.css';

createApp(App).use(router).mount('#app')
