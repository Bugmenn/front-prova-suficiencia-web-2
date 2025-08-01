<template>
  <div>
    <input v-model="nome" placeholder="Digite seu nome" />
    <button @click="enviarNome">Enviar</button>
    <p>{{ resposta }}</p>
  </div>
</template>

<script>
import api from './services/api';

export default {
  data() {
    return {
      nome: '',
      resposta: ''
    };
  },
  methods: {
    async enviarNome() {
      try {
        await api.getMensagem(this.nome).then(payload => this.resposta = payload.data)
        await api.getObjeto(this.nome).then(payload => this.resposta += '\r\n' + payload.data.nome + payload.data.data)
      } catch (erro) {
        console.error('Erro ao enviar nome:', erro)
        this.resposta = 'Erro ao enviar nome.'
      }
    }
  }
}
</script>