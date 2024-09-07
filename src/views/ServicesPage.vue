<script setup>
import LayoutComponent from '@/components/LayoutComponent.vue'
</script>
<template>
  <LayoutComponent>
    <table>
      <tr>
        <th colspan="2">Principais Serviços</th>
        <th>Faturamentos</th>
      </tr>
      <tr>
        <td>Troca de Tela</td>
        <td>Descrição</td>
        <td>R$350</td>
      </tr>
      <tr>
        <td>Reparo de Câmera</td>
        <td>Descrição</td>
        <td>R$250</td>
      </tr>
      <tr>
        <td>Reparo de Bateria</td>
        <td>Descrição</td>
        <td>R$200</td>
      </tr>
    </table>

    <h1>Prazo Médio</h1>
  </LayoutComponent>
</template>
<style scoped>
table,
th,
td {
  background-color: var(--blue);
  border: 1px solid rgb(255, 255, 255);
  border-collapse: collapse;
  color: white;
  border-radius: 8px;
  width: 500px;
  margin: auto;
}

th,
td {
  padding: 13px;
}
</style>
