<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>
    <main class="page">
        <nav class="menu">
            <RouterLink to="/">Serviços</RouterLink>
            <RouterLink to="/login">Sair</RouterLink>
        </nav>
        <div class="page-content">
            <slot></slot>
        </div>
    </main>
</template>


<style scoped>
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
    width: 100%;
    max-height: 100vh;
    overflow-y: scroll;
    padding: 50px;
}
</style>