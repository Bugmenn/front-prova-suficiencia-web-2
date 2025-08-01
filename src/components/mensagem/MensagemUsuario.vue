<template>
  <div class="container mt-4">
    <h1 class="text-primary mb-3">Olá, Vue + Bootstrap!</h1>

    <div class="mb-3">
      <input
        v-model="nome"
        type="text"
        class="form-control"
        placeholder="Digite seu nome"
      />
    </div>

    <button class="btn btn-success mb-3" @click="enviarNome">
      <i class="fa fa-paper-plane"></i> Enviar
    </button>

    <button class="btn btn-success mb-3" @click="abrirTela">Teste</button>

    <div v-if="resposta" class="alert alert-info white-space-pre-line">
      {{ resposta }}
    </div>
  </div>
</template>

<script>
import api from './services/api'

export default {
  data() {
    return {
      nome: '',
      resposta: ''
    }
  },
  methods: {
    async enviarNome() {
      try {
        const mensagem = await api.getMensagem(this.nome)
        const objeto = await api.getObjeto(this.nome)
        
        this.resposta = `${mensagem.data}\n${objeto.data.nome}\n${objeto.data.data}`
      } catch (erro) {
        console.error('Erro ao enviar nome:', erro)
        this.resposta = 'Erro ao enviar nome.'
      }
    },
    abrirTela() {
      this.$router.push('/hello')
    },
  }
}
</script>

<style scoped>
.white-space-pre-line {
  white-space: pre-line;
}
</style>