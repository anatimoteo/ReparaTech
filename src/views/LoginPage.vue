<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function login () {
  router.push("/")
}
</script>

<template>
  <main class="login-page">
    
    <div class="login-container">
      <img src="/src/assets/imagens/logo.png" alt="logo ReparaTech>" class="logo">

      <form action="" class="login-form">
        <h1 class="heading">LOGIN</h1>
        <div class="input-group">
          <label for="user">Usuário</label>
          <input type="email" name="user" id="user" />
        </div>
        <div class="input-group">
          <label for="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit" @click="login" class="">Entrar</button>
      </form>
    </div>

  </main>
</template>

<style scoped>

.logo{
  margin: 40px auto;
  width: 160px;
  display: flex;
  flex-direction: column;
}

.login-container{
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}

.login-form {
  width: 500px;
  background-color: var(--gray-200);
  padding: 32px;
  border-radius: 18px;
  text-align: center;
  margin: auto;
  font-family: var(--font-family--heading);
  font-weight: 100;
  color: var(--blue);
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.684);
}

.heading{
  margin: 20px auto;
  font-family: var(--font-family--heading);
  font-weight: 100;
  color: var(--blue);
}

.input-group{
  margin: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: start;
}


</style>
