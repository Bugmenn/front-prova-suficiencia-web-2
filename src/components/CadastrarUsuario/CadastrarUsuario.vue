<template>
  <div class="container mt-4" style="max-width: 500px;">
    <h1 class="mb-4">Cadastro de Usuário</h1>

    <form @submit.prevent="cadastrar">
      <div class="mb-3">
        <label for="usuario" class="form-label">Usuário</label>
        <input
          v-model="usuario"
          type="text"
          id="usuario"
          class="form-control"
          required
          autocomplete="username"
        />
      </div>

      <div class="mb-3">
        <label for="nome" class="form-label">Nome Completo</label>
        <input
          v-model="nome"
          type="text"
          id="nome"
          class="form-control"
          required
          autocomplete="name"
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          class="form-control"
          required
          autocomplete="email"
        />
      </div>

      <div class="mb-3">
        <label for="telefone" class="form-label">Telefone</label>
        <input
          v-model="telefone"
          type="tel"
          id="telefone"
          class="form-control"
          required
          autocomplete="tel"
          placeholder="(xx) xxxxx-xxxx"
        />
      </div>

      <div class="mb-3">
        <label for="senha" class="form-label">Senha</label>
        <input
          v-model="senha"
          type="password"
          id="senha"
          class="form-control"
          required
          autocomplete="new-password"
        />
      </div>

      <button type="submit" class="btn btn-success" :disabled="loading">
        {{ loading ? "Cadastrando..." : "Cadastrar" }}
      </button>

      <button type="button" class="btn btn-secondary ms-2" @click="voltar">
        Voltar
      </button>
    </form>

    <div v-if="resposta" :class="['alert', respostaTipo, 'mt-3']">
      {{ resposta }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from './services/api'

export default {
  setup() {
    const router = useRouter();

    const usuario = ref("");
    const nome = ref("");
    const email = ref("");
    const telefone = ref("");  // campo telefone adicionado
    const senha = ref("");
    const resposta = ref("");
    const respostaTipo = ref("");
    const loading = ref(false);

    const cadastrar = async () => {
      resposta.value = '';
      respostaTipo.value = '';
      loading.value = true;

      try {
        await api.cadastrar({
          usuario: usuario.value,
          nome: nome.value,
          email: email.value,
          telefone: telefone.value,  // enviar telefone
          senha: senha.value,
        });

        resposta.value = "Cadastro realizado com sucesso!";
        respostaTipo.value = "alert-success";

        setTimeout(() => {
          router.push('/'); // redireciona para login após sucesso
        }, 1500);

      } catch (error) {
        if (error.response && error.response.data) {
          resposta.value = error.response.data.message || "Erro ao realizar cadastro.";
        } else {
          resposta.value = "Erro ao realizar cadastro.";
        }
        respostaTipo.value = "alert-danger";
      } finally {
        loading.value = false;
      }
    }

    const voltar = () => {
      router.push('/');
    };

    return {
      usuario,
      nome,
      email,
      telefone,  // expor telefone para template
      senha,
      resposta,
      respostaTipo,
      loading,
      cadastrar,
      voltar,
    };
  },
};
</script>
