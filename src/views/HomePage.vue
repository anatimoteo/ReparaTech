<script setup>
import BarChart from '@/components/Charts/BarChart.vue';
import DoughnutChart from '@/components/Charts/DoughnutChart .vue';
import LayoutComponent from '@/components/LayoutComponent.vue';

</script>

<template>
  <LayoutComponent>
    <div class="grid-container">
      <div class="grid-item">
        <h1>Status dos serviços</h1>
        <DoughnutChart />
      </div>
      <div class="grid-item">
        <h1>Faturamento por serviço</h1>
        <BarChart />
      </div>
      <div class="grid-item">
        <h1>Principais serviços</h1>
        <BarChart />
      </div>
      <div class="grid-item">
        <h1>Financeiro</h1>
        <h2>Entrada/Saída</h2>
        <div class="card"><span>R$200</span></div>
        <div class="card"><span>R$80</span></div>
      </div>
    </div>

    

  </LayoutComponent>
</template>

<style scoped>

h1 {
  color: var(--blue);
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

span{
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

@media (max-width: 900px) {
  .grid-container {
  grid-template-columns: 1fr;
}
}
</style>
