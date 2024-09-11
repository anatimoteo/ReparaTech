<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userName = ref('')
const userPhoto = ref(null)
const password = ref('')

const router = useRouter()

function login(e) {
  e.preventDefault()

  if (password.value.length >= 6) {
    localStorage.setItem('userName', userName.value)
    localStorage.setItem('userPhoto', userPhoto.value)

    router.push('/')
  } else {
    alert('A senha deve ter no mínimo 6 caracteres.')
  }
}

function handlePhotoUpload(event) {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      userPhoto.value = reader.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <main class="login-page">
    <div class="login-container">
      <img src="/src/assets/imagens/logo.png" alt="logo ReparaTech" class="logo" />

      <form @submit="login" class="login-form">
        <h1 class="heading">LOGIN</h1>

        <div class="input-group">
          <label for="user">Usuário</label>
          <input v-model="userName" type="text" name="user" id="user" required />
        </div>

        <div class="input-group">
          <label for="password">Senha</label>
          <input v-model="password" type="password" name="password" id="password" required />
        </div>

        <div class="input-group">
          <label for="photo">Foto de Perfil</label>
          <input type="file" @change="handlePhotoUpload" accept="image/*" />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color:  var(--blue);
}

.logo {
  margin: 40px auto;
  width: 160px;
  display: block;
}

.login-container {
  position: relative;
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

.heading {
  margin: 20px auto;
  font-family: var(--font-family--heading);
  font-weight: 100;
  color: var(--blue);
}

.input-group {
  margin: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: start;
}

input[type="text"],
input[type="password"],
input[type="file"] {
  padding: 8px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  font-size: 16px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--blue);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: var(--blue-dark);
}
</style>
