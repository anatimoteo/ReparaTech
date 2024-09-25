<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const userName = ref('Nome usuário')
const userPhoto = ref(null)

onMounted(() => {
  userName.value = localStorage.getItem('userName') || 'Nome usuário'
  userPhoto.value = localStorage.getItem('userPhoto') || null
})
</script>

<template>
  <main class="page">
    <nav class="menu">
      <div class="user">
        <div class="foto-user">
          <img v-if="userPhoto" :src="userPhoto" alt="Foto do Usuário" class="user-photo" />
        </div>
        <p>{{ userName }}</p>
      </div>

      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/clients">Clientes</RouterLink>
      <RouterLink to="/services">Serviços</RouterLink>
      <RouterLink to="/pecas">Peças</RouterLink>
      <RouterLink to="/financeiro">Financeiro</RouterLink>
      <RouterLink to="/relatorios">Relatórios</RouterLink>
      <RouterLink to="/equipamentos">Equipamentos</RouterLink>
      <RouterLink to="/login">Sair</RouterLink>
    </nav>

    <div class="page-content">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.foto-user {
  width: 80px;
  height: 80px;
  background-color: var(--gray-100);
  border-radius: 50%;
  margin-bottom: 10px;
  overflow: hidden;
}

.user-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page {
  display: flex;
}

.menu {
  width: 20%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.page-content {
  background-color: white;
  color: var(--blue);
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 50px;
}
</style>
