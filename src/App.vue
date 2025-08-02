<template>
  <div id="app">
    <BarraNavegacao />
    <router-view />
  </div>
</template>

<script>
import BarraNavegacao from './components/BarraNavegacao/BarraNavegacao.vue';

export default {
  components: {
    BarraNavegacao
  }
}
</script>