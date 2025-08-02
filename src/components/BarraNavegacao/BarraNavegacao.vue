<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">MeuApp</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Início</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/hello">Hello</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>
.router-link-active {
  font-weight: bold;
  background-color: gray;
  border-radius: 40%;
}
</style>

<script>
export default {
  name: "BarraNavegacao"
}
</script>
