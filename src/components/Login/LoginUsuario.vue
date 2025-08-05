<template>
  <div class="container mt-4" style="max-width: 400px;">
    <h1 class="text-primary mb-3">Login</h1>

    <div class="mb-3">
      <input
        v-model="usuario"
        type="text"
        class="form-control"
        placeholder="Usuário"
      />
    </div>

    <div class="mb-3">
      <input
        v-model="senha"
        type="password"
        class="form-control"
        placeholder="Senha"
      />
    </div>

    <button class="btn btn-success mb-3" @click="fazerLogin" :disabled="loading">
      <i class="fa fa-sign-in"></i> {{ loading ? 'Entrando...' : 'Entrar' }}
    </button>

    <button class="btn btn-link" @click="irParaCadastro">
      Não tem uma conta? Cadastre-se
    </button>
  </div>
</template>

<style scoped>
.alert {
  margin-top: 1rem;
}
</style>

<script>
import api from './services/api.js'

export default {
  data() {
    return {
      usuario: '',
      senha: '',
      loading: false
    }
  },
  methods: {
    async fazerLogin() {
      this.loading = true
      try {
        const response = await api.login({ usuario: this.usuario, senha: this.senha })

        const token = response.data.token
        localStorage.setItem('token', token)
        this.$toast.success('Login realizado com sucesso!')
      } catch (erro) {
        this.$toast.error(`Usuário ou senha inválidos`)
      } finally {
        this.loading = false
      }
    },
    irParaCadastro() {
      this.$router.push('/cadastro')
    },
  }
}
</script>