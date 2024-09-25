<script setup>
import BarChart from '@/components/Charts/BarChart.vue';
import DoughnutChart from '@/components/Charts/DoughnutChart .vue';
import LayoutComponent from '@/components/LayoutComponent.vue';


</script>

<template>
  <LayoutComponent>
    <div class="grid-container">
      <div class="grid-item">
        <h1>Conversão de Orçamento em Serviços</h1>
        <BarChart />
      </div>
      
      <div class="grid-item">
        <h1>Serviços Pendentes</h1>
        <DoughnutChart />
      </div>
      
      <div class="grid-item">
        <h1>Desempenho Clientes</h1>
        <DoughnutChart />
      </div>
      
      <div class="grid-item">
        <h1>Principais Serviços Realizados</h1>
        <BarChart />
      </div>

      </div>
  </LayoutComponent>
</template>

<style scoped>
h1 {
  color: var(--blue);
  font-size: 1.5rem;
}

h2 {
  color: var(--blue);
  font-weight: 300;
}

.card {
  height: 117px;
  width: 235px;
  background-color: var(--blue);
  border-radius: 10px;
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  color: white;
  font-weight: 450;
  font-size: 36px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.financeiro-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>
