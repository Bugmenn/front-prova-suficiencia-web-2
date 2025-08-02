import { createApp } from 'vue'
import App from './App.vue'

// importe do router para redirecionamento de tela
import router from './router' 

// importe de Bootstrap e CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// importe Font Awesome
import 'font-awesome/css/font-awesome.min.css';

// importe de estilização local
import './assets/styles.css';

// importe da notificação toast
import Toast, { POSITION, useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  hideProgressBar: true,
})

const toast = useToast()
app.config.globalProperties.$toast = toast

app.mount('#app')
