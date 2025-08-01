<template>
  <div class="hello">
    <h1 class="text-primary">{{ msg }}</h1>
    <p class="lead">
      Esta é uma página de exemplo usando Vue Router com Bootstrap.
    </p>

    <div class="mt-4">
      <button class="btn btn-secondary" @click="$router.push('/')">
        <i class="fa fa-arrow-left"></i> Voltar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Bem-vindo à página HelloWorld!'
    }
  }
}
</script>

<style scoped>
.hello {
  padding: 2rem;
}
</style>