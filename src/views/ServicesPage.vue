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
 
    <div class="prazo-medio">
      <h1>Prazo Médio</h1>
      <div class="card">
        <span>Troca de Tela</span>
        <span> 3 horas</span>
      </div>

      <div class="card">
        <span>Reparo de Câmera</span>
        <span>1 a 2 horas</span>
      </div>

      <div class="card">
        <span>Troca de Bateria</span>
        <span> 2 a 3 horas</span>
      </div>

    </div>

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
  width: 600px;
  height: 50px;
  margin: auto;
  font-size: 20px;
}

th,
td {
  padding: 13px;
}

.prazo-medio {
  text-align: center;
  margin-top: 50px;
}

.card {
  display: inline-block;
  background-color: var(--blue);
  padding: 30px;
  border-radius: 8px;
  margin: 10px;
  width: 150px;
  text-align: center;
}

.card span {
  display: block;
  color: white;
  font-size: 20px ;
}



</style>
