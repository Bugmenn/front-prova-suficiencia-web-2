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

    <button class="btn btn-success mb-3" @click="abrirTela">Redirecionar</button>

    <button class="btn btn-success mb-3" @click="notificar">Mandar notificação</button>

    <div v-if="resposta" class="alert alert-info white-space-pre-line">
      {{ resposta }}
    </div>
  </div>
</template>

<style lang="css" scoped>
input {
  background-color: darkgray !important;
  color: white !important;
  border-color: white !important;
}
</style>

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
        this.$toast.error('Não foi possivel enviar o nome.')
        this.resposta = 'Erro ao enviar nome.'
      }
    },
    abrirTela() {
      this.$router.push('/hello')
    },
    notificar() {
      this.$toast.success('funcionou')
    },
  }
}
</script>

<style scoped>
.white-space-pre-line {
  white-space: pre-line;
}
</style>