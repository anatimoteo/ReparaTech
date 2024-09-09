<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <main class="page">
        <nav class="menu">
            <div class="user">
                <div class="foto-user"></div>
                <p>Nome usuário</p>
            </div>

            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/clients">Clientes</RouterLink>
            <RouterLink to="/services">Serviços</RouterLink>
            <RouterLink to="/equipments">Equipamentos</RouterLink>
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